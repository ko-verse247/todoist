<script>
import Tasks from './Tasks.vue';
import AddTask from './AddTask.vue';
import axios from '../api/api';

export default {
  name: 'Todo',
  components: { Tasks, AddTask },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      axios.get('/api/todos')
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  }
}
</script>

<template>
  <Tasks :key="items" :items="items" @get-items="getItems" />
  <AddTask @get-items="getItems" />
</template>
