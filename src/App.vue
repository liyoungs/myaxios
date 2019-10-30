<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo">
    <router-view/>
    <TheHome/>
  </div>
</template>

<script>
  import TheHome from "./views/TheHome";
export default {
  name: 'App',
    created() {
        // this.$loading({fullscreen: true});
    },
    components:{
        TheHome
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
