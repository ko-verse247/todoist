<script setup>
import { defineProps, ref, onMounted } from 'vue'

defineProps({
    task: Object
})

const emit = defineEmits(['onDelete'])

const onHover = ref(false);
const icon = ref('/src/assets/defaultcheckboxicon.svg')

function changeIcon(e, task) {
    if(e.type === 'mouseenter') {
        if(!task.completed) {
            icon.value = '/src/assets/activecheckboxicon.svg';
        }
    } else {
        if(!task.completed) {
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
li(:key="task.taskId")
    .taskBody
        button(type="button" @mouseenter="changeIcon($event, task)" @mouseleave="changeIcon($event, task)" @click="taskUpdate(task)")
            img(v-if="!task.completed" :src="icon")
            img(v-else src="@/assets/activecheckboxicon.svg")
        .taskInfo {{ task.taskName }}
        button(type="button" @click="taskDelete(task.taskId)")
            img(src="@/assets/deleteicon.svg")
</template>

<style>

.taskBody {
    display: flex;
    align-items: stretch;
    position: relative;
    padding: 0;
}

.taskInfo {
    flex: 1;
    padding: 8px 0;
    margin-right: 30px;
}
</style>