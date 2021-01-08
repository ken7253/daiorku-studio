<template>
  <div class="zenn-articles">
    <div v-if="error.flag">
      <p>記事一覧の取得に失敗しました。</p>
      <code>{{ error.log }}</code>
    </div>
    <ul v-if="!error.flag">
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.link" target="_blank" rel="noopener noreferrer">
          <img :src="item.enclosure.link" alt="item.title" />
          <time>{{ item.pubDate }}</time>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
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

<style scoped>
.zenn-articles ul {
  list-style-type: none;
  margin: 0 0 0 -10px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.zenn-articles ul li {
  width: calc(960px / 4 - 30px);
  margin: 0 0 10px 10px;
}
.zenn-articles ul li a {
  display: block;
}
.zenn-articles ul time {
  display: block;
  text-align: end;
  font-size: 0.75rem;
}
</style>
