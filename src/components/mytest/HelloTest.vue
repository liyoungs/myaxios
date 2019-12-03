<template>
  <div>
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
    <div class="myFunc1">
      <ul class="bar-wrap" :class="barChange ? 'change' : ''" @click="myFunc1">
        <li class="bar1"></li>
        <li class="bar2"></li>
        <li class="bar3"></li>
      </ul>
      <ol class="flex-name">
        <li>qq</li>
        <li style="background:#f00;">qfcc</li>
        <li>🌌☠</li>
      </ol>
    </div>
    <button type="button" @keyup.13="func1">keyCode</button>
    <hr color="#f00" />
    <img
      src="https://www.runoob.com/try/demo_source/compman.gif"
      alt="compman"
      width="107"
      height="98"
      align="right"
    />
    <p @click="above">一些文本。一些文本。一些文本。一些文本。一些文本。</p>
    <table border="10" cellPadding="7" cellSpacing="8" id="myTable">
      <caption>这是一个表格标题</caption>
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloTest",
  data() {
    return {
      barChange: false,
      monthSize: { cur: null, week: null },
      today: null,
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
    func1(evt) {
      console.log(evt);
      console.log(evt.keyCode);
    },
    myFunc1() {
      this.barChange = !this.barChange;
    },
    myFunc2() {
      let TXT = "";
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        TXT = "移动";
      } else {
        TXT = "PC";
      }
      this.$message({
        message: TXT,
        type: "success",
        offset: 100
      });
    },
    is_weixn() {
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) === "micromessenger") {
        this.$message({
          message: "微信浏览器",
          type: "success",
          offset: 30
        });
      } else {
        this.$message({
          message: "其他浏览器",
          type: "success",
          offset: 30
        });
      }
    },
    rightMonth() {
      const TD = this.today;
      const MM = TD.getMonth(); // 获取当前月份/** 0 ~ 11 */
      TD.setMonth(MM + 1); // 设置月份 为当前月的下一个月
      this.monthSizeSS();
    },
    leftMonth() {
      const TD = this.today;
      const MM = TD.getMonth(); // 获取当前月份/** 0 ~ 11 */
      TD.setMonth(MM - 1); // 设置月份 为当前月的上一个月
      this.monthSizeSS();
    },
    monthSizeSS() {
      // this.monthSize = {};
      var TD = this.today;
      var MM = TD.getMonth(); // 获取当前月份/** 0 ~ 11 */
      TD.setMonth(MM + 1); // 设置月份 为当前月的下一个月
      TD.setDate(0); // 设置一个月中的某一天/**0 为一个月的最后一天 */
      this.monthSize.cur = TD.getDate(); // 当前月的总天数
      TD.setFullYear(TD.getFullYear(), MM, 1); // 设置日期  为当前月的第一天
      this.monthSize.week = TD.getDay(); // 当前月的第一天星期几
      // size.week = TD.getDay() - 1; // 当前月的 上一个月 最后一天 星期几
      if (this.monthSize.week < 1) {
        this.monthSize.week = null;
      }
      // return size;
    },
    above() {
      document.getElementById("myTable").frame = "above";
    }
  },
  computed: {
    // ms() {
    //   var size = {};
    //   var TD = this.today;
    //   var MM = TD.getMonth(); // 获取当前月份/** 0 ~ 11 */
    //   TD.setMonth(MM + 1); // 设置月份 为当前月的下一个月
    //   TD.setDate(0); // 设置一个月中的某一天/**0 为一个月的最后一天 */
    //   size.cur = TD.getDate(); // 当前月的总天数
    //   TD.setFullYear(TD.getFullYear(), MM, 1); // 设置日期  为当前月的第一天
    //   size.week = TD.getDay(); // 当前月的第一天星期几
    // size.week = TD.getDay() - 1; // 当前月的 上一个月 最后一天 星期几
    //   if (size.week < 1) {
    //     size.week = null;
    //   }
    //   return size;
    // }
  },
  created() {
    this.today = new Date();
    this.monthSizeSS();
    this.myFunc2();
    this.is_weixn();
    console.log("created");
  },
  mounted() {
    const MYCARS = ["Saad", "Volvo", "BMW"];
    const MYCARS2 = ["Opel", "VW", "Ford"];
    const OTHER = ["Cadillac", "Land Rover", "Toyota"];
    const NEWCARS = MYCARS.concat(MYCARS2, OTHER);
    console.log(MYCARS.concat(MYCARS2));
    console.log(NEWCARS);
    console.log(MYCARS.join("-"));
    console.log(MYCARS.pop());
    console.log(MYCARS);
    // BMW
    console.log(MYCARS.push("//BMW"));
    console.log(MYCARS);
    console.log(MYCARS.reverse());
    console.log(MYCARS);
    console.log(MYCARS.shift());
    console.log(MYCARS);
    console.log(MYCARS.unshift("//BMW//"));
    console.log(MYCARS.toString());
    console.log(MYCARS);
    console.log(NEWCARS.slice(1, 2));
    console.log(NEWCARS.slice(1));
    console.log(NEWCARS);
    console.log(NEWCARS.splice(1));
    console.log(NEWCARS);
    console.log(document.images);
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
.myFunc1 {
  border: #3a8ee6 1px solid;
  height: 100px;
  background: rgb(123, 213, 132);
  background: rgba(123, 213, 132, 0.6);
}
.bar-wrap {
  list-style: none;
  border: #f00 1px solid;
  width: 64px;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
.bar1,
.bar2,
.bar3 {
  width: 60px;
  height: 8px;
  margin: 6px auto;
  background: #3a8ee6;
  transition: all 0.5s;
}
.change .bar2 {
  opacity: 0;
}
.change .bar1 {
  transform: rotate(-45deg) translate(-14px, 7px);
}
.change .bar3 {
  transform: rotate(45deg) translate(-12px, -7px);
}
.flex-name {
  display: flex;
  list-style: none;
}
</style>
