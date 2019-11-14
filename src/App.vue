<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png" alt="logo" />
    <TheHeader class="my-nav"></TheHeader>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./views/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader
  },
  created() {
    // this.$loading({fullscreen: true});
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
}

.my-nav {
  padding-left: 60px;
}
</style>
