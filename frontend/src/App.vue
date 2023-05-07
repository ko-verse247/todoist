<script setup>
import Header from './components/Header.vue'
import PageWrapper from './components/PageWrapper.vue'
import Date from './components/Date.vue'
import Todo from './components/Todo.vue'
</script>

<template>
  <v-app>
    <Header></Header>
    <main>
      <PageWrapper>
        <Date />
        <Todo />
      </PageWrapper>
    </main>
  </v-app>
</template>
