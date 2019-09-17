/*!
 * @name      log.js
 * @version   1.1.0
 * @author    Blaze
 * @date      2018/5/14 11:43
 * @github    https://github.com/xxxily
 */

const fs = require('fs-extra')
const path = require('path')
const dayjs = require('dayjs')

class LogSystem {
  constructor (setting) {
    this.baseSetting = {
      /* 保存的文件地址 */
      path: path.join(process.cwd(), '/log/'),
      /* 保存文件后缀格式 */
      ext: '.log',
      /* 保存的文件名统一加前缀，默认不加 */
      fileNamePrefix: '',
      /* 保存的文件名的日期格式 */
      fileNameDateFormat: 'YYYY-MM-DD',
      /* 日志输出的日期格式 */
      outputDateFormat: 'HH:mm:ss',
      /* 换行方式 */
      EOL: '\r\n'
    }
    this._cache_ = []
    this.setting(setting)
  }

  /* 创建一个新实例 */
  create (setting) {
    return new LogSystem(setting)
  }

  /**
   * 相关设置项 可设置的选项请参考上面的 setting 对象
   * @param obj
   */
  setting (obj) {
    const setting = this.baseSetting
    for (var key in obj) {
      if (typeof setting[key] !== 'undefined') {
        setting[key] = obj[key]
      }
    }
  }

  msgFormat (msg, type) {
    if (Object.prototype.toString.call(msg) === '[object Object]') {
      msg = JSON.stringify(msg, null, 2)
    }

    if (Object.prototype.toString.call(msg) === '[object Error]') {
      msg = msg.stack ? msg.stack.toString() : msg.toString()
    }

    const t = this
    const setting = t.baseSetting
    const baseMsg = msg.toString().trim()
    const formatStr = setting.outputDateFormat
    let msgType = 'info'

    switch (type) {
      case -1 :
        msgType = 'error'
        break
      case 1 :
      case 2 :
      case 3 :
      case 4 :
      case 5 :
        msgType = 'info level ' + type
        break
      default :
        msgType = 'info'
        break
    }
    if (type) {
      return '[' + dayjs().format(formatStr) + ']' + '[' + msgType + '] ' + baseMsg
    } else {
      return '[' + dayjs().format(formatStr) + '] ' + baseMsg
    }
  }

  /* 获取日志将记录到哪个路径下 */
  getLogFilePath () {
    const setting = this.baseSetting
    const logDirPath = setting.path
    const logFileName = setting.fileNamePrefix + dayjs().format(setting.fileNameDateFormat) + setting.ext
    const logFilePath = path.join(path.normalize(logDirPath), logFileName)
    return logFilePath
  }

  /**
   * 将信息存储到文件，不进行任何格式处理
   * @param logMsg {string} -必选 要存储的日志信息
   */
  saveLog (logMsg) {
    const t = this
    const setting = t.baseSetting
    const logDirPath = setting.path
    const logFilePath = t.getLogFilePath()
    const logStr = logMsg.toString() + setting.EOL

    t._cache_.push(logStr)

    /* 确保目录存在 */
    fs.mkdirsSync(logDirPath)

    function writeLog (fd, callback) {
      const curLen = t._cache_.length
      fs.write(fd, t._cache_.join(''), 'utf-8', function (err, written, string) {
        callback && callback(err, written, string)
        if (err) {
          console.error(t.msgFormat('日志写入失败，请检查是否有权限或存储空间是否充足~', -1))
          return false
        }

        /* 写入成功后移除已写入的缓存 */
        t._cache_.splice(0, curLen)
      })
    }

    function gotoWrite () {
      if (t.__fd__ && t.__curFdPath__ === logFilePath) {
        writeLog(t.__fd__)
      } else {
        fs.open(logFilePath, 'a+', function (err, fd) {
          if (err) {
            console.error(t.msgFormat('打开文件失败，请检查您是否有权限~', -1))
            return false
          }
          t.__fd__ = fd
          t.__curFdPath__ = logDirPath
          writeLog(t.__fd__)
        })
      }
    }

    /* 先进行缓存，延迟1s再写入 */
    clearTimeout(t._saveTimer_)
    t._saveTimer_ = setTimeout(function () {
      gotoWrite()
    }, 1000 * 1)
  }

  /* 插入默认分割线 */
  splitLine () {
    const t = this
    let splitLine = '+' + '------------+'.repeat(6)
    splitLine = '\n' + splitLine + '\n'
    t.saveLog(splitLine)
  }

  /**
   * 运行日志记录
   * @param msg {string} -必选 要记录的日志信息
   * @param type {number} -可选 日志类型 -1 表示错误类型，0 表示正常的信息记录，1-10 表示信息类型的重要级别，越往后，越重要
   * @param logType {number} -可选 日志的记录方式，默认输出到控制台并保存到日志文件， -1 表示只输出到控制台，-2 表示只保存到日志文件，并不输出到控制台
   */

  log (msg, type, logType) {
    const t = this
    const logStr = t.msgFormat(msg, type)

    /* 将日志信息输出到控制台 */
    if (logType !== -2) {
      if (type === -1) {
        console.error(logStr)
      } else {
        console.log(logStr)
      }
    }

    /* 将日志存储到文件 */
    if (logType !== -1) {
      t.saveLog(logStr)
    }
  }

  /**
   * 只显示输出，不保存到日志文件
   * @param msg {string} -必选 要记录的日志信息
   */
  showLog (msg) {
    const t = this
    t.log(msg, 0, -1)
  }

  /**
   * 不输出显示，只保存到日志文件里
   * @param msg {string} -必选 要记录的日志信息
   */
  hideLog (msg) {
    const t = this
    t.log(msg, 0, -2)
  }

  error (msg) {
    var t = this
    t.log(msg, -1)
  }

  /**
   * 只显示输出，不保存到日志文件
   * @param msg {string} -必选 要记录的日志信息
   */
  showError (msg) {
    const t = this
    t.log(msg, -1, -1)
  }

  /**
   * 不输出显示，只保存到日志文件里
   * @param msg {string} -必选 要记录的日志信息
   */
  hideError (msg) {
    const t = this
    t.log(msg, -1, -2)
  }
}

module.exports = new LogSystem()
