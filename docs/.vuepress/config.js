module.exports = {
    title: 'vuepress-demo',
    description: 'vuepress中在md编写组件',
    base: '/',
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
      ],
      sidebar: [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            '/',
          ]
        }
      ]
    }
  };
  