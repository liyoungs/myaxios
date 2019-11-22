<template>
  <div id="loading">
    <div style="padding-top:100px;text-align:center;" v-if="ua">{{ ua }}</div>
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheLoading",
  data() {
    return {
      ua: ""
    };
  },
  created() {
    const UA = window.navigator.userAgent;
    if (UA.toLowerCase().indexOf("msie 9.0") > -1) {
      this.ua = "Internet Explorer 9以及更早的版本不支持 @keyframe 规则或 animation 属性";
    }
  }
};
</script>

<style scoped>
#loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
}

.spinner {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -30px;
  margin-top: -30px;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #4403f7;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  animation-delay: -1s;
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
