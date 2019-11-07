/**
 * application 模块接口列表
 */

import axios from '../utils/http'; // 导入http中创建的axios实例
// import axios from '../utils/ajaxHelper'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块 qs.stringify()

const application = {
  // 扫描 结果查询 qrCode/qrCodeScan
  scanQR(param) {
    return axios.get(`http://localhost:3000/user/userinfo`, {params: param});
  },
  login(param) {
    return axios.post(`http://localhost:3000/login`, qs.stringify(param));
  }
};

export default application;
