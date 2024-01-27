export default {
  presets: [
    [
      '@babel/preset-env',
      {
        // modules: false,
        targets: {
          /* 49是个分界线，const输出不再转换成var */
          // chrome: '49',
          chrome: '52'
        },
        corejs: '3',
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: [
    // 使用了@babel/preset-env的usage就没必要再定义@babel/plugin-transform-runtime插件
    // '@babel/plugin-transform-runtime'
  ]
}
