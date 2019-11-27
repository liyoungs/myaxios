<template>
  <div>
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
        <ul class="slide">
          <li
            class="slide-item"
            v-for="(item, index) in imgArr"
            :key="index"
            :class="index === slideInd ? 'active' : ''"
          >
            <img :src="item" alt="" />
            <div class="txt">@/assets/pic{{ index + 1 }}.png</div>
          </li>
        </ul>
        <ul class="indicator-wrap">
          <li
            class="indicator"
            v-for="val in imgArr.length"
            :key="val"
            @click="currentSlide(val)"
            :class="val === indicatorInd ? 'active' : ''"
          >
            <span class="indicator-item"></span>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "JsBaseHigher1",
  data() {
    return {
      result: 0,
      timer: null,
      timer_is_on: false,
      indicatorInd: 1,
      slideInd: 0,
      imgArr: [
        require("@/assets/pic1.png"),
        require("@/assets/pic2.png"),
        require("@/assets/pic3.png"),
        require("@/assets/pic4.png")
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
      console.log(val);
      this.indicatorInd = val;
      this.slideInd = val - 1;
    },
    autoSlide() {
      const len = this.imgArr.length;
      this.indicatorInd++;
      this.slideInd++;
      if (this.indicatorInd > len) {
        this.indicatorInd = 1;
      }
      if (this.slideInd + 1 > len) {
        this.slideInd = 0;
      }
      setTimeout(this.autoSlide, 1500);
    }
  },
  created() {
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
    // console.log(jq.fn.jquery);
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
.slide-wrap {
  width: 140px;
  margin: auto;
  line-height: 1;
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
</style>
