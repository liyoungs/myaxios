<template>
  <div id="app" class="wraper">
    <template>
      <el-backtop target=".wraper" :visibility-height="150"></el-backtop>
    </template>
    <div class="my-head">
      <img class="logo" src="./assets/logo.png" alt="logo" />
      <TheHeader class="my-nav"></TheHeader>
    </div>
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
.my-head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #ffffff;
  z-index: 1;
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
}

.my-nav {
  padding-left: 60px;
}
.wraper {
  height: 100vh;
  overflow-x: hidden;
  padding-top: 64px;
  box-sizing: border-box;
}
</style>
