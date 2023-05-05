<script setup>
import Nav from './components/Nav-Bar.vue'
import TodoList from './components/Todo-List.vue'
import { ref, onMounted, computed} from 'vue'
import axios from 'axios';

const todos = ref([]);
const completedCount = computed(() => todos.value.filter(todo => todo.completed).length)
const incompleteCount = computed(() => todos.value.filter(todo => !todo.completed).length)

const fetchTodos = async () => {
  try {
    const response = await axios.get('https://tdl-be.onrender.com/api/todos');
    todos.value = response.data;
  } catch (error) {
    console.log(error);
  };
};

onMounted(() => {
  fetchTodos();
})
</script>

<template lang="pug">
Nav(:completedCount="completedCount" :incompleteCount="incompleteCount")
TodoList(:todos="todos" :fetchTodos="fetchTodos")
</template>
