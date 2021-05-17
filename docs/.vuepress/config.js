

module.exports = {
  title: "CYR的个人博客",
  description: '记录，让自己变的更好.',
  base: '/blog/',
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
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      },
    },
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: '简历', link: '/resume/', icon: 'reco-message' },
    ],
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'],
}  