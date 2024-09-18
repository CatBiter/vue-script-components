import { defineConfig } from 'vite'
import { resolve } from 'path'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// 按需引入ElementPlus组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 自动导入Icon图标
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          // 修改Icon组件前缀，不设置则默认为i,禁用则设置为false
          prefix: 'icon',
          // 指定collection，即指定为elementplus图标集ep
          enabledCollections: ['ep']
          // 即<icon-ep-menu />
        }),
        // 这个是组件自动导入
        ElementPlusResolver()
      ],
    }),
    Icons({
      autoInstall: true
    })
  ],

  // 解决页面中适用于@导入问题
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '*': resolve('')
    },
    // 解决找不到layout下的index（import Layout from '@/layout'）
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },


})
