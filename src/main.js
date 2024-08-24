import { createApp } from 'vue'
import './style.css'
import 'virtual:svg-icons-register'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Router from './router/index'

import App from './App.vue'

const app = createApp(App)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus)
app.use(Router)
app.mount('#app')
