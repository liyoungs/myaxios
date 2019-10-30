import axios from "axios"
import store from "../store";
// import router from "../router"
import {Message, MessageBox, Loading} from "element-ui";

let loadingInstance = null; //全屏 Loading 的实例

/*
* 创建 axios 实例
* 状态码
* 自定义默认值
* 超时timeout
* withCredentials 是否跨域
*baseURL
* */
const instance = axios.create({
  // baseURL: "http://localhost:3000/",
  // withCredentials: true, //
  // // `validateStatus` defines whether to resolve or reject the promise for a given
  // // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // // rejected.
  // validateStatus: function (status) {
  //   return status >= 200 && status < 300; // default
  // },
  timeout: 10000
});
/*
* 请求拦截器
* 设置一个 loading ，每次请求之前显示
*
* */
instance.interceptors.request.use(config => {
  // Do something before request is sent
  /*
  * 请求发送之前
  * */
  /*
  * 显示 loading
  * */
  loadingInstance = Loading.service({lock: true, text: "拼命加载中"});
  return config;
}, error => {
  /*
* 关闭 loading
* */
  loadingInstance.close();
  // Do something with request error
  /*
  * 响应错误
  * */
  return Promise.reject(error);
});
/*
* 响应拦截器
* 关闭 loading
* */
instance.interceptors.response.use(response => {
  /*
 * 关闭 loading
 * */
  loadingInstance.close();
// Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  /*
  *  status >= 200 && status < 300;
  * 成功状态码
  * */
  return response
}, error => {
  /*
* 关闭 loading
* */
  loadingInstance.close();
  /*
*  status < 200 || status >= 300;
* 失败状态码
* */
  return Promise.reject(error);
});

export default instance
