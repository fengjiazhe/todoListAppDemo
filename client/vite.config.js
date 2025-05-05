import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 引入插件

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), // 使用插件
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  // Django 后端地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})