<script setup>
import CancelIcon from "../assets/icons/cancel-icon.svg"

</script>

<template lang="pug">
.popup 
  p.popup-text 1작업을 완료했습니다
  button.cancel-btn
    span.cancel-text 실행 취소
    CancelIcon.icon(alt="")

</template>

<style lang="less">
.popup {
  position: absolute;
  bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border: @popup-border;
  border-radius: @popup-border-radius;
  background: @popup-bg;
  box-shadow: @popup-shadow;
  width: 300px;
  height: 50px;
  font-size: 1rem;
}

.popup-text {
  margin: 0 10px;
}

.cancel-btn {
  background: none;
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 1rem;
}

.cancel-text {
  color: @popup-cancel-text
}

</style>