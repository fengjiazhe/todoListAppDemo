<template>
  <div class="login-body">
    <h1 class="login-title">登录账号</h1>
    <div class="login-content">
      <div class="login-box">
        <label class="login-label">账号</label>
        <el-input id="username" class="login-input" v-model="username" required placeholder="" />
      </div>
      <div class="login-box">
        <label class="login-label">密码</label>
        <el-input id="password" class="login-input" v-model="password" required type="password" placeholder="" />
      </div>
    </div>
    <div class="login-button">
      <el-button round size="large" type="Warning" @click="handleLogin">登录</el-button>
      <a href="#" class="forget">忘记密码</a>
    </div>
  </div>

</template>


<script setup>
name: 'Login';

import { ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../store/userStore';
import { useMessage } from '@/hooks/useMessage'; // 引入自定义的消息提示函数

const router = useRouter();
const username = ref('');
const password = ref('');
const userStore = useUserStore(); // 使用 Pinia 的 userStore
const message = useMessage(); // 使用自定义的消息提示函数

const handleLogin = async () => {
  try {
    const res = await axios.post(`/api/login`, {
      username: username.value,
      password: password.value
    })
    if (res.status === 200) {
      message.success('登录成功！');
      const token = res.data.token; // 获取 token
      const user = res.data.user; // 获取用户信息
      userStore.setUser(token, user.id,user.username,user.email); // 设置用户信息到 Pinia store
      router.push({ path: '/' }); // 登录成功后跳转到主页
    }
  }catch (error) {
    console.error('登录失败', error);
  }
}

</script>


<style scoped>
.login-body {
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
}

.login-box{
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  user-select: none;
}

.login-input{
  background: none;
  width: 250px;
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  z-index: 1;
  transition: border-color 0.4s;
}

.login-label{
  width: 50px;
}

.login-button{
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  size: 3rem;
}

.forget{
  position: absolute;
  left: 55%;
  top: 28%;
  display: flex;
  justify-content: center;
  color: #999;
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.3s;
  align-items: center;
  user-select: none;
}

.forget:hover{
  color: #bf967f;
  cursor: pointer;
  text-decoration: none;
}

</style>
