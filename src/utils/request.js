import axios from 'axios';
// import qs from 'qs';
import { getToken, removeToken } from '@/utils/auth';

// 是否显示重新登录
export const isRelogin = { show: false };

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建axios实例
const service = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_API}/api`,
  timeout: 10000,
});

// request拦截器
service.interceptors.request.use(
  (config) => {
  // 在发送请求之前做些什么
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;

    // // get请求映射params参数
    // if (config.method === 'get' && config.params) {
    //   config.url = `${config.url}?${qs.stringify(config.params)}`;
    //   config.params = {};
    // }
    return config;
  },
  (error) => {
  // 对请求错误做些什么
    console.log('请求错误：', error);
    return Promise.reject(error);
  },
);

// response拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    // // 二进制数据则直接返回
    // if (
    // response.request.responseType === 'blob' || response.request.responseType === 'arraybuffer'
    // ) {
    //   return response.data;
    // }
    const success = response.data?.success;
    if (!success) {
      const errorMsg = response.data?.message || `接口：${response.config.url} 请求失败`;
      return Promise.reject(new Error(errorMsg));
    }
    return response.data;
  },
  (error) => {
  // 对响应错误做点什么
    if (error.response?.status === 401) {
      removeToken();
    }
    const errorMsg = error.response?.data?.message || error.message || `接口：${error.config.url} 请求失败`;
    return Promise.reject(new Error(errorMsg));
  },
);

export default service;
