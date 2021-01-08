<template>
  <div>
    <p v-if="!posts">まだ投稿がありません。</p>
    <ul v-if="posts">
      <li v-for="(post,index) in posts">
        <a :href="post.path">
          <p>{{ post.title }}</p>
          <p v-if="post.lastUpdated"><time>{{ post.lastUpdated }}</time></p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      posts: null,
    };
  },
  created: function() {
    this.posts = this.$site.pages.filter((page) => page.id === "post");
  },
};
</script>
<style scoped>
li p {
  padding: 0;
  margin: 0;
}
time {
  font-size: .75rem;
}
</style>