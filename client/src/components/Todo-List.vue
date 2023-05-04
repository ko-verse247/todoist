<script setup>
import deleteIcon from "../assets/icons/delete-icon.svg";
import checkEmptyIcon from "../assets/icons/check-empty-icon.svg";
import checkDoneIcon from "../assets/icons/check-done-icon.svg";
import addRedIcon from "../assets/icons/add-red-icon.svg";
import DateHeader from './Date-Header.vue'
import Placeholder from './Placeholder-Element.vue';
import Popup from './Popup-Element.vue';
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

const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`https://tdl-be.onrender.com/api/todos/${id}`);
    props.fetchTodos();
  } catch (error) {
    console.log(error);
  };
};

const markTodo = async (id, bool) => {
  try {
    const response = await axios.patch(`https://tdl-be.onrender.com/api/todos/${id}`, { completed: bool });
    props.fetchTodos();
  } catch (error) {
    console.log(error);
  }
}
</script>

<template lang="pug">
DateHeader()
.todolist-container
  ul.todolist
    li(v-for="todo in todos" :key="todo._id" class="todo-item")
      button.mark-btn(type="button" @click="markTodo(todo._id, !todo.completed)")
        template(v-if="!todo.completed")
          checkEmptyIcon.icon(alt="")
          span.visually-hidden 표시
        template(v-else-if="todo.completed")
          checkDoneIcon.icon(alt="")
          span.visually-hidden 완료
      span.todo-text(:class="[todo.completed ? 'todo-text-completed' : '']") {{ todo.task }}
      button.delete-btn(type="button" @click="deleteTodo(todo._id)")
        deleteIcon.icon(alt="")
        span.visually-hidden 삭제
.list-container
  transition(name="fade")
    .add-container(v-if="!addTodo")
      button.add-btn(type="button" @click="addTodo = true")
        addRedIcon.icon(alt="") 
        span 작업 추가
  transition(name="slide-up")
    .input-container(v-if="addTodo")
      input.todo-input(type="text" placeholder="예. 매일 독서 p3 @목표#공부" v-model="inputValue")
      button.add-todo(type="button" :disabled="inputValue === ''" @click="submitNewTodo") 작업 추가
      button.cancel-todo(@click="addTodo = false") 취소
transition(name="fade")
  Placeholder(v-if="todos.length < 1")
Popup
</template>

<style lang="less">
@import "@/assets/styles/list-container.less";
@import "@/assets/styles/tdl-animation.less";
.todolist-container {
  text-align: left;
  align-self: flex-start;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
}

.todolist {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  border-bottom: @line;
  padding: 15px 0px;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.todo-text {
  margin-right: auto;
}

.mark-btn {
  background: none;
  margin:0;
  padding: 0;
}

.delete-btn {
  background: none;
  padding: 0;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}

.todo-item:hover > .delete-btn {
  opacity: 1;
}

.todo-text-completed {
  color: @text-faded;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>