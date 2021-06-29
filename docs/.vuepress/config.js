

module.exports = {
  title: "CYR的个人博客",
  description: '记录，让自己变的更好.',
  base: '/blogs/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认 “分类”
      },
      note: {
        location: 5,
        text: '笔记'
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      },
    },
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: '简历', link: '/resume/', icon: 'reco-message' },
      { text: '笔记', link: '/note/notes/', icon: 'reco-message'
        // items: [
        //   { text: '移动端', link: '/note/notes/', icon: 'reco-message' },
        //   { text: 'JavaScript', link: '/note/notes/', icon: 'reco-message' }
        // ]
      },
    ],
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: [
      {
        title: '移动端',   // 必要的
            // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/note/notes/技术解决方案','小知识']
        ]
      },
      {
        title: 'JavaScript',   // 必要的
            // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3,    // 可选的, 默认值是 1
        children: [
          ['/note/notes/JavaScript','模块化'],
          ['/note/notes/Proxy','Proxy'],
          ['/note/notes/操作对象的部分方法','操作对象的部分方法'],
          ['/note/notes/Promise','Promise'],
          ['/note/notes/闭包','闭包']
        ]
      },
      {
        title: 'CSS',   // 必要的
            // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3,    // 可选的, 默认值是 1
        children: [
          ['/note/notes/BFC块级格式化上下文','BFC块级格式化上下文'],
          ['/note/notes/块级元素垂直水平居中','块级元素垂直水平居中']
        ]
      },
      {
        title: 'arithmetic',   // 必要的
            // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3,    // 可选的, 默认值是 1
        children: [
          ['/note/notes/arithmetic','arithmetic']
        ]
      },
      {
        title: '虚拟DOM',   // 必要的
            // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3,    // 可选的, 默认值是 1
        children: [
          ['/note/notes/虚拟DOM','虚拟DOM']
        ]
      },
      {
        title: 'Vue',   // 必要的
            // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3,    // 可选的, 默认值是 1
        children: [
          // ['/note/notes/自定义v-model','v-model']
        ]
      },
      {
        title: 'webpack',   // 必要的
            // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3,    // 可选的, 默认值是 1
        children: [
          ['/note/notes/webpack','webpack']
        ]
      },
      {
        title: 'JavaScript深度学习合集',   // 必要的
            // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 3,    // 可选的, 默认值是 1
        children: [
          ['/note/notes/JavaScript深度学习合集','JavaScript深度学习合集']
        ]
      },
    ],
    // valineConfig: {
    //   appId: 'WVxvNmGJIdgrYRKdWNkYjCRU-gzGzoHsz',// your appId
    //   appKey: 'VYznl2IuI8ezCyhfAJg5iA1b', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/medium-zoom', 'flowchart'],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }]
  ],
  
}  