function useSimplePolyfill () {
  /**
   * String.prototype.replaceAll() polyfill
   * https://gomakethings.com/how-to-replace-a-section-of-a-string-with-another-one-with-vanilla-js/
   * https://vanillajstoolkit.com/polyfills/stringreplaceall/
   * @author Chris Ferdinandi
   * @license MIT
   */
  if (!String.prototype.replaceAll) {
    // eslint-disable-next-line no-extend-native
    String.prototype.replaceAll = function (str, newStr) {
      if (
        Object.prototype.toString.call(str).toLowerCase() === '[object regexp]'
      ) {
        return this.replace(str, newStr)
      }

      return this.replace(new RegExp(str, 'g'), newStr)
    }
  }
}

export default useSimplePolyfill
