/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from '../router';
import store from '../store';
import {Message} from 'element-ui';

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
  Message({
    message: msg,
    // type: "success/warning/info/error",
    duration: 1000
  });
};

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  store.commit('isHide');
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    // 403 token过期 😭
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      localStorage.removeItem('token');
      store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      tip('请求的资源不存在');
      break;
    case 500: // 服务器错
      Message.error('内部服务器错误');
      break
    default:
      console.log(other);
  }
}
// 创建axios实例
var instance = axios.create({
  // baseURL: '/api/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 12
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  config => {
    // store.commit('isShown');
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  // 对请求错误做些什么
  error => {
    // store.commit('isHide');
    Promise.error(error)
  });

// 响应拦截器
instance.interceptors.response.use(res => {
  // 请求成功
  // store.commit('isHide');
  return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
}, error => {
  // 请求失败
  // store.commit('isHide');
  const {response} = error;
  if (response) {
    // 请求已发出，但是不在2xx的范围
    errorHandle(response.status, response.data.message);
    return Promise.reject(response);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error message：', error.message);
    // 处理断网的情况
    // eg:请求超时或断网时，更新 state 的 network 状态
    // network 状态在 app.vue 中控制着一个全局的断网提示组件的显示隐藏
    // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
    if (!window.navigator.onLine) {
      store.commit('changeNetwork', false);
    } else {
      return Promise.reject(error);
    }
  }
  console.log(error.config);
});

export default instance;
