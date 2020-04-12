/*!
 * @name         index.js
 * @description  index
 * @version      0.0.1
 * @author       Blaze
 * @date         2020/2/17 10:09
 * @github       https://github.com/xxxily
 */
const express = require('express')
const fs = require('fs-extra')
const simpleApi = require('./bin/simpleApi')
const visitRecorder = require('./bin/visitRecorder')
const commonMethods = require('./bin/middleware/commonMethods')
const baseConfig = require('./bin/baseConfig')
const socketHander = require('./bin/socket')
const serviceConfig = baseConfig.staticService
const app = express()
const server = require('http').Server(app)

const index = {
  async init () {
    /* 全局注入公共函数，方便在业务处使用 */
    app.use(commonMethods)

    /* 初始化静态资源的目录地址 */
    fs.ensureDirSync(serviceConfig.staticDir)

    /* 注册访问记录服务 */
    visitRecorder.init(app)

    /* 注册服务前端页面服务 */
    if (serviceConfig.appDir) {
      fs.ensureDirSync(serviceConfig.appDir)
      app.use('/', express.static(serviceConfig.appDir))
    }

    /* 注册静态资源目录服务 */
    const options = {
      dotfiles: 'ignore',
      etag: false,
      extensions: ['htm', 'html'],
      index: false,
      maxAge: '1d',
      redirect: false,
      setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())

        /* 禁止缓存，用于调试 */
        res.set('Cache-control', 'no-cache')
      }
    }
    app.use(serviceConfig.staticPath, express.static(serviceConfig.staticDir, options))

    /* 用于其他实例获取静态服务的配置信息 */
    simpleApi.routeController(app, simpleApi.configList, simpleApi.basePath)

    // app.listen(serviceConfig.port, () => {
    //   console.log(`服务器已启动: ${simpleApi.localService}`)
    //   console.log('可用接口地址：')
    //   console.log(simpleApi.getRegisteredApiLink().join('\n'))
    // })

    socketHander.init(server)

    /* 使用了socket后app.listen要改为server.listen */
    server.listen(serviceConfig.port, () => {
      console.log(`服务器已启动: ${simpleApi.localService}`)
      console.log('可用接口地址：')
      console.log(simpleApi.getRegisteredApiLink().join('\n'))
    })
  }
}

index.init()
