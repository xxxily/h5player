const device = {
  isMobile: () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  },
  isTablet: () => {
    return /iPad/i.test(navigator.userAgent)
  },
  isDesktop: () => {
    return !device.isMobile() && !device.isTablet()
  },
  isChrome: () => {
    return /Chrome/i.test(navigator.userAgent)
  },
  isFirefox: () => {
    return /Firefox/i.test(navigator.userAgent)
  },
  isSafari: () => {
    return /Safari/i.test(navigator.userAgent)
  },
  isEdge: () => {
    return /Edge/i.test(navigator.userAgent)
  }
}

export default device
