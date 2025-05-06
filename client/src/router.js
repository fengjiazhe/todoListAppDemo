// client/src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Article from './components/Article.vue'
import Write from './components/Write.vue'
import User from './components/User.vue'
import Register from './components/Register.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/article', component: Article },
    { path: '/write', component: Write },
    { path: '/user', component: User },
    { path: '/register', component: Register }
]

export default createRouter({
    history: createWebHistory(),
    routes
})