<script setup>
import { ref, onMounted, computed } from 'vue'
import TaskListItem from './TaskListItem.vue';

const tasks = ref('');
const taskInfo = ref('');
const addTaskDisplay = ref('hidden');
const addButtonDisplay = ref('block');
const placeholderText = ref('예. 매일 독서 p3 @목표#공부');

const addDisable = computed(() => {
    return taskInfo.value.length == 0;
})

const count = ref(5);

function taskDelete(taskId) {
    tasks.value = tasks.value.filter(key => key.taskId != taskId);
}

function addTask() {
    //create new task object
    var task = {
        taskId: count.value++,
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
        TaskListItem(v-for="task in tasks" :task="task" @onDelete="taskDelete(task.taskId)")
    .addtask
        button(type="button" @click="displayAddTask()" :style="{display: addButtonDisplay}") 
            img(src="@/assets/redaddicon.svg")
        .addtaskinfo(:style="{visibility: addTaskDisplay}")
            input(v-model="taskInfo" type="text" :placeholder="placeholderText" maxlength="500")
            .addtaskbuttons
                button(class="addButtonEnabled" type="button" @click="addTask()" :disabled="addDisable" ) 작업 추가
                button(type="button" @click="cancelAddTask()") 취소
    
</template>

<style>
ul {
    max-width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
}

:disabled {
    background-color: var(--todoist-soft-orange) !important;
    cursor: not-allowed;
}

.addButtonEnabled {
    background-color: var(--todoist-orange);
}

.tasklist {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
}
</style>