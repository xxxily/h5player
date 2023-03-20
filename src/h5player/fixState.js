function isObj (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function isArr (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

function isEqualType (obj1, obj2) {
  return Object.prototype.toString.call(obj1) === Object.prototype.toString.call(obj2)
}

/**
 * 由于localStorageProxy和monkeyStorageProxy只进行浅层的对象合并，
 * 所以会导致当给二级以上的对象增加配置项时，没法将深层的对象同步进去
 * fixState就是为了解决上述问题的
 * @param {*} state
 * @param {*} defaultConfig
 */
function fixState (state, defaultConfig) {
  function recursionConfig (state, defaultConfig) {
    if (isObj(defaultConfig)) {
      state = isObj(state) ? state : {}
      Object.keys(defaultConfig).forEach(key => {
        const value = defaultConfig[key]

        if (typeof state[key] === 'undefined') {
          /**
           * 当出现state[key]缺失，则直接使用value进行替换
           * 其他情况暂不处理
           */
          state[key] = value
        } else if (isObj(value) || isArr(value)) {
          if (!isEqualType(state[key], value)) {
            /* 当对象或数组的类型发生了变更，则以defaultConfig的类型为准，重建state[key] */
            state[key] = value
          }

          recursionConfig(state[key], value)
        }
      })
    } else if (isArr(defaultConfig)) {
      state = isArr(state) ? state : []
    } else {
      return defaultConfig
    }
  }

  recursionConfig(state, defaultConfig)

  /* 清理State，删除已经不在defaultConfig定义范围内的值 */
  function recursionState (state, defaultConfig) {
    if (isObj(state)) {
      defaultConfig = isObj(defaultConfig) ? defaultConfig : {}
      Object.keys(state).forEach(key => {
        const value = state[key]
        if (typeof defaultConfig[key] === 'undefined') {
          /**
           * 当出现defaultConfig[key]缺失，则说明该选项已被弃用，所以删除state[key]
           * 其他情况暂不处理
           */
          delete state[key]
        } else if (isObj(value) || isArr(value)) {
          if (!isEqualType(defaultConfig[key], value)) {
            /* 当对象或数组的类型发生了变更，则以defaultConfig的类型为准，重建state[key] */
            state[key] = defaultConfig[key]
          }

          recursionState(value, defaultConfig[key])
        }
      })
    } else if (isArr(state)) {
      defaultConfig = isArr(defaultConfig) ? defaultConfig : []
    } else {
      return state
    }
  }

  recursionState(state, defaultConfig)
}

/* 测试fixState的处理结果 */
// function test (testState, testDefConfig) {
//   fixState(testState, testDefConfig)
//   console.log('处理后的state对象', testState)
// }

// function testCode1 () {
//   var testState = {}
//   var testDefConfig = {
//     a: 1
//   }
//   test(testState, testDefConfig)
// }

// function testCode2 () {
//   var testState = {
//     a: 'state变更测试，√',
//     c: { tips: '删除默认值测试，如果该项在最终结果里出现，则逻辑存在异常，×', d: 'ddd' },
//     d: { e: '二级配置项state变更测试，√', f: { g: '二级配置项删除测试，存在则异常，×' } },
//     g: { tips: '类型变更测试，×' },
//     g2: ['类型变更测试2，存在则异常，×'],
//     g3: '类型变更测试3，√'
//   }
//   var testDefConfig = {
//     a: 1,
//     b: {
//       tips: '新增默认值测试，√',
//       c: {
//         d: 'ddddddd'
//       },
//       e: [1, 2, 3]
//     },
//     d: {
//       e: '1111',
//       j: '二级配置项新增测试，√'
//     },
//     g: ['类型变更测试，√'],
//     g2: '类型变更测试2，√',
//     g3: false
//   }
//   test(testState, testDefConfig)
// }

// testCode1()
// testCode2()

export default fixState
