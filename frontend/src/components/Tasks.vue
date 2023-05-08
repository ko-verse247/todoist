<script>
import Task from './Task.vue';

export default {
  name: 'Tasks',
  components: { Task },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      snackbar: false,
      localTasks: [...this.tasks]
    }
  },
  methods: {
    getTasks() {
      this.$emit('get-tasks');
    },
    updateSnackbar(value) {
      this.snackbar = value;
    }
  }
}
</script>

<template>
  <v-container>
    <Task
      v-for="task in localTasks"
      :key="task._id"
      :initialTask="task"
      :snackbar="snackbar"
      @update-snackbar="updateSnackbar"
      @get-tasks="getTasks"
    />
    <v-snackbar v-model="snackbar" timeout="2000" location="left bottom">
      1 작업을 완료했습니다
      <template v-slot:actions>
        <v-btn v-on:click="snackbar=false" icon>
          <v-icon color="#fff">mdi-window-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
