/*
 * @Author: losting
 * @Date: 2022-05-18 16:39:38
 * @LastEditTime: 2022-06-07 15:32:59
 * @LastEditors: losting
 * @Description:
 * @FilePath: \vite-vue3-template\vite.config.js
 */
/* eslint-disable */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus';
import Markdown from 'vite-plugin-md';
/* eslint-enable */
import pkg from './package.json';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      svgLoader(),
      vueSetupExtend(),
      Markdown(),
    ],

    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        'svg/': `${resolve(__dirname, 'src/assets/svg')}/`,
      },
    },

    server: {
      host: '0.0.0.0',
      port: 9527,
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        },
      },
    },

    build: {
      outDir: `dist/${pkg.name}_v${pkg.version}`,
      assetsDir: 'assets',
      assetsInlineLimit: 1024 * 4,
      sourcemap: false,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            let extType = info[info.length - 1];
            if (
              /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
            ) {
              extType = 'media';
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = 'imgs';
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'fonts';
            }
            return `${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
        },
      },
    },
  });
};
