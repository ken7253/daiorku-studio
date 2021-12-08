import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions } from 'vuepress-vite';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'ja',
  title: "dairoku-studio",
  description: "dairoku-studioという名の個人ブログ。そこまで技術的な話じゃないものはこちらで",
  head: [
    ["meta", { charset: "utf-8" }],
    ["meta", { name: "theme-color", content: "#049dbf" }],
  ],
  themeConfig: {
    navbar: [
      { text: "Home", link: "/" },
      { text: "Works", link: "/works" },
      { text: "Blog", link: "/post" },
      { text: "Github", link: "https://github.com/ken7253" },
      { text: "Twitter", link: "https://twitter.com/ken7253_" },
    ],
    lastUpdated: true,
    lastUpdatedText: 'Last Update'
  },
  plugins: [
    
  ],
  dest: './dist'
})