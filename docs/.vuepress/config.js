module.exports = {
  locales: {
    "/": {
      lang: "ja",
    },
  },
  title: "dairoku-studio",
  description:
    "dairoku-studioという名の個人ブログ。そこまで技術的な話じゃないものはこちらで",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Works', link: '/works'},
      { text: 'Blog', link: '/post'},
      { text: 'Github', link: 'https://github.com/ken7253' },
      { text: 'Twitter', link: 'https://twitter.com/ken7253_'},
    ],
    lastUpdated: 'Last Updated',
    smoothScroll: true,
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/post/",
            itemPermalink: "/post/:year/:month/:day/:slug",
          },
        ],
      },
    ],
  ],
};
