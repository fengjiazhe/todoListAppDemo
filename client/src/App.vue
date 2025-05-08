<template>
  <div>
    <el-container class="whole-layout">
      <el-header class="whole-header">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/img/FBlogLogo.jpg" alt="FBlog Logo" />
          </router-link>
        </div>
        <div class="whole-nav">
          <div class="nav-bar">
            <div @click="toHome">首页</div>
            <div @click="toArticle">墨海</div>
            <div @click="toWrite">执笔</div>
            <div @click="toOther">妙趣</div>
          </div>
          <el-icon class="user-center" @click="toUser" @mouseenter="delayOpen" @mouseleave="delayClose">
            <User />
          </el-icon>
          <!-- 弹窗元素 -->
          <div class="user-popup" v-show="popupVisible" @mouseenter="delayOpen" @mouseleave="delayClose">
            <div class="login-reday" v-if="hasLogined">
              <div>头像</div>
              <div class="user-name">{{ userName }}</div>
              <div class="user-email">{{ userEmail }}</div>
              <div>
                <el-button type="warning" @click="toUserCenter">个人中心</el-button>
              </div>
              <div>
                <el-button type="warning" @click="toArticleManager">管理文章</el-button>
              </div>
              <div>
                <el-button type="warning" @click="quitLogin">退出登录</el-button>
              </div>
            </div>
            <div class="no-login" v-else>
              <div class="title">未登录</div>
              <div>
                <el-button class="popup-button" type="warning" @click="toLogin">去登录</el-button>
              </div>
              <div>
                <el-button class="popup-button" type="warning" @click="toRegister">去注册</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-main class="whole-main">
        <router-view></router-view>
      </el-main>
      <el-footer class="whole-footer">
        <div>站长：吉吉 --- 联系邮箱1006501951@qq.com | 字体：LXGWWenKaiMonoScreen --- 来源：中文网字计划</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';
import { useMessage } from '@/hooks/useMessage';

const router = useRouter();
const userStore = useUserStore(); // 使用 Pinia 的 userStore
const message = useMessage(); // 使用自定义的消息提示函数

// 定义延迟打开和关闭函数
const popupVisible = ref(false);
const closeTimeout = ref(null);

// computed 自动追踪 userStore.hasLogined
const hasLogined = computed(() => userStore.hasLogined);

const userName = computed(() => userStore.userName);
const userEmail = computed(() => userStore.userEmail);



function toUserCenter() {
  message.info('个人中心开发中...');
}
function toArticleManager() {
  message.info('文章管理开发中...');
}
function delayOpen() {
  clearCloseTimeout();
  popupVisible.value = true;
}
function delayClose() {
  closeTimeout.value = setTimeout(() => {
    popupVisible.value = false;
  }, 100);
}
// 清除弹窗延时关闭
function clearCloseTimeout() {
  if (closeTimeout.value) {
    clearTimeout(closeTimeout.value);
    closeTimeout.value = null;
  }
}

function toLogin() {
  console.log('点击登录按钮');
  router.push({ path: '/login' });
}

function toHome() {
  console.log('点击首页按钮');
  router.push({ path: '/' });
}
function toArticle() {
  console.log('点击墨海按钮');
  router.push({ path: '/article' });
}
function toWrite() {
  console.log('点击写作按钮');
  router.push({ path: '/write' });
}
function toOther() {
  console.log('点击其他按钮');
  router.push({ path: '/other' });
}
function toUser() {
  console.log('点击用户按钮');
  router.push({ path: '/user' });
}
function toRegister() {
  console.log('点击注册按钮');
  router.push({ path: '/register' });
}

// 退出登录函数
function quitLogin() {
  message.success('您已退出登录');
  userStore.clearUser(); // 调用 Pinia 的 clearUser 方法
  router.push({ path: '/' }); // 跳转到首页
}

</script>

<style>
.whole-layout {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.whole-header {
  font-family: 'LXGW WenKai Mono Screen';
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  /* background-image: radial-gradient(transparent 1px, #fff 1px);
  background-size: 4px 4px; */
  backdrop-filter: saturate(50%) blur(10px);
  /* 模糊效果 */
  box-shadow: 0px 2px 7px rgba(175, 175, 175, 0.7);

}

.logo {
  margin: 10px 5%;
  transition: transform 0.1s ease;
  /* 平滑过渡 */
  user-select: none;
  /* 禁止用户选择文本 */
  pointer-events: auto;
  /* 允许点击 */
}

.logo:hover {
  cursor: pointer;
  transform: scale(1.2);
  /* 放大效果 */
}

.logo img {
  width: 50px;
  height: 50px;
  margin-left: 10px;
}

.whole-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10%;
  position: relative;
}

.whole-nav .nav-bar {
  font-size: 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;
  margin-right: 50px;
  transition: transform 0.2s ease;
  /* 平滑过渡 */
  user-select: none;
  /* 禁止用户选择文本 */
  pointer-events: auto;
  /* 允许点击 */
}

.whole-nav .nav-bar div:hover {
  cursor: pointer;
  color: #bf967f;
  transform: scale(1.2);
  /* 放大效果 */
}

.whole-nav .user-center {
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.whole-nav .user-center:hover {
  transform: scale(1.2);
}

.user-popup {
  padding: 1rem 0.5rem;
  position: absolute;
  top: 100%;
  right: -14%;
  background: rgba( 252, 243, 232, 0.65 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 9px );
  -webkit-backdrop-filter: blur( 9px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.user-popup .login-reday {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.no-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 150px;
}

.whole-main {
  margin-top: 1rem;
  min-height: 80%;
  width: 80%;
}

.whole-footer {
  font-size: 14px;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
</style>