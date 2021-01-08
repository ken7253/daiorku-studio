module.exports = {
  head: [
    ["meta",{ charset: "utf-8" }],
    ["meta",{ name: "viewport", content: "width=device-width, initial-scale=1" }],
    ["meta",{ name: "og:image", content: "./kenshiro.png"}]
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
    domain: "https://dairoku-studio.com",
    nav: [
      { text: "Home", link: "/" },
      { text: "Works", link: "/works" },
      { text: "Blog", link: "/post" },
      { text: "Github", link: "https://github.com/ken7253" },
      { text: "Twitter", link: "https://twitter.com/ken7253_" },
    ],
    author: "ken7253",
    displayAllHeaders: true,
    lastUpdated: "Last Updated",
    smoothScroll: true,
  },
  plugins: {
    "@vuepress/blog": {
      directories: [
        {
          id: "post",
          dirname: "_posts",
          path: "/post/",
          itemPermalink: "/post/:year/:month/:day/:slug",
        },
      ],
    },
    seo: {
      twitterCard: _ => 'summary',
    },
  },
  dest: "./dist",
};
