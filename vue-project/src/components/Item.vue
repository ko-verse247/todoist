<script>
import axios from '../api/api';

export default {
  name: 'Items',
  props: {
    initialItem: {
      type: Object,
      required: true
    },
    snackbar: Boolean,
  },
  data() {
    return {
      checkboxIcon: 'mdi-circle-outline',
      item: { ...this.initialItem },
      showDelete: false,
    };
  },
  methods: {
    deleteItem(id) {
      axios.delete(`/api/todo/${id}/delete`)
        .then((res) => {
          this.$emit('get-items');
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    changeCheck() {
      this.item.completed = !this.item.completed;
      this.$emit('update-snackbar', this.item.completed);
      axios.put(`/api/todo/${this.item._id}/update`, {
        title: this.item.title,
        completed: this.item.completed,
      })
        .then((res) => {
          this.$emit('get-items');
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
  computed: {
    labelClass() {
      return this.item.completed ? "mr-2 checked" : "mr-2";
    },
    checkboxIconClass() {
      return this.item.completed ? 'mdi-check-circle-outline' : 'mdi-circle-outline';
    }
  }
}
</script>

<template>
  <v-row
    name="item-row"
    justify="end"
    v-on:mouseover="showDelete=true"
    v-on:mouseleave="showDelete=false"
  >
    <v-col cols="10">
      <v-checkbox
        :label="item.title"
        v-bind:checked="item.completed"
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
        v-on:click="deleteItem(item._id)"
        class="mt-2 ps-0 pe-0"
      >
        <template v-slot:prepend>
          <v-icon color="#db4c3f"></v-icon>
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
