<template>
  <div>
    <p v-if="!posts">まだ投稿がありません。</p>
    <ul v-if="posts">
      <li v-for="(post, index) in posts" :key="index">
        <a :href="post.path">
          <h2>{{ post.title }}<br><span>{{post.frontmatter.description}}</span></h2>
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
ul {
  padding: 0;
}
li {
  border-left: 5px solid;
  padding: 10px;
  background-color: #eee;
  list-style-type: none;
  margin-bottom: 1rem;
}
li p {
  padding: 0;
  margin: 0;
}
li h2 {
  font-size: 1.25rem;
  margin: 0;
}
li h2 span {
  font-size: .75em;
}
.date {
  font-size: .75rem;
}
</style>
