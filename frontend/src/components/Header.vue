<template>
  <v-app-bar scroll-behavior="elevate" density="compact" color="#db4c3f">
    <v-app-bar-nav-icon color="#fff"></v-app-bar-nav-icon>
    <v-btn icon>
      <v-icon color="#fff">mdi-home-outline</v-icon>
    </v-btn>
    <v-responsive class="mx-auto" max-width="300">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        color="#fff"
        base-color="#fff"
        bg-color="#eda59e"
        density="compact"
        variant="solo"
        placeholder="검색"
        hide-details
        single-line
        clearable
      >
      </v-text-field>
    </v-responsive>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon color="#fff">mdi-plus</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon color="#fff">mdi-trending-up</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon color="#fff">mdi-help-circle-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon color="#fff">mdi-bell-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-avatar color="surface-variant"></v-avatar>
    </v-btn>
  </v-app-bar>
  <br>
  <br>
</template>
