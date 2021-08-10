import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';

const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  // css: {},
  // esbuild: {},
  plugins: [
    vue(), 
    vueJsx(),
    viteMockServe({supportTs: false}),
  ],
  // 设置别名 拓展名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'views': path.resolve(__dirname, 'src/views'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'router': path.resolve(__dirname, 'src/router'),
      'store': path.resolve(__dirname, 'src/store'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
    },
    extensions: ['.mjs', '.vue', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  // 配置代理
  server: {
    host: '0.0.0.0',
    Proxy: {
      '/foo': "https://localhost:9999/foo",
      '/api': {
        target: "http://ryanzhou.icu",
        changOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '^/fallback/*': {
        target: "http://ryanzhou.icu",
        changOrigin: true,
        rewrite: path => path.replace(/^\/fallback/, '')
      }
    }
  },
})
