/*!
 * @name         simpleApi.js
 * @description  网络请求处理层
 * @version      0.0.1
 * @author       Blaze
 * @date         2020/2/20 14:58
 * @github       https://github.com/xxxily
 */
const urlJoin = require('url-join')
const utils = require('../../utils/index')
const baseConfig = require('./baseConfig')
const serviceConfig = baseConfig.staticService
const service = require('./service')
const routeSet = {}

const simpleApi = {
  routeSet,
  basePath: '/api.v1',
  localService: 'http://127.0.0.1:' + serviceConfig.port,
  configList: [
    {
      path: '/service-config',
      method: 'get',
      describe: '获取服务器的配置信息',
      handler: (req, res, next, conf) => res.jsonSuc(serviceConfig)
    },
    {
      path: '/resource-list',
      method: 'get',
      describe: '获取服务器上的静态资源列表',
      handler: (req, res) => {
        service.getResourceFileList()
          .then((list) => {
            res.jsonSuc({
              length: list.length,
              list
            })
          })
          .catch((err) => {
            serviceConfig.debug && console.error(err)
            res.jsonErr('获取列表信息时出错')
          })
      }
    },
    {
      path: '/has-resource-file',
      method: 'get',
      describe: '判断是否包含某个资源文件',
      handler: (req, res) => {
        service.getResourceFileList()
          .then((list) => {
            const queryFilename = req.query.filename
            if (queryFilename && list.includes(queryFilename)) {
              res.jsonSuc(true)
            } else {
              res.jsonSuc(false)
            }
          })
          .catch((err) => {
            serviceConfig.debug && console.error(err)
            res.jsonErr('获取资源文件接口出错')
          })
      }
    }
  ],
  /**
   * 路由控制器，通过提供路由配置项，生成可对外提供服务的api接口
   * @param app {Object} -必选 app对象
   * @param apiConfig {Object|Array} -必选 路由配置信息
   * @param basePath {Object|Array} -可选 指定初始化时候的基础路径，默认路径为'/'
   */
  routeController (app, apiConfig, basePath) {
    apiConfig = Array.isArray(apiConfig) ? apiConfig : [apiConfig]
    basePath = basePath || '/'

    apiConfig.forEach((conf) => {
      if (utils.isObj(conf) && conf.path && conf.method && typeof conf.handler === 'function') {
        const urlPath = urlJoin(basePath, conf.path)

        /* 阻止已注册过的路由重复注册 */
        if (routeSet[urlPath]) {
          console.error(routeSet[urlPath] + '路由已被注册控制器初始化，不能重复注册')
          return false
        }

        if (app[conf.method]) {
          /* 补充配置信息 */
          conf.basePath = basePath
          conf.urlPath = urlPath

          /* 注册路由控制函数 */
          app[conf.method](urlPath, (req, res, next) => conf.handler(req, res, next, conf))

          /* 记录已注册过的路由 */
          routeSet[urlPath] = conf

          serviceConfig.debug && console.log(`[${urlPath}] route registration succeeded`)
        }
      } else {
        console.error('配置必要字段不正确，该项将不被初始化：', conf)
      }
    })
  },
  /**
   * 获取所有已注册了的路由路径信息
   * @param serviceUrl {string} -可选 指定服务器路径地址，例如'https://myhost.com'， 如果不指定则输出的是本地服务器下的路径地址信息
   */
  getRegisteredApiLink (serviceUrl) {
    serviceUrl = serviceUrl || simpleApi.localService
    const result = []
    Object.keys(routeSet).forEach((urlPath) => {
      result.push(urlJoin(serviceUrl, urlPath))
    })
    return result
  }
}

module.exports = simpleApi
