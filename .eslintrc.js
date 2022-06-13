/*
 * @Author: losting
 * @Date: 2022-05-18 09:31:13
 * @LastEditTime: 2022-06-13 11:24:54
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      alias: [['@', './src'], ['svg', './src/assets/svg']],
    },
  },
  rules: {
    'vue/require-default-prop': 0,
    'vue/multi-word-component-names': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-return-await': 0,
    'no-void': 0,
  },
};
