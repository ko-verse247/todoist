<script setup>
defineProps({})
</script>

<template lang="pug">
.placeholder 
  p.primary 할 일이 없습니다
  p.secondary 남은 하루도 즐겁게 보내세요.
</template>

<style lang="less">
.placeholder {
  transform: translateY(calc(100vh * 0.3));
  text-align: center;
  line-height: 1.3;
}

.primary {
  color: @text-primary;
  font-size: 1.2rem;
}
.secondary {
  color: @text-secondary;
  font-size: 1.1rem;
}
</style>
