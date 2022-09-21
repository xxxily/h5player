module.exports = {
  '/home/': [
    {
      // title: '文档指引',  
      // path: '/home/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/home/Introduction',
        '/home/q&a',
        '/home/changeLog'
      ]
    }
  ]
}
