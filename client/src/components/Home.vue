<template>
    <div>
        这是主页
    </div>
    <div class="currentTime">
        {{ currentTime }}
    </div>

</template>


<script setup>
name:'Home';

import { ref, onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
    getCurrentTime();
    setInterval(getCurrentTime, 1000); // 每秒更新一次时间
})

// 获取当前时间
const currentTime = ref('');
function getCurrentTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    currentTime.value = `${hours}:${minutes}:${seconds}`;
}

</script>


<style scoped>


</style>
