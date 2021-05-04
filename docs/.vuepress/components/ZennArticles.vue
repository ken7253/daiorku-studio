<template>
  <div class="zenn-articles">
    <div v-if="error.flag">
      <p>記事一覧の取得に失敗しました。</p>
      <code>{{ error.log }}</code>
    </div>
    <ul v-if="!error.flag">
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.link" target="_blank" rel="noopener noreferrer">
          <img :src="item.enclosure.link" :alt="item.title" decoding="async" loading="lazy" width="1200" height="630"/>
          <time>{{ item.pubDate }}</time>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'zenn-articles',
  data: function() {
    return {
      items: null,
      error: {
        flag: false,
        log: ""
      }
    };
  },
  created: function() {
    const base = "https://api.rss2json.com/v1/api.json";
    const request = "?rss_url=https%3A%2F%2Fzenn.dev%2Fken7253%2Ffeed";
    axios
      .get(base + request)
      .then((resp) => {
        this.items = resp.data.items;
      })
      .catch((err) => {
        console.warn(err);
        this.error.log = err;
        this.error.flag = true;
      });
  },
};
</script>

<style lang="stylus" scoped>
.zenn-articles {
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      min-width: calc(960px / 3 - 30px);
      margin: 0 10px 0 0;
      flex: 1 2 calc(30% - 10px);

      a {
        display: flex;
        flex-direction: column;

        img {
          height: auto;
        }
      }

      time {
        display: block;
        text-align: end;
        font-size: 0.75rem;
      }
    }
  }
}
</style>
