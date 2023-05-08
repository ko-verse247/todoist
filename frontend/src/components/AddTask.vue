<script>
import axios from '../api/api';

export default {
  name: 'AddTask',
  data() {
    return {
      isTaskBeingAdded: false,
      title: '',
      form: true,
      required: true,
    };
  },
  methods: {
    handleSubmit() {
      if (this.title.trim() === '') {
        return;
      }
      axios.post('/api/todo/create', {
        completed: false,
        title: this.title
      })
        .then((response) => {
          this.title = '';
          this.isTaskBeingAdded = false;
          this.$emit('get-tasks');
        })
        .catch((error) => {
          console.error(error);
        });
    },
    startAddingTask() {
      this.isTaskBeingAdded = true;
    },
    handleCancel() {
      this.title = '',
      this.isTaskBeingAdded = false;
    }
  },
}
</script>

<template>
  <div>
    <div v-if="!isTaskBeingAdded">
      <v-btn prepend-icon="mdi-plus" variant="plain" v-on:click="startAddingTask">
        <template v-slot:prepend>
          <v-icon color="#CB5647"></v-icon>
        </template>
        <div class="text-left">작업 추가</div>
      </v-btn>
    </div>
    <div v-else>
      <v-form
        v-model="form"
        @submit.prevent="handleSubmit"
      >
        <v-text-field
          v-model="title"
          v-on:keyup.enter="handleSubmit"
          type="text"
          placeholder="예. 매일 독서 p3 @목표#공부"
          variant="outlined"
          density="compact"
          class="rounded-lg"
          :rules="[required]"
        >
        </v-text-field>
        <v-btn
          :disabled="!form"
          type="submit"
          color="#CB5647"
          style="color: #fff"
          class="mr-4"
        >
          작업 추가
        </v-btn>
        <v-btn variant="outlined" v-on:click="handleCancel">
          취소
        </v-btn>
      </v-form>
    </div>
  </div>
</template>
