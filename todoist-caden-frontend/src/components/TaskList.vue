<script setup>
import { ref, onMounted } from 'vue'

const tasks = ref('');
const taskInfo = ref('');
const addTaskDisplay = ref('hidden');
const addDisable = ref(true);
const addButtonDisplay = ref('block')

function taskUpdate(taskId) {
    //everytime a task is updated (marked complete or deleted)
    //update database
    console.log(taskId)
}

function displayAddTask() {
    addTaskDisplay.value = 'visible';
    addButtonDisplay.value = 'none';
}

function hideAddTask() {
    addTaskDisplay.value = 'hidden';
    addButtonDisplay.value = 'inline';
}

onMounted(() => {
    //fetches task data from MongoDB
    tasks.value = [
    {
        taskId: 1,
        taskName: "Task 1",
        completed: false,
        date: new Date()
    },
    {
        taskId: 2,
        taskName: "Task 2",
        completed: false,
        date: new Date()
    },
    {
        taskId: 3,
        taskName: "Task 3",
        completed: true,
        date: new Date()
    }
];
})
</script>

<template lang="pug">
.tasklist
    ul(v-if="tasks.length")
        li(v-for="task of tasks" :key="taskId")
            .taskBody
                button(type="button" @click="taskUpdate(task.taskId)")
                    img(src="@/assets/defaultcheckboxicon.svg")
                .taskInfo {{ task.taskName }}
                button
                    img(src="@/assets/deleteicon.svg")

    .addtask
        button(type="button" @click="displayAddTask()" :style="{display: addButtonDisplay}") 
            img(src="@/assets/redaddicon.svg")
        .addtaskinfo(:style="{visibility: addTaskDisplay}")
            input(v-model="taskInfo" type="text")
            .addtaskbuttons
                button 직업 추가
                button(type="button" @click="hideAddTask()") 취소


    p {{ taskInfo }}
</template>

<style>
li{
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #f0f0f0;
}

.tasklist {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
}

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