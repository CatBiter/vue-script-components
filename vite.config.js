import { defineConfig } from 'vite'
import { resolve } from 'path'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]',
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
    })
  ],

  // 解决页面中适用于@导入问题
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '*': resolve('')
    }
  },

})
