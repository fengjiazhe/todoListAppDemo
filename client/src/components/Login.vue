<template>
  <div>
    这是登录页
  </div>
  <input v-model="username" type="text" placeholder="请输入用户名" />
  <input v-model="password" type="password" placeholder="请输入密码" />
  <button @click="handleLogin">登录</button>

</template>


<script setup>
name: 'Login';

import { ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../store/userStore';

const router = useRouter();
const username = ref('');
const password = ref('');
const userStore = useUserStore(); // 使用 Pinia 的 userStore

const handleLogin = async () => {
  try {
    const res = await axios.post(`/api/login`, {
      username: username.value,
      password: password.value
    })
    if (res.status === 200) {
      console.log('成功连接，登录响应为：', res);
      const token = res.data.token; // 获取 token
      const user_id = res.data.user.id; // 获取用户 ID
      const user_name = res.data.user.username; // 获取用户名
      userStore.setUser(token, user_id,user_name); // 设置用户信息到 Pinia store
      sessionStorage.setItem('token', token); // 存储 token 到 sessionStorage
      router.push({ path: '/' }); // 登录成功后跳转到主页
    }
  }catch (error) {
    console.error('登录失败', error);
  }
}

</script>


<style scoped>


</style>
