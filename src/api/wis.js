/**
 * wis 腾讯天气 模块接口列表
 */

import axios from "../utils/http"; // 导入http中创建的axios实例
// import axios from '../utils/ajaxHelper'; // 导入http中创建的axios实例
import qs from "qs"; // 根据需求是否导入qs模块 qs.stringify()

const wis = {
  /*  https://wis.qq.com/weather/common?source=xw&weather_type=forecast_24h&province=%E5%9B%9B%E5%B7%9D&city=%E6%88%90%E9%83%BD */
  weatherQuery(param) {
    return axios.get(`https://wis.qq.com/weather/common`, { params: param });
  },
  login(param) {
    return axios.post(`https://wis.qq.com/weather/common`, qs.stringify(param));
  }
};

export default wis;
