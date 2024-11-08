import { createApp } from 'vue'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import store from './store'
import router from './router'

// svg全局注册
import "virtual:svg-icons-register"
import SvgIcon from '@/components/SvgIcon'
import elementIcons from '@/utils/svgicon'

// 引入echarts
import Echarts from 'vue-echarts'
import * as echarts from 'echarts'


import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const app = createApp(App)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(elementIcons)
app.use(createVuetify())
app.component('svg-icon', SvgIcon)
app.component('e-charts', Echarts)
// 全局挂载echarts
app.config.globalProperties.$echarts = echarts
app.mount('#app')
