<template>
  <div>
    <h1 style="text-algin:center;">Cookie 用于存储 web 页面的用户信息。</h1>
    <el-tag>
      Cookie 以名/值对形式存储(username=John Doe)当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie
      会被添加到该请求中。服务端通过这种方式来获取用户的信息。
    </el-tag>
    <div class="jisuanqi-wrapper">
      <h2 style="text-algin:center;">HTML CSS, JavaScript 计算器</h2>
      <div class="jisuanqi">
        <input type="button" value="C" class="btn other" @click="clearV" />
        <input type="text" id="display" v-model="result" />
        <br />
        <input type="button" value="7" class="btn number" @click="getV($event)" />
        <input type="button" value="8" class="btn number" @click="getV($event)" />
        <input type="button" value="9" class="btn number" @click="getV($event)" />
        <input type="button" value="+" class="btn other" @click="getV($event)" />
        <br />
        <input type="button" value="4" class="btn number" @click="getV($event)" />
        <input type="button" value="5" class="btn number" @click="getV($event)" />
        <input type="button" value="6" class="btn number" @click="getV($event)" />
        <input type="button" value="*" class="btn other" @click="getV($event)" />
        <br />
        <input type="button" value="1" class="btn number" @click="getV($event)" />
        <input type="button" value="2" class="btn number" @click="getV($event)" />
        <input type="button" value="3" class="btn number" @click="getV($event)" />
        <input type="button" value="-" class="btn other" @click="getV($event)" />
        <br />
        <input type="button" value="0" class="btn number" @click="getV($event)" />
        <input type="button" value="." class="btn other" @click="getV($event)" />
        <input type="button" value="/" class="btn other" @click="getV($event)" />
        <input type="button" value="=" class="btn other" @click="calculates" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JsBaseHigher1",
  data() {
    return {
      result: 0
    };
  },
  methods: {
    clearV() {
      this.result = 0;
    },
    getV(evt) {
      if (this.result === 0) {
        this.result = "";
      }
      this.result += evt.target.value;
      // console.log(evt.target.value);
    },
    calculates() {
      const str = this.result;
      setTimeout(str, 0);
      // console.log(func());
    },
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
    // console.log(jq.fn.jquery);
  }
};
</script>
<style scoped>
.jisuanqi-wrapper {
  background-color: #fff;
  border-radius: 50%;
  /* height: 600px; */
  margin: auto;
  width: 600px;
}
.jisuanqi-wrapper * {
  border: none;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
}
.jisuanqi {
  background-color: #495678;
  box-shadow: 4px 4px #3d4a65;
  margin: 10px auto 0;
  padding: 40px 0 30px 40px;
  width: 280px;
}
.btn {
  outline: none;
  cursor: pointer;
  font-size: 20px;
  height: 45px;
  margin: 5px 0 5px 10px;
  width: 45px;
}
.btn:first-child {
  margin: 5px 0 5px 10px;
}
.btn,
#display,
.jisuanqi {
  border-radius: 25px;
}
#display {
  outline: none;
  background-color: #98d1dc;
  box-shadow: inset 6px 6px 0px #3facc0;
  color: #dededc;
  font-size: 20px;
  height: 47px;
  text-align: right;
  width: 165px;
  padding-right: 10px;
  margin-left: 10px;
}
.number {
  background-color: #72778b;
  box-shadow: 0 5px #5f6680;
  color: #dededc;
}
.number:active {
  box-shadow: 0 2px #5f6680;
  -webkit-transform: translateY(2px);
  -ms-transform: translateY(2px);
  -moz-tranform: translateY(2px);
  transform: translateY(2px);
}
.operator {
  background-color: #dededc;
  box-shadow: 0 5px #bebebe;
  color: #72778b;
}
.operator:active {
  box-shadow: 0 2px #bebebe;
  -webkit-transform: translateY(2px);
  -ms-transform: translateY(2px);
  -moz-tranform: translateY(2px);
  transform: translateY(2px);
}
.other {
  background-color: #e3844c;
  box-shadow: 0 5px #e76a3d;
  color: #dededc;
}
.other:active {
  box-shadow: 0 2px #e76a3d;
  -webkit-transform: translateY(2px);
  -ms-transform: translateY(2px);
  -moz-tranform: translateY(2px);
  transform: translateY(2px);
}
</style>
