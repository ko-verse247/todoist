<script>
import Item from './Item.vue';
import { mapGetters } from 'vuex';

export default {
  name: "Items",
  components: { Item },
  data() {
    return {
      snackbar: false,
    }
  },
  computed: {
    ...mapGetters(['items']),
  },
  methods: {
    updateSnackbar(value) {
        this.snackbar = value;
    }
  }
}
</script>

<template>
  <v-container>
    <Item
      v-for="item in items"
      :key="item.id"
      :initialItem="item"
      :snackbar="snackbar"
      @update-snackbar="updateSnackbar"
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
