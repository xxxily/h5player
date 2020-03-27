/*!
 * @name         service.js
 * @description  服务层，只包含各种页面所需的操作函数，不参与网络请求的任何处理
 * @version      0.0.1
 * @author       Blaze
 * @date         2020/2/20 15:15
 * @github       https://github.com/xxxily
 */
const fs = require('fs-extra')
const glob = require('glob')
const baseConfig = require('./baseConfig')
const serviceConfig = baseConfig.staticService

const service = {
  /**
   * 获取静态资源目录下所有文件的文件列表
   * @returns {Promise<unknown>}
   */
  async getResourceFileList () {
    return new Promise((resolve, reject) => {
      fs.ensureDirSync(serviceConfig.staticDir)
      glob('**/**.**', {
        cwd: serviceConfig.staticDir
      }, function (err, files) {
        if (err) {
          reject(err)
        } else {
          resolve(files)
        }
      })
    })
  }
}

module.exports = service
