<script setup>
import deleteIcon from "../assets/icons/delete-icon.svg";
import checkEmptyIcon from "../assets/icons/check-empty-icon.svg";
import checkDoneIcon from "../assets/icons/check-done-icon.svg";
import Placeholder from './Placeholder-Element.vue';
import AddTodo from "./Add-Todo-Element.vue"
import DateHeader from './Date-Header.vue'
import Popup from './Popup-Element.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { FadeLoader } from "vue3-spinner";

const props = defineProps({
  todos: { type: Array, required: true },
  fetchTodos: { type: Function, required: true }
});

const todoMarked = ref({id: '', bool: false})
const loading = ref(true)

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
    todoMarked.value = {id: id, bool: bool}
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
    }, 2000);
})
</script>

<template lang="pug">
DateHeader()
.loading(v-if="loading")
  FadeLoader(:loading="true" :color="'#CB5647'")
.todolist-container(v-else)
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
  AddTodo(:todos="todos" :fetchTodos="fetchTodos")
  Transition(name="fade")
    Placeholder(v-if="todos.length < 1")
Popup(:todos="todos" :todoMarked="todoMarked")
</template>

<style lang="less">
.todolist-container {
  text-align: left;
  align-self: flex-start;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  opacity: 1;
}

.loading {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
}

.v-spinner {
  transform: translate(calc(800px*0.5), 150px);
  max-width: 500px;
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
  margin: 0;
  padding: 0;
}

.delete-btn {
  background: none;
  padding: 0;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}

.todo-item:hover>.delete-btn {
  opacity: 1;
}

.todo-text-completed {
  color: @text-faded;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>