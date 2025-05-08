// client/src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: () => import('./components/Login.vue') },
    { path: '/article', component: () => import('./components/Article.vue'), meta: { requiresAuth: true } },
    { path: '/write', component: () => import('./components/Write.vue'), meta: { requiresAuth: true } },
    { path: '/user', component: () => import('./components/User.vue'), meta: { requiresAuth: true } },
    { path: '/register', component: () => import('./components/Register.vue') },
    { path: '/other', component: () => import('./components/Other.vue') },
]

export default createRouter({
    history: createWebHistory(),
    routes
})