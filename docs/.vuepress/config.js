module.exports = {
  title: '动迁系统帮助',
  description: '为动迁系统的使用提供支持',
  base: '/rshelper/',// 设置站点根npm run docs:dev路径
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  themeConfig : {
    logo: '/logo.png',
    nav : [
      { text: '使用说明', link: '/guide' },
      { text: '开发文档', link: '/develop' },
      { text: '其他', link: '/other' }
    ],
    sidebar: {
      '/' : [
        {
          title: '主页',   // 必要的
          path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
        },
        {
          title: '使用说明',   // 必要的
          path: 'guide',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
        },
        {
          title: '开发文档',   // 必要的
          path: 'develop',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
        },
        {
          title: '其他',   // 必要的
          path: 'other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
        }
      ]
    }
  },
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  smoothScroll: true
}
