module.exports = {
  head: [
    [
      "meta",
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  ],
  title: "dairoku-studio",
  description:
    "dairoku-studioという名の個人ブログ。そこまで技術的な話じゃないものはこちらで",
  locales: {
    "/": {
      lang: "ja",
    },
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Works", link: "/works" },
      { text: "Blog", link: "/post" },
      { text: "Github", link: "https://github.com/ken7253" },
      { text: "Twitter", link: "https://twitter.com/ken7253_" },
    ],
    displayAllHeaders: true,
    lastUpdated: "Last Updated",
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
  dest: "./dist",
};
