<template>
        <div class="posts-list" v-if="loaded">
          <input type="search"  placeholder="search...."  v-model="search"/>
            <div class="list-item" v-bind:key="post.id" v-for="post in filterposts">
             <router-link v-bind:to="`/${post.id}`"><h4>{{post.title.rendered}}</h4></router-link>
              <p> {{post.excerpt.rendered | strip-html}}</p>
            </div>
        </div>
        <h1 class="loader" v-else>loading....</h1>
</template>

<script>
import axios from "axios";

export default {
  name: "posts",
  data() {
    return {
      posts: [],
      search: "",
      loaded: false
    };
  },
  computed: {
    filterposts: function() {
      return this.posts.filter(post => {
        return post.title.rendered
          .toString()
          .toLowerCase()
          .match(this.search);
      });
    }
  },
  created() {
    axios.get("http://reart.oo/wp-json/wp/v2/posts").then(res => {
      this.posts = res.data;
      this.loaded = true;
    });
  }
};
</script>

 <style scoped>
.posts-list {
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
}
</style>


