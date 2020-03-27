/*!
 * @name         string.js
 * @description  字符串相关的方法
 * @version      0.0.1
 * @author       Blaze
 * @date         21/03/2019 16:00
 * @github       https://github.com/xxxily
 */

const trim = (function () {
  if (String.prototype.trim) {
    return function (str) {
      return String.prototype.trim.call(str)
    }
  } else {
    return function (str) {
      return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    }
  }
})()

/**
 * 计算字符串所占的内存字节数，默认使用UTF-8的编码方式计算，也可制定为UTF-16
 * UTF-8 是一种可变长度的 Unicode 编码格式，使用一至四个字节为每个字符编码
 *
 * 000000 - 00007F(128个代码)      0zzzzzzz(00-7F)                             一个字节
 * 000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)             两个字节
 * 000800 - 00D7FF
 * 00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz           三个字节
 * 010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  四个字节
 *
 * 注: Unicode在范围 D800-DFFF 中不存在任何字符
 * {@link http://zh.wikipedia.org/wiki/UTF-8}
 *
 * UTF-16 大部分使用两个字节编码，编码超出 65535 的使用四个字节
 * 000000 - 00FFFF  两个字节
 * 010000 - 10FFFF  四个字节
 *
 * {@link http://zh.wikipedia.org/wiki/UTF-16}
 * @param  {String} str
 * @param  {String} charset utf-8, utf-16
 * @return {Number}
 */
function sizeof (str, charset) {
  var total = 0
  var charCode, i, len

  charset = charset ? charset.toLowerCase() : ''

  if (charset === 'utf-16' || charset === 'utf16') {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i)

      if (charCode <= 0xffff) {
        total += 2
      } else {
        total += 4
      }
    }
  } else {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i)

      if (charCode <= 0x007f) {
        total += 1
      } else if (charCode <= 0x07ff) {
        total += 2
      } else if (charCode <= 0xffff) {
        total += 3
      } else {
        total += 4
      }
    }
  }

  return total
}

/**
 * 根据字符串的字节大小对文本进行切割
 * @param str {string} -必选 要进行切割的字符串
 * @param splitSize {number} -必选 分割值
 * @param charset {string} -可选指定字符串类型，默认utf-8, 可指定utf-16
 * @returns {array} -返回分割后的数组片段
 */
function splitWithSizeof (str, splitSize, charset) {
  var total = 0
  var charCode, i, len
  var result = []
  var tmpStrBuff = []

  if (!str || !splitSize) {
    return [str]
  }

  function addToBuff (curlSize, perSize, str) {
    if (curlSize <= splitSize) {
      tmpStrBuff.push(str)
    } else {
      result.push(tmpStrBuff.join(''))
      tmpStrBuff = [str]
      total = curlSize - perSize
    }
  }

  charset = charset ? charset.toLowerCase() : ''

  if (charset === 'utf-16' || charset === 'utf16') {
    for (i = 0, len = str.length; i < len; i++) {
      const perTotal = total
      charCode = str.charCodeAt(i)

      if (charCode <= 0xffff) {
        total += 2
      } else {
        total += 4
      }

      addToBuff(total, perTotal, str[i])
    }
  } else {
    for (i = 0, len = str.length; i < len; i++) {
      const perTotal = total
      charCode = str.charCodeAt(i)

      if (charCode <= 0x007f) {
        total += 1
      } else if (charCode <= 0x07ff) {
        total += 2
      } else if (charCode <= 0xffff) {
        total += 3
      } else {
        total += 4
      }

      addToBuff(total, perTotal, str[i])
    }
  }

  result.push(tmpStrBuff.join(''))
  return result
}

/**
 * 将字符串转成Boolean类型，该方法将 '', '0', 'false' 亦视为false
 * @param str {String|Number} -必选 要转换的字符串或数字
 */
function strToBoolean (str) {
  return str === '0' || str === 'false' ? false : Boolean(str)
}

module.exports = { trim, sizeof, splitWithSizeof, strToBoolean }
