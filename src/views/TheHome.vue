<template>
  <el-calendar v-model="value" class="my-calendar">
    <template slot="dateCell" slot-scope="{date, data}">
      <span
        :class="data.isSelected ? 'is-selected' : ''"
      >{{ data.day.split('-')[2]>9?data.day.split('-')[2]:data.day.split('-')[2].split('0')[1] }} {{ data.isSelected ? '✔️' : ''}}</span>
    </template>
  </el-calendar>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld'
export default {
  name: "TheHome",
  data() {
    return {
      value: new Date()
    };
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
</style>
