require('@rushstack/eslint-patch/modern-module-resolution');

const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');

module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
  ],
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
    }),
  },
  rules: {
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-return-await': 0,
    'no-void': 0,
    'no-underscore-dangle': 0,
    'vue/multi-word-component-names': ['error', { ignores: ['index'] }],
  },
};
