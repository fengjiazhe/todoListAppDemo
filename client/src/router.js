// client/src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Article from './components/Article.vue'
import Write from './components/Write.vue'
import User from './components/User.vue'
import Register from './components/Register.vue'
import Other from './components/Other.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/article', component: Article, meta: { requiresAuth: true } },
    { path: '/write', component: Write, meta: { requiresAuth: true } },
    { path: '/user', component: User, meta: { requiresAuth: true } },
    { path: '/register', component: Register },
    { path: '/other', component: Other }
]

export default createRouter({
    history: createWebHistory(),
    routes
})