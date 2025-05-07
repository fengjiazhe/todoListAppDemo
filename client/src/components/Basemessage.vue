<template>
    <teleport to="body">
        <transition name="fade">
            <div v-if="visible" class="base-message" :class="[typeClass]">
                <span>{{ message }}</span>
            </div>
        </transition>
    </teleport>

</template>


<script setup lang="ts">
name:'Basemessage';
import { ref, watch } from 'vue';

const props = defineProps({
    message: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'info',
        validator: value =>
            ['info', 'success', 'warning', 'error'].includes(value)
    },
    duration: {
        type: Number,
        default: 2000, 
    }
})

const visible = ref(true); // 控制消息框的显示和隐藏
const timer = ref(null); // 定时器
 // 消息框的类型类名
const typeClass = computed(() => {
    return props.type ? `is-${props.type}` : '';
})

timer.value = setTimeout(() => {
    visible.value = false; // 隐藏消息框
}, props.duration); // 设置持续时间

</script>

<style scoped>

.base-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #edf2fc;
  color: #1a202c;
  padding: 12px 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 9999;
  transition: opacity 0.2s, transform 0.2s;
}

.base-message.is-success {
  background-color: #f0f9eb;
  color: #67c23a;
}
.base-message.is-warning {
  background-color: #fdf6ec;
  color: #e6a23c;
}
.base-message.is-error {
  background-color: #fef0f0;
  color: #f56c6c;
}
.base-message.is-info {
  background-color: #edf2fc;
  color: #339af0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}

</style>
