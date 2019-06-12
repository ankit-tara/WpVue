<template>
  <div class="home">
    <Posts/>
  </div>
</template>

<script>
// @ is an alias to /src

import Posts from "../components/Posts";

export default {
  name: "home",
  components: {
    Posts
  }
};
</script>
