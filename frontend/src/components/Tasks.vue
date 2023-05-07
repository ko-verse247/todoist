<script>
import Task from './Task.vue';

export default {
  name: "Tasks",
  components: { Task },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      snackbar: false,
      localItems: [...this.items]
    }
  },
  methods: {
    getItems() {
      this.$emit('get-items');
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
      v-for="item in localItems"
      :key="item._id"
      :initialItem="item"
      :snackbar="snackbar"
      @update-snackbar="updateSnackbar"
      @get-items="getItems"
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
