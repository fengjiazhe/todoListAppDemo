// client/src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Page1 from './components/Page1.vue'  // 示例页面
import Login from './components/Login.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/Page1', component: Page1 }
]

export default createRouter({
    history: createWebHistory(),
    routes
})