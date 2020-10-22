/*!
 * @name         index.js
 * @description  EasyHook
 * @version      0.0.1
 * @author       Blaze
 * @date         2020/10/22 17:40
 * @github       https://github.com/xxxily
 */

const EasyHook = {
  before (obj, methodName, fn, context) {},
  after (obj, methodName, fn, context) {},
  replace (obj, methodName, fn, context) {},
  unHook (obj, methodName) {}
}

export default EasyHook

/* 代理windo对象 */
var myWin = new Proxy(window, {
  get: (target, name) => {
    console.log(name, target, 'PROX')

    return typeof target[name] === 'function'
      ? target[name].bind(target)
      : target[name]
  }
})

console.log(myWin)
