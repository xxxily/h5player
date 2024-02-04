/* 保存重要的原始函数，防止被外部脚本污染 */
const originalMethods = {
  Object: {
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties
  },
  setInterval: window.setInterval,
  setTimeout: window.setTimeout,

  HTMLElement: window.HTMLElement,
  customElements: window.customElements,
  customElementsMethods: {
    define: window.customElements.define,
    get: window.customElements.get
  }
}

export default originalMethods
