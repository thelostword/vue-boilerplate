/*
 * @Author: losting
 * @Date: 2022-06-10 10:30:47
 * @LastEditTime: 2022-06-10 11:00:03
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\api\auth.js
 */
import request from '@/utils/request';

// 登录
export const login = (data) => request({
  url: '/login',
  method: 'post',
  data,
});

// 获取用户信息
export const userInfo = () => request({
  method: 'get',
  url: '/userinfo',
});
