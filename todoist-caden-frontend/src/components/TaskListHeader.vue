<script setup>
import { ref, onMounted } from 'vue'
const today = new Date();
const month = ref('');
const date = ref('');
const day = ref('');

const KRDay = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토'
}

onMounted(() => {
    month.value = today.getMonth() + 1;
    date.value = today.getDate();
    day.value = KRDay[today.getDay()];
})
</script>

<template lang="pug">
.taskheader
    h1 오늘
    small {{ day }} {{ month }}월 {{ date }}일
</template>

<style>

.taskheader {
    position: sticky;
    top: 0;
    z-index: 2;
    flex-shrink: 0;
    padding-left: 55px;
    padding-right: 55px;
    padding-top: 36px;
}

</style>