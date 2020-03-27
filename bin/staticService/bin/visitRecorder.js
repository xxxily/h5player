/*!
 * @name         visitRecorder.js
 * @description  访问记录器
 * @version      0.0.1
 * @author       Blaze
 * @date         2020/2/28 14:18
 * @github       https://github.com/xxxily
 */
const morgan = require('morgan')

const visitRecorder = {
  init (app) {
    /* 自定义morgan的token */
    morgan.token('localDate', function getDate (req) {
      const date = new Date()
      return date.toLocaleString()
    })

    /* 自定义format，其中包含自定义的token */
    morgan.format('combined', ':remote-addr - :remote-user [:localDate] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"')

    app.use(morgan('combined', {
      skip: function (req, res) {
        // 跳过400以下状态的请求
        // return res.statusCode < 400

        // 跳过favicon.ico资源的请求
        return req.url === '/favicon.ico'
      }
    }))
  }
}

module.exports = visitRecorder
