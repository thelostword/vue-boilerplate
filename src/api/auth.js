import request from '@/utils/request';

// 登录
export const login = (data) => request({
  url: '/v1/login',
  method: 'post',
  data,
});

// 获取用户信息
export const userInfo = () => request({
  method: 'get',
  url: '/v1/userinfo',
});
