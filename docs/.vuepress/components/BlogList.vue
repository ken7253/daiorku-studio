<template>
  <div>
    <p v-if="!posts">まだ投稿がありません。</p>
    <div v-if="posts" class="post-content">
      <ul>
        <li v-for="post in posts" :key="post.key" :class="post.key">
          <a :href="post.path">
            <h2>{{ post.title }}</h2>
            <p class="date">
              Date:
              <time v-if="post.frontmatter.date">{{
                post.frontmatter.date | dateFmt()
              }}</time>
              Update:
              <time v-if="post.lastUpdated">{{
                post.lastUpdated | updateFmt()
              }}</time>
            </p>
            <p class="description">{{ post.frontmatter.description }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ControllerButton from './parts/ControllerButton.vue';
export default {
  components: {
    ControllerButton
  },
  name: "blog-list",
  data: function() {
    return {
      posts: null
    };
  },
  created: function() {
    this.posts = this.$site.pages.filter(page => page.id === "post");
    this.posts.sort((first, second) => {
      if(first.frontmatter.date > second.frontmatter.date) {
        return -1;
      } else if (first.frontmatter.date < second.frontmatter.date){
        return 1;
      } else {
        return 0;
      }
    });
  },
  computed: {
    postsReversed: function() {
      this.posts = this.posts.reverse();
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
    updateFmt: function(value) {
      if (!value) {
        return "";
      } else {
        const update = value.split(" ").shift();
        return update;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
ul {
  padding: 0;

  li {
    border-style: solid;
    border-width: 1px 1px 1px 5px;
    border-color: $borderColor;
    padding: 10px;
    list-style-type: none;
    margin-bottom: 1rem;

    p {
      padding: 0;
      margin: 0;
    }

    h2 {
      font-size: 1.25rem;
      margin: 0;

      span {
        font-size: .75em;
      }
    }

    .date {
      font-size: .75rem;
    }

    .description {
      font-size: 1rem;
    }
  }
}
</style>
