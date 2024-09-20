import { createApp } from 'vue'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import store from './store'
import router from './router'

// svg全局注册
import SvgIcon from '@/components/SvgIcon'
import 'virtual:svg-icons-register'
import elementIcons from '@/utils/svgicon'

const app = createApp(App)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(elementIcons)
app.component('svg-icon', SvgIcon)
app.mount('#app')
