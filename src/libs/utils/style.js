/**
 * 将行内样式转换成对象的形式
 * @param {string} inlineStyle -必选，例如： position: relative; opacity: 1; visibility: hidden; transform: scale(0.1) rotate(180deg);
 * @returns {Object}
 */

function inlineStyleToObj (inlineStyle) {
  if (typeof inlineStyle !== 'string') {
    return {}
  }

  const result = {}
  const styArr = inlineStyle.split(';')
  styArr.forEach(item => {
    const tmpArr = item.split(':')
    if (tmpArr.length === 2) {
      result[tmpArr[0].trim()] = tmpArr[1].trim()
    }
  })

  return result
}

function objToInlineStyle (obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return ''
  }

  const styleArr = []
  Object.keys(obj).forEach(key => {
    styleArr.push(`${key}: ${obj[key]}`)
  })

  return styleArr.join('; ')
}

export { inlineStyleToObj, objToInlineStyle }
