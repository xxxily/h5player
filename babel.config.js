module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: [
            'chrome > 42'
          ]
        },
        useBuiltIns: 'usage'
      }
    ]
  ]
}
