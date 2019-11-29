<template>
  <div style="padding-bottom:30px">
    <h1 style="text-algin:center;">Cookie 用于存储 web 页面的用户信息。</h1>
    <el-tag>
      Cookie 以名/值对形式存储(username=John Doe)当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie
      会被添加到该请求中。服务端通过这种方式来获取用户的信息。
    </el-tag>
    <el-card class="wrap">
      <el-tag slot="header">计时器 timout</el-tag>
      <el-row :gutter="20">
        <el-col :span="4" class="tr">
          <el-button @click="startTimer">开始</el-button>
        </el-col>
        <el-col :span="16">
          <el-input v-model="result" placeholder="result" readonly></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="stopTimer">停止</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="wrap">
      <div class="slide-wrap">
        <div class="slide-container">
          <ul class="slide">
            <li
              class="slide-item fade"
              v-for="(item, index) in imgArr"
              :key="'index' + index"
              :class="index === slideInd ? 'active' : ''"
            >
              <img :src="item" alt="" />
              <div class="txt">@/assets/pic{{ index + 1 }}.png</div>
            </li>
          </ul>
          <el-button
            type="primary"
            class="arrow-left"
            icon="el-icon-arrow-left"
            @click="leftSlide"
            size="mini"
            circle
            plain
          ></el-button>
          <el-button
            type="primary"
            class="arrow-right"
            icon="el-icon-arrow-right"
            @click="rightSlide"
            size="mini"
            circle
            plain
          ></el-button>
        </div>
        <ul class="indicator-wrap">
          <li
            class="indicator"
            v-for="val in imgArr.length"
            :key="'val' + val"
            @click="currentSlide(val)"
            :class="val === indicatorInd ? 'active' : ''"
          >
            <span class="indicator-item"></span>
          </li>
        </ul>
      </div>
    </el-card>
    <h2>自制日历</h2>
    <el-card class="calendar">
      <el-row :gutter="20" slot="header">
        <el-col :span="4">
          <el-button
            type="primary"
            icon="el-icon-arrow-left"
            @click="leftMonth"
            size="mini"
            circle
            plain
          ></el-button>
        </el-col>
        <el-col :span="16" class="tc">{{ today.getFullYear() }}年{{ today.getMonth() + 1 }}月</el-col>
        <el-col :span="4" class="tr">
          <el-button
            type="primary"
            icon="el-icon-arrow-right"
            @click="rightMonth"
            size="mini"
            circle
            plain
          ></el-button>
        </el-col>
      </el-row>
      <div v-for="week in weekday" :key="week" class="calendar-cell">{{ week }}</div>
      <template v-if="monthSize.week">
        <div v-for="w in monthSize.week" :key="'w' + w" class="calendar-cell"></div>
      </template>
      <div
        v-for="item in monthSize.cur"
        :key="item"
        class="calendar-cell"
        :class="item === currentDay ? 'active' : ''"
      >
        <el-button size="mini" circle>{{ item }}</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "JsBaseHigher2",
  data() {
    return {
      result: 0,
      timer: null,
      timer_is_on: false,
      timerSlide: null,
      indicatorInd: 1,
      slideInd: 0,
      imgArr: [
        require("@/assets/pic1.png"),
        require("@/assets/pic2.png"),
        require("@/assets/pic3.png"),
        require("@/assets/pic4.png")
      ],
      today: null,
      monthSize: { cur: null, week: null },
      currentDay: new Date().getDate(),
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      month: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ]
    };
  },
  methods: {
    setCookie(cname, cvakue, exday) {
      const d = new Date();
      exday = exday || 1;
      d.setTime(d.getTime() + exday * 24 * 60 * 60 * 1000);
      const expires = d.toUTCString();
      document.cookie = cname + "=" + cvakue + "; expires=" + expires;
    },
    getCookie(cname) {
      cname += "=";
      const cn = document.cookie.split("; ");
      for (let index = 0; index < cn.length; index++) {
        const v = cn[index];
        if (v.indexOf(cname) === 0) {
          return v.substring(cname.length, v.length);
        }
      }
      return "";
    },
    removeCookie(username) {
      // username = username ? (username += "= ") : "";
      if (username) {
        document.cookie = username + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      } else {
        const cn = document.cookie.split("; ");
        cn.forEach(element => {
          document.cookie = element.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        });
      }
    },
    myTimer() {
      this.result++;
      this.timer = setTimeout(this.myTimer, 1000);
    },
    startTimer() {
      if (!this.timer_is_on) {
        this.timer_is_on = true;
        if (this.timer) {
          window.clearTimeout(this.timer);
        }
        this.myTimer();
      }
    },
    stopTimer() {
      if (this.timer) {
        window.clearTimeout(this.timer);
        this.timer_is_on = false;

        this.$confirm("已停止计时器。是否清零重新开始?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            if (this.result === 0) {
              this.$message({
                type: "success",
                message: "已清零!"
              });
            } else {
              this.result = 0;
              this.$message({
                type: "success",
                message: "清零成功!"
              });
            }
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消"
            });
          });
      }
    },
    currentSlide(val) {
      if (this.timerSlide) {
        clearTimeout(this.timerSlide);
        this.timerSlide = null;
      }
      this.indicatorInd = val;
      this.slideInd = val - 1;
      this.timerSlide = setTimeout(this.autoSlide, 5000);
    },
    autoSlide() {
      if (this.timerSlide) {
        clearTimeout(this.timerSlide);
        this.timerSlide = null;
      }
      const len = this.imgArr.length;
      this.indicatorInd++;
      this.slideInd++;
      if (this.indicatorInd > len) {
        this.indicatorInd = 1;
      }
      if (this.slideInd + 1 > len) {
        this.slideInd = 0;
      }
      this.timerSlide = setTimeout(this.autoSlide, 1500);
    },
    rightSlide() {
      if (this.timerSlide) {
        clearTimeout(this.timerSlide);
        this.timerSlide = null;
      }
      const len = this.imgArr.length;
      this.indicatorInd++;
      this.slideInd++;
      if (this.indicatorInd > len) {
        this.indicatorInd = 1;
      }
      if (this.slideInd + 1 > len) {
        this.slideInd = 0;
      }
      this.timerSlide = setTimeout(this.autoSlide, 5000);
    },
    leftSlide() {
      if (this.timerSlide) {
        clearTimeout(this.timerSlide);
        this.timerSlide = null;
      }
      const len = this.imgArr.length;
      this.indicatorInd--;
      this.slideInd--;
      if (this.indicatorInd < 1) {
        this.indicatorInd = len;
      }
      if (this.slideInd < 0) {
        this.slideInd = len - 1;
      }
      this.timerSlide = setTimeout(this.autoSlide, 5000);
    },
    monthLen() {
      const TD = this.today;
      const MM = TD.getMonth(); // 获取当前月份/** 0 ~ 11 */
      TD.setMonth(MM + 1); // 设置月份 为当前月的下一个月
      TD.setDate(0); // 设置一个月中的某一天/**0 为一个月的最后一天 */
      this.monthSize.cur = TD.getDate(); // 当前月的总天数
      TD.setFullYear(TD.getFullYear(), MM, 1); // 设置日期  为当前月的第一天
      this.monthSize.week = TD.getDay(); // 当前月的第一天星期几
      // size.week = TD.getDay() - 1; // 当前月的 上一个月 最后一天 星期几
      if (this.monthSize.week < 1) {
        this.monthSize.week = null;
      }
    },
    rightMonth() {
      const TD = this.today;
      const MM = TD.getMonth(); // 获取当前月份/** 0 ~ 11 */
      TD.setMonth(MM + 1); // 设置月份 为当前月的下一个月
      this.monthLen();
    },
    leftMonth() {
      const TD = this.today;
      const MM = TD.getMonth(); // 获取当前月份/** 0 ~ 11 */
      TD.setMonth(MM - 1); // 设置月份 为当前月的上一个月
      this.monthLen();
    }
  },
  created() {
    this.today = new Date();
    this.monthLen();
    console.log("created");
    document.cookie = "vv=ss";
    document.cookie = "carNamesss=ssss";
    this.setCookie("carName", "Volvo");
    // this.removeCookie();
    console.log(document.cookie);
    console.log(this.getCookie("carName"));
  },
  mounted() {
    console.log("mounted");
    this.autoSlide();
  }
};
</script>
<style scoped>
.wrap {
  width: 560px;
  margin: 10px auto;
  text-align: center;
}
.tr {
  text-align: right;
}
.tc {
  text-align: center;
}
.slide-wrap,
.slide-container {
  width: 140px;
  margin: auto;
  line-height: 1;
  position: relative;
}
.slide-container {
  height: 60px;
}
.slide-wrap ul,
.slide-wrap li {
  margin: 0;
  list-style: none;
  padding: 0;
}
.slide {
  width: 140px;
  height: 60px;
  overflow: hidden;
  position: relative;
}
.slide-item {
  width: 140px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
.slide-item .txt {
  position: absolute;
  bottom: 6px;
  left: 0;
  right: 0;
  font-size: 12px;
}
.slide-item.active {
  display: block;
}
.indicator-wrap {
  font-size: 0;
}
.indicator-wrap .indicator {
  background: transparent;
  display: inline-block;
  padding: 12px 6px;
  cursor: pointer;
}
.indicator-item {
  display: inline-block;
  background: #b3d8ff;
  width: 20px;
  height: 2px;
  font-size: 12px;
}
.indicator.active .indicator-item {
  background: #409eff;
}
.arrow-left,
.arrow-right {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 20px;
  padding: 0 4px;
  border: none;
}
.arrow-right {
  right: 0;
}
.arrow-left {
  left: 0;
}
/* 淡出动画 */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
.calendar {
  width: 506px;
  margin: auto;
  overflow: hidden;
}
.calendar-cell {
  display: inline-block;
  width: 70px;
  padding-bottom: 10px;
}
.calendar-cell:nth-child(7n) {
  margin-right: -24px;
}
.calendar-cell .el-button {
  width: 46px;
  height: 46px;
}
.calendar-cell.active .el-button {
  color: #3a8ee6;
  border-color: #3a8ee6;
  background-color: #ecf5ff;
}
</style>
