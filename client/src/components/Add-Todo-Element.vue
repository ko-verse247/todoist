<script setup>
import addRedIcon from "../assets/icons/add-red-icon.svg";
import { ref, defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
  todos: { type: Array, required: true },
  fetchTodos: { type: Function, required: true }
});

const inputValue = ref('');
const addTodo = ref(false);

const submitNewTodo = () => {
  axios.post('https://tdl-be.onrender.com/api/todos', { task: inputValue.value }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(response => {
      props.fetchTodos();
      inputValue.value = "";
    })
    .catch(error => {
      console.log(error);
    });
}
</script>

<template lang="pug">
.add-todo-container
  Transition(name="fade")
    .add-container(v-if="!addTodo")
      button.add-btn(type="button" @click="addTodo = true")
        addRedIcon.icon(alt="") 
        span 작업 추가
  Transition(name="fade")
    .input-container(v-if="addTodo")
      input.todo-input(type="text" placeholder="예. 매일 독서 p3 @목표#공부" v-model="inputValue")
      button.add-todo(type="button" :disabled="inputValue === ''" @click="submitNewTodo") 작업 추가
      button.cancel-todo(@click="addTodo = false") 취소
</template>

<style lang="less">
.add-todo-container {
  text-align: left;
  align-self: flex-start;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 50px;
}

.add-btn {
  border: none;
  background: none;
  color: @text-secondary;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding-left: 0;
  font-weight: 400;
}

.add-btn .icon {
  margin-left: 0;
}

.todo-input {
  border: @input-border;
  border-radius: @input-border-radius;
  width: 100%;
  height: 45px;
  line-height: 1.3;
  padding: 0 10px;
  color: @text-primary;
  margin: 10px 0;
}

.todo-input::placeholder {
  opacity: 1;
  color: @text-placeholder;
}

.add-todo:disabled {
  background: @btn-bg-disabled;
}

.cancel-todo {
  background: @btn-bg-cancel;
  border: @btn-border-cancel;
  color: @btn-text-dark;
}
</style>