<template>
    <div class="login-body">
      <h1 class="login-title">注册账号</h1>
      <div class="login-content">
        <div class="login-box">
          <label class="login-label">账号</label>
          <el-input id="username" class="login-input" v-model="username" required placeholder="" />
        </div>
        <div class="login-box">
          <label class="login-label">昵称</label>
          <el-input id="nickname" class="login-input" v-model="nickname" required placeholder="" />
        </div>
        <div class="login-box">
          <label class="login-label">邮箱</label>
          <el-input id="email" class="login-input" v-model="email" required placeholder="" />
        </div>
        <div class="login-box">
          <label class="login-label">密码</label>
          <el-input id="password" class="login-input" v-model="password" required type="password" placeholder="" />
        </div>
        <div class="login-box">
          <label class="login-label">确认密码</label>
          <el-input id="checkPassword" class="login-input" v-model="comfirmPassword" required type="password" placeholder="" />
        </div>
      </div>
      <div class="login-button">
        <el-button round size="large" @click="handleRegister">注册</el-button>
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
  const message = useMessage(); // 使用自定义的消息提示函数
  
  const userStore = useUserStore(); // 使用 Pinia 的 userStore

  // 注册字段
  const router = useRouter();
  const username = ref('');
  const nickname = ref('');
  const email = ref('');
  const password = ref('');
  const comfirmPassword = ref('');

// 字段验证
function validForm() {
    if (password.value !== comfirmPassword.value) {
        message.Warning('两次输入的密码不一致！');
        return false;
    }
    return true;
  }
  const handleRegister = async () => {
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
    /* text-align: ; */
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
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
  