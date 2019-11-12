<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <template v-for="menu in menuList">
        <el-menu-item v-if="!menu.child" :index="menu.id" :key="menu.id">{{menu.name}}</el-menu-item>
        <el-submenu v-else :index="menu.id" :key="menu.id">
          <template slot="title">{{menu.name}}</template>
          <el-menu-item v-for="menuChild in menu.child" :index="menuChild.id" :key="menuChild.id">{{menuChild.name}}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    <!--    <HelloWorld msg="prop test"></HelloWorld>-->
  </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld'
    export default {
        name: "TheHeader",
        data() {
            return {
                activeIndex: '/',
                menuList: [
                    {
                        name: '首页',
                        id: '/',
                        child: null
                    },
                    {
                        name: 'JS基础',
                        id: '2',
                        child: [
                            {
                                name: "JS用法",
                                id: '2-1'
                            }
                        ]
                    }
                ]
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
