<template>
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
</template>

<script>
export default {
  name: "HelloTest",
  data() {
    return {
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
    //   // size.week = TD.getDay() - 1; // 当前月的 上一个月 最后一天 星期几
    //   if (size.week < 1) {
    //     size.week = null;
    //   }
    //   return size;
    // }
  },
  created() {
    this.today = new Date();
    this.monthSizeSS();
    console.log("created");
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
</style>
