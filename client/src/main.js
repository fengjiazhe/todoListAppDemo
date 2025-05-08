import { createApp } from 'vue'
import './assets/css/gobal.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import messagePlugin from './assets/plugins/message';  // 引入自定义消息插件

// 引入所有element图标
import * as ElIconsVue from '@element-plus/icons-vue'
import { useUserStore } from './store/userStore'

import { useMessage } from '@/hooks/useMessage';

const app = createApp(App)
const pinia = createPinia()
const message = useMessage();


// 全局注册图标组件
for (const [key, component] of Object.entries(ElIconsVue)) {
    app.component(key, component)
}

app.use(messagePlugin);
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')

// const message = useMessage()

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.meta.requiresAuth && !userStore.hasLogined) {
        console.log('未登录，请先登录再访问！');
        message.error('未登录，请先登录再访问！')
    } else {
        next();
    }
})
