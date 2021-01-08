<template>
  <div class="works-list">
    <div v-if="!works">
      <p>データを取得できませんでした。</p>
    </div>
    <ul v-if="works" v-for="(item, index) in works" :key="index" :class="index">
      <h2>{{ index }}</h2>
      <li v-for="(item, index) in works[index]" :key="index">
        <dl>
          <dt>
            <a :href="item.link" :title="item.title">{{ item.title }}</a>
          </dt>
          <dd v-if="item.date"><time>{{item.date}}</time></dd>
          <dd>{{ item.description }}</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import worksData from "../public/works.json";

export default {
  data: function() {
    return {
      works: worksData.works,
      auther: worksData.auther
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 15px 0;
  padding: 0 20px;
}
dt {
  border-left: 5px solid;
  padding-left: 10px;
  margin-bottom: 3px;
  background-color: #eee;
}
dd {
  margin: 0;
}
time {
  display: block;
  font-size: .75rem;
}
</style>
