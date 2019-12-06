<template>
  <div class="wyNews">
    <div class="wyNews-wrap">
      <el-link
        v-for="(item, index) in ajax_info"
        :key="index"
        :underline="false"
        :href="item.path"
        target="_blank"
        class="wyNews-item"
      >
        <img style="width: 140px; height: 88px" :src="item.image" alt="WangYiNews" />
        <p class="wyNews-item-title">{{ item.title }}</p>
        <p class="wyNews-item-passtime">{{ item.passtime }}</p>
      </el-link>
    </div>
    <div class="wyNews-rightSide">
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        :total="total"
        :page-size="5"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
      ></el-pagination>
      <el-divider>天气查询</el-divider>
      <el-form :inline="true" :model="weather" ref="weatherForm" :rules="rules">
        <el-form-item label="省" required="required" prop="province">
          <el-input v-model="weather.province" placeholder="北京"></el-input>
        </el-form-item>
        <el-form-item label="市" required="required" prop="city">
          <el-input v-model="weather.city" placeholder="北京"></el-input>
        </el-form-item>
        <el-form-item label="区">
          <el-input v-model="weather.county" placeholder="区"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('weatherForm')">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "WangYiNews",
  data() {
    return {
      ajax_info: null,
      total: 5,
      currentPage: 1,
      weather: {
        province: "",
        city: "",
        county: ""
      },
      rules: {
        province: [{ required: true, message: "请输入省份", trigger: "blur" }],
        city: [{ required: true, message: "请输入城市", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleCurrentChange(page) {
      this.ajax_info = this.$store.state.wyNewsData.slice(5 * (page - 1), 5 * page);
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(valid);
          const params = {
            source: "xw",
            weather_type: "forecast_24h",
            province: this.weather.province,
            city: this.weather.city,
            county: this.weather.county
          };
          console.log(this.$ajax.wis.weatherQuery);
          this.$ajax.wis
            .weatherQuery(params)
            .then(result => {
              console.log(result);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          return false;
        }
      });
    },
    nextClick(page) {
      console.log(page);
    },
    getData() {
      const XMLHTTP = new XMLHttpRequest();
      XMLHTTP.onreadystatechange = () => {
        if (XMLHTTP.readyState === 4 && XMLHTTP.status === 200) {
          // const res = XMLHTTP.responseText;
          const res = JSON.parse(XMLHTTP.responseText);
          if (res.code === 200) {
            this.$store.commit("setWyNewsData", res.result);
            // this.ajax_info = res.result;
          } else {
            this.ajax_info = "没有数据";
          }
        } else {
          this.ajax_info = "请求错误";
        }
      };
      // i.tianqi.com/index.php?c=code&id=12&icon=1&num=5&site=12 "page=1&count=5"
      XMLHTTP.open("post", "https://api.apiopen.top/getWangYiNews", true);
      XMLHTTP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      XMLHTTP.send();
    }
  },
  created() {
    const wyNewsData = this.$store.state.wyNewsData;
    console.log(wyNewsData[0].passtime <= new Date());
    if (wyNewsData.length && wyNewsData.length > 0) {
      if (wyNewsData[0].passtime <= new Date()) {
        this.getData();
      } else {
        this.ajax_info = wyNewsData.slice(0, 5);
      }
    } else {
      this.getData();
    }

    this.total = this.$store.state.wyNewsData.length || 5;
  }
};
</script>
<style>
.wyNews {
  position: relative;
  width: 100%;
}
.wyNews-wrap {
  position: relative;
  padding-left: 40px;
}
.wyNews-item {
  display: block;
  position: relative;
  width: 360px;
  height: 100px;
}
.wyNews-item-passtime,
.wyNews-item-title {
  position: absolute;
  right: 0;
  width: 210px;
  margin: 0;
  padding: 0;
  text-align: left;
}
.wyNews-item-title {
  top: 0;
}
.wyNews-item-passtime {
  bottom: 12px;
}
.wyNews-rightSide {
  position: fixed;
  left: 360px;
  top: 180px;
  margin-left: 120px;
}
</style>
