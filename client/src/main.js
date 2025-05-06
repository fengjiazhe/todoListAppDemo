import { createApp } from 'vue'
import './assets/css/gobal.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入所有element图标
import * as ElIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
const pinia = createPinia()


// 全局注册图标组件
for (const [key, component] of Object.entries(ElIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')
