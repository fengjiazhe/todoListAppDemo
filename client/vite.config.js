import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 引入插件
import path from 'path' // 引入路径模块

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), // 使用插件
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 路径别名
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  // Django 后端地址
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})