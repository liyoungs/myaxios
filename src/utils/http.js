import axios from "axios"
import store from "../store";
import router from "../router"
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
  if (store.state.AUTH_TOKEN) {//是否 存在token
    config.headers['Authorization'] = store.state.AUTH_TOKEN;
  }
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
  console.warn(error);
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
  console.log(response);
  return response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
}, error => {
  /*
* 关闭 loading
* */
  loadingInstance.close();
  /*
*  status < 200 || status >= 300;
* 失败状态码
* */
  const {response} = error;
  if (response) {
    // console.log(response);
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.headers);
    // console.log(response.statusText);
    switch (response.status) {
      case 400:
        MessageBox.confirm("客户端请求的语法错误，服务器无法理解", 'Error');
        break;
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        store.commit('removeToken');
        if (router.currentRoute.path !== 'login') {
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          });
        }
        // MessageBox.confirm("要求用户的身份认证", 'Error');
        break;
      case 403:
        MessageBox.confirm('登录过期，请重新登录', 'Error');
        break;
      case 404:
        Message.warning(response.statusText);
        break;
      default:
        return Promise.reject(error.response);
    }


    // } else if (error.request) {
    //   // The request was made but no response was received
    //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //   // http.ClientRequest in node.js
    //   console.log(error.request);
    //   console.log('Error', error.message);

  } else {
    // Something happened in setting up the request that triggered an Error
    // console.log('Error', error.message);
    // MessageBox.confirm(message, title, options)
    MessageBox.confirm(error.message, 'Error', {
      confirmButtonText: '刷新重试',
      cancelButtonText: '返回首页',
      type: 'warning'
    }).then(() => {
      Message({
        type: 'success',
        message: '刷新成功!'
      });
    }).catch(() => {
      router.push("/about")
    });
    console.log(error.config);
    return Promise.reject(error);
  }

})
;

export default instance
