/*
 * @Author: losting
 * @Date: 2022-05-25 18:05:52
 * @LastEditTime: 2022-05-25 18:08:27
 * @LastEditors: losting
 * @Description:
 * @FilePath: \moe-admin-template\src\utils\await-to.js
 */
/**
 * @param { Promise } 传进去的请求函数
 * @param { Object= } errorExt - 拓展错误对象
 * @return { Promise } 返回一个Promise
 */
export const to = (promise, errorExt) => promise
  .then((data) => [undefined, data])
  .catch((err) => {
    if (errorExt) {
      const parsedError = { ...err, ...errorExt };
      return [parsedError, undefined];
    }
    return [err, undefined];
  });

export default to;
