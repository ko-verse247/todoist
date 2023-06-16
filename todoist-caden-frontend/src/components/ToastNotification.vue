<script setup>
const emit = defineEmits(['onDismiss']);

function dismissToast() {
    emit('onDismiss', true)
}
</script>

<template lang="pug">
.toast
    p 1작업을 완료했습니다
    button(type="button" @click="dismissToast()")
        p 실행 취소
        img(src="@/assets/cancelicon.svg")
</template>

<style scoped lang="less">
.toast {
    position: relative;
    bottom: 30px;
    margin: 0 auto;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    width: 300px;
    height: 40px;
    border: 1px solid lightgrey;
    border-radius: 4px;
    align-items: center;
    animation: toastPopUp 0.4s ease-in-out forwards;
}

@keyframes toastPopUp {
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

p {
    padding-left: 5px;
}

button {
    display: flex;
    color: var(--todoist-orange);
    font-weight: bold;
    font-size: 15px;
    padding-right: 5px;
}
</style>