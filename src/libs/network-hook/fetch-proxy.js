/*!
 * @name         fetch-proxy.js
 * @description  fetch请求hook，用法保持跟 https://github.com/wendux/Ajax-hook 的xhr-proxy一致，以便支持fetch请求的监听和修改
 * @version      0.0.1
 * @author       xxxily
 * @date         2022/05/20 16:18
 * @github       https://github.com/xxxily
 */

/**
 * 虽然此库用法保持跟Ajax-hook一致，但由于fetch最终对请求结果的消费方式与XMLHttpRequest不一样，
 * 所以在进行hook操作时必须加以区分
 *
 * 具体请参考：
 * https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html
 *
 * 为了区别判断，将在onRequest, onResponse, onError的第三个参数标识是否为fetch请求，如果为true，则说明是是fetch请求
 * 然后按需对fetch对象进行区分处理即可
 */

const realFetch = '_rFetch_'

function makeHandler (resolve, reject, next) {
  return Object.create({
    resolve,
    reject,
    next
  })
}

export function fetchProxy (proxy = {}, win) {
  win = win || window
  win[realFetch] = win[realFetch] || win.fetch

  const { onRequest, onResponse, onError } = proxy

  function customFetch () {
    /**
     * 提前锁定fetch，防止在onRequest进行异步操作时，
     * 外部触发了unFetchHook，再去找win[realFetch]已经查无此fetch了
     */
    const fetch = win[realFetch] || win.fetch

    const t = this
    let fetchResolve = function () {}
    let fetchReject = function () {}
    const args = arguments
    const config = args[1] || {}

    /* 保持config参数结构跟Ajax-hook一致 */
    config.url = args[0]
    config.headers = config.headers || {}
    if (!config.method) {
      config.method = 'GET'
    } else {
      config.method = config.method.toUpperCase()
    }

    /* 发起真实请求 */
    async function gotoFetch (config) {
      const url = config.url
      // delete config.url
      const args = [url, config]

      if (fetch === customFetch) {
        throw new Error('[fetch loop] fetch is equal to customFetch')
      }

      const response = await fetch.apply(t, args).catch((err) => {
        if (onError instanceof Function) {
          const errorHandler = makeHandler(fetchResolve, fetchReject, function (err) { fetchReject(err) })
          onError(err, errorHandler, true)
        } else {
          throw err
        }
      })

      if (onResponse instanceof Function) {
        const responseHandler = makeHandler(fetchResolve, fetchReject, function (response) { fetchResolve(response) })

        response.config = config
        onResponse(response, responseHandler, true)
      } else {
        /* 完成请求 */
        fetchResolve(response)
      }
    }

    /* 判断由谁来发起真实的请求 */
    if (onRequest instanceof Function) {
      const requestHandler = makeHandler(fetchResolve, fetchReject, function (config) { gotoFetch(config) })
      onRequest(config, requestHandler, true)
    } else {
      gotoFetch(config)
    }

    /* 返回个空的promise，让gotoFetch进行真实的请求处理，并进行promise控制 */
    return new Promise((resolve, reject) => {
      fetchResolve = function (result) { resolve(result) }
      fetchReject = function (err) { reject(err) }
    })
  }

  win.fetch = customFetch
}

export function unFetchProxy (win) {
  win = win || window
  if (win[realFetch]) {
    win.fetch = win[realFetch]
    delete win[realFetch]
  }
}

/* 使用示例 */
// fetchProxy({
//   onRequest: async (config, handler, isFetch) => {
//     console.log('[fetchHooks onRequest]', config.url, config)
//     handler.next(config)
//   },
//   onError: (err, handler, isFetch) => {
//     handler.next(err)
//   },
//   onResponse: async (response, handler, isFetch) => {
//     console.log('[fetchHooks onResponse]', response)

//     /* 当和Ajax-hook混合使用时，需要判断isFetch，进行区分处理 */
//     if (isFetch) {
//       const res = response.clone()
//       const result = await res.json().catch((err) => {
//         // 解析出错，忽略报错
//         if (err) {}
//       })
//       console.log('[fetchHooks onResponse json]', result)
//     }

//     handler.next(response)
//   }
// }, window)
