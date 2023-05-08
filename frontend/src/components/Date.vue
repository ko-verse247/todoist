<script>
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

export default {
  name: 'Date',
  data() {
    return {
      date: dayjs().locale('ko').format('ddd MMMM D일'),
    };
  },
}
</script>

<template>
  <span class="text-h5 font-weight-bold">오늘 </span>
  <span class="font-weight-thin">{{date}}</span>
</template>
