<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <transition name="page" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

a {
  color: #333;
  text-decoration: none;
}

.container {
  width: 90%;
  margin: 0 auto;
}

.loader,
.home-section {
  height: calc(100vh - 48px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #000;
}

header ul {
  display: flex;
  list-style-type: none;
}

header ul li {
  margin: 10px;
  font-size: 20px;
}

.posts-list {
  height: 100vh;
  padding: 50px;
  width: 100%;
}

.posts-list h4 {
  font-size: 30px;
  margin-bottom: 0px;
}
.posts-list input {
  font-size: 30px;
  margin-bottom: 30px;
  border: 0;
  background: transparent;
}
.posts-list input:focus {
  outline: none;
}
.posts-list p {
  font-size: 18px;
}
.posts-list strong {
  display: block;
  font-size: 15px;
  padding: 10px 0;
  font-style: italic;
}

.list-item {
  padding: 15px 0;
}

.read-more {
  color: #2196f3;
  display: inline-block;
  padding: 5px 0;
}

.back-btn {
  background: #000;
  color: #fff;
  padding: 10px 25px;
  border-radius: 20px;
  margin-top: 20px;
  display: inline-block;
}

.home-section input {
  width: 100%;
  height: 30px;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
