import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        token: sessionStorage.getItem('token') || null,
        userId: sessionStorage.getItem('userId') || null,
        hasLogined: !!sessionStorage.getItem('token'),    // 根据token判断是否登录
    }),
    actions: {
        setUser(token, userId, username) {
            this.token = token
            this.userId = userId
            this.username = username
            this.hasLogined = true
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('userId', userId)
            sessionStorage.setItem('username', username)
        },
        clearUser() {
            this.token = null
            this.userId = null
            this.username = null
            this.hasLogined = false;
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('userId')
            sessionStorage.removeItem('username')
        },
    }

})