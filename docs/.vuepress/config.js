module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Learn', link: '/Learn/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'About',
        items: [
          { text: 'GitHub', link: '/language/chinese' },
          { text: 'Me', link: '/About/me' }
        ]
      }
    ],

  },
  markdown: {
    lineNumbers: true
  }
};
