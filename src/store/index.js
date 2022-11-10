/*
 * @Author: thelostword
 * @Date: 2022-11-10 15:18:14
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-10 15:18:17
 * @FilePath: \vite-vue3-template\src\store\index.js
 */
import { createPinia } from 'pinia';

export const store = createPinia();
export const setupStore = (app) => void app.use(store);
