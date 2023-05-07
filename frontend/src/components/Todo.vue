<script>
import Tasks from './Tasks.vue';
import AddTask from './AddTask.vue';
import axios from '../api/api';

export default {
  name: 'Todo',
  components: { Tasks, AddTask },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      axios.get('/api/todos')
        .then((res) => {
          this.tasks = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  }
}
</script>

<template>
  <Tasks :key="tasks" :tasks="tasks" @get-tasks="getTasks" />
  <AddTask @get-tasks="getTasks" />
</template>
