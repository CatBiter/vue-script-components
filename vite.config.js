import { defineConfig } from 'vite'
import { resolve } from 'path'

import createVitePlugins from './src/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),

  // 解决页面中适用于@导入问题
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '*': resolve('')
    },
    // 解决找不到layout下的index（import Layout from '@/layout'）
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler" // or 'modern'
      }
    }
  }
})
