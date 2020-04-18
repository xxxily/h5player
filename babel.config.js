module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
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
    '@babel/plugin-transform-runtime'
  ]
}
