module.exports = {
  title: 'Lets Begin',
  description: 'Just playing around.',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '资源库',
        link: '/resource'
      },
      {
        text: '经验分享',
        link: '/experience/'
      },
      {
        text: '学习笔记',
        items: [
          { text: 'JavaScript-Cheat', link: '/learn/js-cheat.html' },
          { text: 'HTTP', link: '/learn/HTTP.html' }
        ]
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
    ],
    sidebar: 'auto'
  }
}
