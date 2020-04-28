const socketIo = require('socket.io')
const chokidar = require('chokidar')
const path = require('path')
const rootPath = require('./rootPath')

const socketHander = {
  io: null,
  socket: null,

  /* 监听要调试的脚本 */
  watchDebugScript () {
    const t = this

    if (t.debugScriptWatcher) {
      return true
    }

    const debugScript = path.join(rootPath, 'dist/h5player.js')
    const uiScript = path.join(rootPath, 'dist/h5player-ui.js')
    t.debugScriptWatcher = chokidar.watch([debugScript, uiScript]).on('change', (path) => {
      console.log('debugScriptHasUpdate:' + path)

      /* 通知页面更新脚本 */
      if (t.io) {
        t.io.emit('debugScriptHasUpdate', { debugScriptHasUpdate: true })
      }
    })
  },
  init (server) {
    const io = socketIo(server)
    this.io = io

    io.on('connection', socket => {
      this.socket = socket
      this.watchDebugScript()
    })
  }
}

module.exports = socketHander
