<template>
  <div>
    <div
      style="width:120px;height:120px;position:fixed;left:80px;top:150px;"
      v-loading="loading"
      element-loading-spinner="el-icon-loading"
      element-loading-text="拼命加载中"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <div :class="'dig dig' + item" v-for="item in 12" :key="'dig' + item">{{ item }}</div>
      <div :class="'hour hour' + item" v-for="item in 4" :key="'hour' + item"></div>
      <div :class="'min min' + item" v-for="item in 5" :key="'min' + item"></div>
      <div :class="'sec sec' + item" v-for="item in 6" :key="'sec' + item"></div>
    </div>
    <el-tag>{{ myClock }}</el-tag>
    <el-calendar v-model="value" class="my-calendar">
      <template slot="dateCell" slot-scope="{ date, data }">
        <span :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-")[2] > 9 ? data.day.split("-")[2] : data.day.split("-")[2].split("0")[1] }}
          {{ data.isSelected ? "✔️" : "" }}
        </span>
      </template>
    </el-calendar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld'

export default {
  name: "TheHome",
  data() {
    return {
      value: new Date(),
      myTimer: null,
      loading: true,
      myClock: null
    };
  },
  methods: {
    checkTime(n) {
      if (n < 10) {
        n = "0" + n;
      }
      return n;
    },
    setTimeoutClock() {
      const TODAY = new Date();
      const HH = this.checkTime(TODAY.getHours());
      const MM = this.checkTime(TODAY.getMinutes());
      const SS = this.checkTime(TODAY.getSeconds());
      this.myClock = HH + "：" + MM + "：" + SS;
      setTimeout(() => {
        this.setTimeoutClock();
      }, 500);
    },
    startClock() {
      this.setClock();
      this.myTimer = setTimeout(() => {
        this.startClock();
      }, 1000);
    },
    setClock() {
      var Ypos = 60;
      var Xpos = 60;
      var Ybase = 8;
      var Xbase = 8;
      var dots = 12;
      var time = new Date();
      var secs = time.getSeconds();
      var sec = (Math.PI * secs) / 30 - 1.57;
      var mins = time.getMinutes();
      var min = (Math.PI * mins) / 30 - 1.57;
      var hr = time.getHours();
      var hrs = (Math.PI * hr) / 6 + (Math.PI * parseInt(time.getMinutes())) / 360 - 1.57;
      for (let i = 0; i < dots; ++i) {
        const digEle = document.querySelector(".dig" + (i + 1));
        digEle.style.top = 60 - 15 + 40 * Math.sin(-0.49 + dots + i / 1.9).toString() + "px";
        digEle.style.left = 60 - 14 + 40 * Math.cos(-0.49 + dots + i / 1.9).toString() + "px";
      }
      for (let i = 0; i < 4; i++) {
        const hourEle = document.querySelector(".hour" + (i + 1));
        hourEle.style.top = Ypos + i * Ybase * Math.sin(hrs).toString() + "px";
        hourEle.style.left = Xpos + i * Xbase * Math.cos(hrs).toString() + "px";
      }
      for (let i = 0; i < 5; i++) {
        const minEle = document.querySelector(".min" + (i + 1));
        minEle.style.top = Ypos + i * Ybase * Math.sin(min).toString() + "px";
        minEle.style.left = Xpos + i * Xbase * Math.cos(min).toString() + "px";
      }
      for (let i = 0; i < 6; i++) {
        const secEle = document.querySelector(".sec" + (i + 1));
        secEle.style.top = Ypos + i * Ybase * Math.sin(sec).toString() + "px";
        secEle.style.left = Xpos + i * Xbase * Math.cos(sec).toString() + "px";
      }
      if (this.loading) {
        this.loading = false;
      }
    }
  },
  mounted() {
    const that = this;
    this.setTimeoutClock();
    if (that.myTimer) {
      window.clearTimeout(that.myTimer);
    }
    this.startClock();
  },
  destroyed() {
    if (this.myTimer) {
      window.clearTimeout(this.myTimer);
      this.myTimer = null;
    }
  }
};
</script>
<style>
.my-calendar {
  width: 390px;
  height: 360px;
  margin: 0 auto;
}
.my-calendar .el-calendar-table .el-calendar-day {
  height: 50px;
}
.my-calendar .is-selected {
  color: #1989fa;
}
/* kpkkk */
div.dig,
div.hour,
div.min,
div.sec {
  position: absolute;
  left: 60px;
  top: 60px;
}
div.hour,
div.min,
div.sec {
  width: 2px;
  height: 2px;
  font-size: 2px;
}
div.dig {
  width: 30px;
  height: 30px;
  font-family: arial, verdana, sans-serif;
  font-size: 10px;
  color: #000000;
  text-align: center;
  padding-top: 10px;
}
div.min {
  background: #0000ff;
}
div.hour {
  background: #000000;
}
div.sec {
  background: #ff0000;
}
</style>
