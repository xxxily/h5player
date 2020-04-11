const ajax = window.GM_xmlhttpRequest || function () {
  console.log('GM_xmlhttpRequest 未注册，不能进行接口请求')
}

const http = function () {
  return ajax.apply(null, arguments)
}

http.get = function (url, data) {
  return new Promise(function (resolve, reject) {
    ajax({
      method: 'GET',
      url: url,
      data: data,
      onerror: err => reject(err),
      onload: res => resolve(res)
    })
  })
}

export default http
