/**
 * 工具方法，必须符号依赖最小化才能加进来
 * */
const helper = {
  /**
   * 模拟睡眠等待
   * @param time {number} -可选 等待时间，默认1000*1 ms
   * @returns {Promise<any>}
   */
  sleep (time) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true)
      }, time || 1000 * 1)
    })
  },
  /**
   * 给数字字符串补零，不支持负数
   * 改自：http://blog.csdn.net/aimingoo/article/details/4492592
   * @param num
   * @param fill
   * @returns {string}
   */
  padNumber: function (num, fill) {
    const len = ('' + num).length
    return (Array(fill > len ? fill - len + 1 || 0 : 0).join(0) + num)
  },
  /**
   * 获取一个以当前日期标记，可作为按天进行信息记录的id
   * @param splitStr - 年月日只讲的分割符号，默认无，常见可传: - _ / 等
   * @returns {string}
   */
  getDayTag: function (splitStr) {
    const t = this
    const d = new Date()
    const curDateArr = [
      d.getFullYear(),
      t.padNumber(d.getMonth() + 1, 2),
      t.padNumber(d.getDate(), 2)
    ]
    return curDateArr.join(splitStr || '')
  },
  /**
   * 间隔控制器，某个间隔内的值只允许出现一次
   * @param id {string} 控制器的id，任意字符串
   * @param interval {number} 要控制的间隔，必须为整数
   * @param curVal {number} 要控制的当前值
   * @returns {boolean} 返回要控制的值，是否已在某个范围内调用过
   */
  intervalController: (function () {
    const _cache = {}
    return function (id, interval, curVal, returnMoreInfo) {
      if (!_cache[id]) {
        _cache[id] = {}
      }
      const dataMap = _cache[id]
      const key = parseInt(curVal / (interval + 1)) + 1
      const isNew = typeof dataMap[key] === 'undefined'
      dataMap[key] = true

      if (returnMoreInfo) {
        return {
          id,
          isNew,
          key,
          interval,
          curVal
        }
      } else {
        return isNew
      }
    }
  })(),

  /* 判断一个对象是否为Promise对象 */
  isPromise (obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
  },

  isEmail (str) {
    const pattern = /^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/
    return pattern.test(str)
  },

  /**
   * 将毫秒数转为天/时/分/秒的表达形式
   * @param msd {number} -必选 毫秒数
   * @param retuenDefText -可选 默认出数组信息，true则输出统计结果的默认文本
   * @returns {string|[number, number, number, number, number]}
   */
  millisecondToDate (msd, retuenDefText) {
    /* 数据预处理 */
    let msdTotal = parseFloat(msd)
    if (msdTotal < 0) msdTotal = 0

    /**
     * parseInt(1/(1000*60*60*24))将出现计算异常
     * 所以需要加上Math.floor进行修正
     * 必须是向下取整，四舍五入或向上取整都将导致出现负数的情况
     * @param num
     * @returns {number}
     */
    function convert (num) {
      return parseInt(Math.floor(num))
    }

    /* 进行硬编码式的递归计算 */
    const oneMillisecond = 1
    const oneSecond = oneMillisecond * 1000
    const oneMinute = oneSecond * 60
    const oneHour = oneMinute * 60
    const oneDay = oneHour * 24
    const dayCount = convert(msdTotal / oneDay)
    msdTotal = msdTotal - dayCount * oneDay
    const hourCount = convert(msdTotal / oneHour)
    msdTotal = msdTotal - hourCount * oneHour
    const minuteCount = convert(msdTotal / oneMinute)
    msdTotal = msdTotal - minuteCount * oneMinute
    const secondCount = convert(msdTotal / oneSecond)
    msdTotal = msdTotal - secondCount * oneSecond
    const millisecondCount = convert(msdTotal / oneMillisecond)
    const result = [dayCount, hourCount, minuteCount, secondCount, millisecondCount]

    /* 输出结果 */
    if (retuenDefText) {
      let str = ''
      const textMap = ['天', '小时', '分钟', '秒', '毫秒']
      result.forEach((val, index) => {
        if (val) str += val + textMap[index] + ' '
      })
      return str
    } else {
      return result
    }
  }
}

module.exports = helper
