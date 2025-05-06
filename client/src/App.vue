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
            <div>首页</div>
            <div>墨海</div>
            <div>寻文</div>
            <div>执笔</div>
            <div>妙趣</div>
          </div>
          <el-icon class="user-center"><User /></el-icon>
        </div>
      </el-header>
      <el-main class="whole-main">
        <div>主要内容</div>
      </el-main>
      <el-footer class="whole-footer">
        <div>站长：吉吉 --- 联系邮箱1006501951@qq.com | 字体：LXGWWenKaiMonoScreen --- 来源：中文网字计划</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
</script>

<style>
.whole-layout {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.whole-header{
  font-family: 'LXGW WenKai Mono Screen';
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  /* background-image: radial-gradient(transparent 1px, #fff 1px);
  background-size: 4px 4px; */
  backdrop-filter: saturate(50%) blur(10px); /* 模糊效果 */
  box-shadow: 0px 2px 7px rgba(175, 175, 175, 0.7);
  
}

.logo{
  margin: 10px 5%;
  transition: transform 0.1s ease; /* 平滑过渡 */
}

.logo:hover{
  cursor: pointer;
  transform: scale(1.2); /* 放大效果 */
}

.logo img{
  width: 50px;
  height: 50px;
  margin-left: 10px;
}

.whole-nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5%;
}

.whole-nav .nav-bar{ 
  font-size: 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;
  margin-right: 50px;
  transition: transform 0.2s ease; /* 平滑过渡 */
  user-select: none;  /* 禁止用户选择文本 */
  pointer-events: auto; /* 允许点击 */
}

.whole-nav .nav-bar div:hover{
  cursor: pointer;
  transform: scale(1.2); /* 放大效果 */
}

.whole-nav .user-center{
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.whole-nav .user-center:hover{
  transform: scale(1.2);
}

.whole-main{
  margin-top: 1rem;
  min-height: 80%;
  height: 2500px;
  width: 80%;
  background-color: rgba(74, 202, 42, 0.507);
}

.whole-footer{
  font-size: 14px;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>