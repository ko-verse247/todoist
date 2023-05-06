<script setup>
import Header from './components/Header.vue'
import PageWrapper from './components/PageWrapper.vue'
import Date from './components/Date.vue'
import Items from './components/Items.vue'
import AddTask from './components/AddTask.vue'
</script>

<template>
  <v-app>
    <Header></Header>
    <main>
      <PageWrapper>
        <Date />
        <Items />
        <AddTask />
      </PageWrapper>
    </main>
  </v-app>
</template>
