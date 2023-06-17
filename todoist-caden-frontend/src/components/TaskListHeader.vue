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
    .headercontent
        h1 오늘
        small {{ day }} {{ month }}월 {{ date }}일
</template>

<style scoped lang="less">
.taskheader {
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 2;
    flex-shrink: 0;
    padding-top: 36px;
    padding-left: 55px;
    padding-right: 55px;
}

.headercontent {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 8px;
    margin: 0 auto;
    max-width: 800px;
}

h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
}

small {
    color: grey;
    margin-left: 6px;
    font-size: 12px;
    font-weight: 400;
    margin-top: auto;
}
</style>