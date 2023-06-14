<script setup>
import NavBar from './components/NavBar.vue';
import TaskListHeader from './components/TaskListHeader.vue'
import TaskList from './components/TaskList.vue'

</script>

<template lang="pug">
.apppage
  NavBar
  .appinfo
    TaskListHeader
    TaskList
</template>

<style scoped>
.appinfo{
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y:auto;
}

.apppage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.tasks {
  max-width: 800px;
}
</style>
