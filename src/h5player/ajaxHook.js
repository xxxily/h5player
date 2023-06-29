import { networkProxy } from '../libs/network-hook/index'
import {
  getPageWindow
} from './helper'

async function ajaxHook () {
  const pageWindow = await getPageWindow()

  networkProxy({
    onRequest: (config, handler, isFetch) => {
      // alert('[networkProxy][onRequest]')
      handler.next(config)
    },
    onError: (err, handler, isFetch) => {
      handler.next(err)
    },
    onResponse: (response, handler, isFetch) => {
      if (!isFetch) { }
      if (response.config.url.includes('mahjong-ways/v2/Spin') || response.config.url.includes('mahjong-ways2/v2/Spin')) {
        console.info('[networkProxy][onResponse]', response.config.url, JSON.stringify(response.response, null, 2))

        if (Number.isInteger(window.choujiangjieguo) && response.response.dt) {
          response.response.dt.si.orl = new Array(36).fill(window.choujiangjieguo || 1)
        }
      }

      handler.next(response)

      // if (response.config.url === location.href) {
      //   handler.reject({
      //     config: response.config,
      //     type: 'error'
      //   })
      // } else {
      //   handler.next(response)
      // }
    }
  }, pageWindow)
}

export default ajaxHook
