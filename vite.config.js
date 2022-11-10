/*
 * @Author: losting
 * @Date: 2022-05-18 16:39:38
 * @LastEditTime: 2022-11-10 15:09:04
 * @LastEditors: thelostword
 * @Description:
 * @FilePath: \vite-vue3-template\vite.config.js
 */
import { fileURLToPath, URL } from 'node:url';

/* eslint-disable */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
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
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        icons: fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
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
        input: fileURLToPath(new URL('./index.html', import.meta.url)),
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            let extType = info[info.length - 1];
            if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = 'imgs';
            }
            return `${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              const modules = id.toString().split('node_modules/')[2].split('/');
              const chunksModules = [];
              if (chunksModules.includes(modules[0])) return modules[0];
              return 'vendor';
            }
            return undefined;
          },
        },
      },
    },
  });
};
