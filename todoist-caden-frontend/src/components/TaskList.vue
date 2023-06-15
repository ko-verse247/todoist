<script setup>
import { ref, onMounted, computed } from 'vue'
import TaskListItem from './TaskListItem.vue';

const tasks = ref('');
const taskInfo = ref('');
const addTaskDisplay = ref('hidden');
const addButtonDisplay = ref('block');
const emptyDisplay = ref(true)
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
    emptyDisplay.value = false;
}

function cancelAddTask() {
    addTaskDisplay.value = 'hidden';
    addButtonDisplay.value = 'inline';
    emptyDisplay.value = true;
    taskInfo.value = '';
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
.tasklistcontent
    .tasklist
        ul
            TaskListItem(v-for="task in tasks" :task="task" @onDelete="taskDelete(task.taskId)")
        .addTask
            button(type="button" @click="displayAddTask()" :style="{display: addButtonDisplay}") 
                img(src="@/assets/redaddicon.svg")
                span 작업 추가
            .addtaskinfo(:style="{visibility: addTaskDisplay}")
                input(v-model="taskInfo" type="text" :placeholder="placeholderText" maxlength="500")
                .addtaskbuttons
                    button(class="addButtonEnabled" type="button" @click="addTask()" :disabled="addDisable" ) 작업 추가
                    button(type="button" @click="cancelAddTask()") 취소
    .emptymessage(v-if="!tasks.length && emptyDisplay")
        h1 할 일이 없습니다
        p 남은 하루도 즐겁게 보내세요.
</template>

<style scoped>
input {
    width: 100%;
    border-radius: 5px;
    height: 45px;
    outline: none;
}

ul {
    width: 100%;
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
    color: white;
}

.tasklist {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
}

.tasklistcontent {
    padding-left: 55px;
    padding-right: 55px;
}
.addTask {
    max-height: 76px;
    height: 100%;
}

.emptymessage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 300px;
}
</style>