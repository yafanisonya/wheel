module.exports = {
  base:'/wheel/',
  title: 'Wheel UI',
  description: '一个简单的 UI 框架',
  themeConfig:{
    logo: "/images.jpg",
    smoothScroll: true,
    nav: [
      {text: '主页', link:'/',target:'_self'},
      {text: '文档', link:'/install/',target:'_self'},
      {text: '交流', link:'https://github.com/yafanisonya'},
    ],
    sidebar: [
      {
        title: '开始使用',
        children: [
          '/install/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          './components/collapse',
          '/components/grid',
          '/components/layout',
          './components/tabs',
          './components/toast',
        ]
      }
    ]
  }
}