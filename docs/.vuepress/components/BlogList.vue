<template>
  <div>
    <p v-if="!posts">まだ投稿がありません。</p>
    <ul v-if="posts">
      <li v-for="(post, index) in posts">
        <a :href="post.path">
          <p>{{ post.title }}</p>
          <p class="date">
            Date: <time v-if="post.frontmatter.date">{{ post.frontmatter.date | dateFmt() }}</time>
            Update: <time v-if="post.lastUpdated">{{ post.lastUpdated | updateFmt() }}</time>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'blog-list',
  data: function() {
    return {
      posts: null,
    };
  },
  created: function() {
    this.posts = this.$site.pages.filter((page) => page.id === "post");
  },
  computed: {
    postsReversed(){
      return this.posts.reverse();
    }
  },
  filters: {
    dateFmt: function(value) {
      if (!value) {
        return "";
      } else {
        const postDate = value
          .split("T")
          .shift()
          .split("-")
          .join("/");
        return postDate;
      }
    },
    updateFmt: function (value) {
      if (!value) {
        return "";
      }else {
        const update = value.split(" ").shift()
        return update;
      }
    }
  },
};
</script>
<style scoped>
li p {
  padding: 0;
  margin: 0;
}
.date {
  font-size: 0.75rem;
}
</style>
