<script>
export default {
  computed: {
    isMobile() {
      return window.innerWidth <= 600;
    }
  }
}
</script>

<template>
  <div v-if="isMobile">
    <v-col>
      <v-sheet class="pa-2 ma-2">
        <slot></slot>
      </v-sheet>
    </v-col>
  </div>
  <div v-else>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2"></v-sheet>
      </v-col>
      <v-col cols="6">
        <v-sheet class="pa-2 ma-2">
          <slot></slot>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"></v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
