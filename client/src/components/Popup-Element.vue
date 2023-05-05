<script setup>
import CancelIcon from "../assets/icons/cancel-icon.svg"
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  todos: { type: Array, required: true },
  todoMarked: { type: Object, required: true }
});

const marked = ref(props.todoMarked);

const closePopup = () => {
  marked.value = false;
}

watch(() => props.todoMarked, (value) => {
  marked.value = value;
});

onMounted(() => {
  marked.value = false;
});
</script>

<template lang="pug">
.popup(:class="[marked ? 'active' : 'hidden']")
  p.popup-text 1작업을 완료했습니다
  button.cancel-btn(@click="closePopup")
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

.hidden {
  opacity: 0;
}

.active {
  opacity: 1;
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