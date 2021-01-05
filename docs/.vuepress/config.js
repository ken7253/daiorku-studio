module.exports = {
  locales: {
    "/": {
      lang: "ja",
    },
  },
  title: "dairoku-studio blog",
  description:
    "dairoku-studio blogという名の個人ブログそこまで技術的な話じゃないものはこちらで",
  themeConfig: {
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
