const os = require('os')
const cpuLen = os.cpus().length

const cpu = {
  /**
   * 单个CPU的负荷情况
   * @returns {number[]}
   */
  singleCpuLoadavg: () => os.loadavg().map(load => load / cpuLen),
  /**
   * 判断当前cpu是否处于空闲可用状态
   * @param maxLoadavg {number} -可选 指定一分钟内单个CPU负荷的值在多少内才算处于空闲状态，默认0.8
   * @returns {boolean}
   */
  isIdle (maxLoadavg) {
    maxLoadavg = maxLoadavg || 0.8
    return cpu.singleCpuLoadavg()[0] < maxLoadavg
  },
  /**
   * 等待cpu空闲下来，然后再执行别的任务
   * @param maxLoadavg {number} -可选 指定一分钟内单个CPU负荷的值在多少内才算处于空闲状态，默认0.8
   * @param maxWaitingTime {number} -可选 最长等多久则不再等待，默认15分钟，防止无限等待
   * @param onPoll {boolean|function} -可选 当处于繁忙状态时是否显示当前CPU的负荷情况，用于调试观察，默认false，如果传入的是函数，则自动调用该函数，让调用者自行决定处理规则
   * @param pollInterval {number} -可选 轮询CPU负荷情况的频率，默认1s轮询一次
   * @returns {Promise<unknown>}
   */
  waitIdle (maxLoadavg, maxWaitingTime, onPoll, pollInterval) {
    maxWaitingTime = maxWaitingTime || 1000 * 60 * 15
    pollInterval = pollInterval || 1000 * 1
    const startWaitTime = Date.now()

    function idlePoll (resolve, reject) {
      if (cpu.isIdle(maxLoadavg) || Date.now() - startWaitTime > maxWaitingTime) {
        resolve()
      } else {
        if (onPoll) {
          if (onPoll instanceof Function) {
            onPoll(cpu.singleCpuLoadavg(), resolve, reject)
          } else {
            console.log('当前单个CPU的负荷情况：' + cpu.singleCpuLoadavg())
          }
        }
        setTimeout(function () {
          idlePoll(resolve, reject)
        }, pollInterval)
      }
    }
    return new Promise(idlePoll)
  }
}

// console.log(cpu.singleCpuLoadavg())
// console.log(cpu.isIdle(0.01))
// cpu.waitIdle(0.20, 1000, true).then(() => {
//   console.log('CPU 空闲下来了')
// })

module.exports = cpu
