<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <router-link to="/about">关于我们</router-link>
      </el-menu-item>
    </el-menu>
    <!--    <HelloWorld msg="prop test"></HelloWorld>-->
  </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld'
    export default {
        name: "TheHome",
        data() {
            return {
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
            // },
            // components: {
            //     HelloWorld
        },
        created() {
            console.log("created");

            // console.log(this.$ajax);
            // this.$ajax.application.scanQR({sss: 2334}).then(res => {
            //     console.log("res");
            //     console.log(res);
            //     console.log("res")
            // }).catch(error => {
            //     console.log(error)
            // })
        }
    }
</script>

<style scoped>

</style>
