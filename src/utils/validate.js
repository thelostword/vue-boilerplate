// 邮箱验证
export const isEmail = (val) => {
  const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return REGEX.test(val);
};

// 手机号验证
export const isPhoneNumber = (val) => {
  const REGEX = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
  return REGEX.test(val);
};

// 密码强度验证
export const isPwdLv0 = (val) => {
  const REGEX = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  return REGEX.test(val);
};
