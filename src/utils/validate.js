/*
 * @Author: losting
 * @Date: 2022-06-10 10:11:37
 * @LastEditTime: 2022-06-10 10:11:38
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\src\utils\validate.js
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
