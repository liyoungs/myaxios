<template>
  <div>
    感谢：
    <el-link type="primary" href="https://www.jianshu.com/p/e6f072839282" target="_blank">
      @有梦想的程序丶猿
    </el-link>
    提供
    <el-link type="primary" href="https://www.apiopen.top" target="_blank">
      免费开放Api接口
    </el-link>
    社区招募中，欢迎IT届的伙伴们加入
    <el-divider></el-divider>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "ApiBase",
  data() {
    return {};
  },
  created() {}
};
</script>
<style></style>
