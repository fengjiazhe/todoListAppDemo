import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        token: sessionStorage.getItem('token') || null,
        userId: sessionStorage.getItem('userId') || null,
        userName: sessionStorage.getItem('userName') || '神秘用户',
        userEmail: sessionStorage.getItem('userEmail') || null,
        hasLogined: !!sessionStorage.getItem('token'),    // 根据token判断是否登录
    }),
    actions: {
        setUser(token, userId, userName, userEmail) {
            this.token = token
            this.userId = userId
            this.userName = userName
            this.userEmail = userEmail
            this.hasLogined = true
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('userId', userId)
            sessionStorage.setItem('userName', userName)
            sessionStorage.setItem('userEmail', userEmail)
        },
        clearUser() {
            this.token = null
            this.userId = null
            this.userName = null
            this.userEmail = null
            this.hasLogined = false;
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('userId')
            sessionStorage.removeItem('userName')
            sessionStorage.removeItem('userEmail')
        },
    }

})