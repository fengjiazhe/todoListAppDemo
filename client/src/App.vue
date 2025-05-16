<template>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';
import { useMessage } from '@/hooks/useMessage';

const router = useRouter();
const userStore = useUserStore(); // 使用 Pinia 的 userStore
const message = useMessage(); // 使用自定义的消息提示函数


</script>

<style>
</style>