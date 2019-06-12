<template>
  <div class="posts-list" v-if="loaded">
      <div class="list-item">
        <h4>{{post.title.rendered}}</h4>
    <img :src="post.featured_image_src" alt="featured img" />
    <p> {{post.content.rendered | strip-html}}</p>
    <strong>By: {{post.acf.author}}</strong>
          <router-link class="back-btn" to="/">Go back</router-link>
      </div>
  </div>
  <h1 class="loader" v-else>loading....</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "singlepost",
  data() {
    return {
      post: "",
      loaded: false,
      id: this.$route.params.id
    };
  },
  created() {
    let postId = this.id;

    axios
      .get(`http://reart.oo/wp-json/wp/v2/posts/${postId}`)
      .then(res => (this.post = res.data), (this.loaded = true));
  }
};
</script>

<style scoped>
.posts-list {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
</style>
