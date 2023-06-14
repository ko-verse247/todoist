<script setup>
import { ref, onMounted } from 'vue'

const tasks = ref('');
const taskInfo = ref('');
const addTaskDisplay = ref('hidden');
const addDisable = ref(true);
const addButtonDisplay = ref('block');
const placeholderText = ref('예. 매일 독서 p3 @목표#공부');

function taskUpdate(taskId) {
    //everytime a task is updated (marked complete or deleted)
    //update database
    console.log(taskId)
}

function taskDelete(taskId) {

}

function addTask() {
    //create new task object
    var task = {
        taskId: 5,
        taskName: taskInfo.value,
        completed: false
    }
    tasks.value.push(task);
    //update MongoDB with new task also

    
    addTaskDisplay.value = 'hidden';
    addButtonDisplay.value = 'inline';
    taskInfo.value = '';
}

function displayAddTask() {
    addTaskDisplay.value = 'visible';
    addButtonDisplay.value = 'none';
}

function cancelAddTask() {
    addTaskDisplay.value = 'hidden';
    addButtonDisplay.value = 'inline';
}

onMounted(() => {
    //fetches task data from MongoDB
    tasks.value = [
        {
            taskId: 1,
            taskName: "Task 1",
            completed: false
        },
        {
            taskId: 2,
            taskName: "Task 2",
            completed: false
        },
        {
            taskId: 3,
            taskName: "Task 3",
            completed: true
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
                button(type="button" @click="taskDelete(task.taskId)")
                    img(src="@/assets/deleteicon.svg")

    .addtask
        button(type="button" @click="displayAddTask()" :style="{display: addButtonDisplay}") 
            img(src="@/assets/redaddicon.svg")
        .addtaskinfo(:style="{visibility: addTaskDisplay}")
            input(v-model="taskInfo" type="text" :placeholder="placeholderText")
            .addtaskbuttons
                button(type="button" @click="addTask()") 직업 추가
                button(type="button" @click="cancelAddTask()") 취소


    p {{ taskInfo }}
</template>

<style>
li {
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