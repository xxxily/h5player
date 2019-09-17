module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: [
            '> 3%',
            'last 2 versions',
            'not ie <= 10'
          ]
        },
        useBuiltIns: 'entry'
      }
    ]
  ]
}
