<script>
import axios from '../api/api';

export default {
  name: 'Task',
  props: {
    initialTask: {
      type: Object,
      required: true
    },
    snackbar: Boolean,
  },
  data() {
    return {
      checkboxIcon: 'mdi-circle-outline',
      task: { ...this.initialTask },
      showDelete: false,
    };
  },
  methods: {
    deleteTask(id) {
      axios.delete(`/api/todo/${id}/delete`)
        .then((res) => {
          this.$emit('get-tasks');
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    changeCheck() {
      this.task.completed = !this.task.completed;
      this.$emit('update-snackbar', this.task.completed);
      axios.put(`/api/todo/${this.task._id}/update`, {
        title: this.task.title,
        completed: this.task.completed,
      })
        .then((res) => {
          this.$emit('get-tasks');
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
  computed: {
    labelClass() {
      return this.task.completed ? "mr-2 checked" : "mr-2";
    },
    checkboxIconClass() {
      return this.task.completed ? 'mdi-check-circle-outline' : 'mdi-circle-outline';
    }
  }
}
</script>

<template>
  <v-row
    justify="end"
    v-on:mouseover="showDelete=true"
    v-on:mouseleave="showDelete=false"
  >
    <v-col cols="10">
      <v-checkbox
        :label="task.title"
        v-bind:checked="task.completed"
        v-on:change="changeCheck"
        :false-icon="checkboxIconClass"
        :true-icon="checkboxIconClass"
        :class="labelClass"
        hide-details
      />
    </v-col>
    <v-col cols="2" class="text-right">
      <v-btn
        v-show="showDelete"
        prepend-icon="mdi-trash-can-outline"
        variant="plain"
        v-on:click="deleteTask(task._id)"
        class="mt-2 ps-0 pe-0"
      >
        <template v-slot:prepend>
          <v-icon color="#CB5647"></v-icon>
        </template>
      </v-btn>
    </v-col>
  </v-row>
  <v-divider />
</template>

<style>
.checked {
  color: #DDD;
}
</style>
