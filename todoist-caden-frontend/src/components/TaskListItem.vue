<script setup>
import { defineProps, ref, onMounted } from 'vue'

defineProps({
    task: Object
})

const emit = defineEmits(['onDelete']);
const deleteVisible = ref('hidden');
const icon = ref('/src/assets/defaultcheckboxicon.svg');

function onHover(e) {
    if (e.type === 'mouseenter') {
        deleteVisible.value = 'visible';
    } else {
        deleteVisible.value = 'hidden';
    }
}

function changeIcon(e, task) {
    if (e.type === 'mouseenter') {
        if (!task.completed) {
            icon.value = '/src/assets/activecheckboxicon.svg';
        }
    } else {
        if (!task.completed) {
            icon.value = '/src/assets/defaultcheckboxicon.svg';
        }
    }
}

function taskUpdate(task) {
    task.completed = true;
    //update task with id in mongodb
}

function taskDelete(taskId) {
    emit('onDelete', taskId)
}

</script>

<template lang="pug">
li(:key="task.taskId" @mouseenter="onHover($event)" @mouseleave="onHover($event)")
    .taskBody
        button(type="button" @mouseenter="changeIcon($event, task)" @mouseleave="changeIcon($event, task)" @click="taskUpdate(task)")
            img(v-if="!task.completed" :src="icon")
            img(v-else src="@/assets/activecheckboxicon.svg")
        .taskInfo {{ task.taskName }}
        button(type="button" @click="taskDelete(task.taskId)" :style="{'visibility' : deleteVisible}")
            img(src="@/assets/deleteicon.svg")
</template>

<style scoped>
li {
    border-bottom: 1px solid #f0f0f0;
}

.taskBody {
    display: flex;
    align-items: stretch;
    position: relative;
    padding: 0;
}

.taskInfo {
    word-wrap: break-word;
    word-break: break-word;
    font-size: 14px;
    line-height: 21px;
    flex: 1;
    padding: 8px 0;
    margin-right: 30px;
}
</style>