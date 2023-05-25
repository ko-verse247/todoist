<script setup>
import 'dayjs/locale/ko'
import dayjs from 'dayjs'
let date = dayjs().locale('ko').format('ddd MMMM D일')
</script>

<template lang="pug">
.date-container
  h2.date-title 오늘
  span.date {{ date }}
</template>

<style lang="less">
.date-container {
  display: flex;
  align-items: center;
  text-align: left;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
}

.date-title {
  margin: 5px 0;
}

.date {
  color: @text-secondary;
  margin-left: 10px;
}
</style>
