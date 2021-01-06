<template>
  <div>
    <h3>Zennの記事</h3>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function(){
    return {

    }
  },
  methods: {
    getArticles() {
      const requestUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fzenn.dev%2Fken7253%2Ffeed"
      axios.get(requestUrl)
        .then(resp => {console.log(resp)})
        .catch(err => {
          console.error(err)
      })
    }
  }
}
</script>

<style></style>
