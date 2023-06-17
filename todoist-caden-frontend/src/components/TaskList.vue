<script setup>
import { ref, onMounted, computed } from 'vue'
import TaskListItem from './TaskListItem.vue';
import { getTasks, deleteTask, postTask } from '../TodoistService.js'

const emit = defineEmits(['onShowToast']);
const tasks = ref('');
const taskInfo = ref('');
const addTaskDisplay = ref('hidden');
const addButtonDisplay = ref('flex');
const emptyDisplay = ref(true)
const placeholderText = ref('예. 매일 독서 p3 @목표#공부');

const addDisable = computed(() => {
    return taskInfo.value.length == 0;
})

/**
 * Makes request to delete task with given id.
 * 
 * @param {String} _id 
 */
function taskDelete(_id) {
    deleteTask(_id).then(() => {
        tasks.value = tasks.value.filter(key => { return key._id.localeCompare(_id) != 0 });
    })
}

/**
 * Makes request to add task with given taskName.
 */
function addTask() {
    var task = {
        taskName: taskInfo.value
    }
    postTask(task).then((res) => {
        tasks.value.push(res);
    })

    addTaskDisplay.value = 'hidden';
    addButtonDisplay.value = 'flex';
    taskInfo.value = '';
}

/**
 * Updates display to show add task
 * input and buttons, hide the empty message
 * and add task menu button.
 */
function displayAddTask() {
    addTaskDisplay.value = 'visible';
    addButtonDisplay.value = 'none';
    emptyDisplay.value = false;
}

/**
 * Updates display to hide the add task
 * input and buttons, show the add task
 * menu button, and clear the input.
 */
function cancelAddTask() {
    addTaskDisplay.value = 'hidden';
    addButtonDisplay.value = 'flex';
    emptyDisplay.value = true;
    taskInfo.value = '';
}

/**
 * Emitter to emit show toast to let
 * the parent component know to show
 * the toast.
 */
function showToast() {
    emit('onShowToast')
}

onMounted(() => {
    //Will fetch all tasks when this component is mounted
    getTasks().then((reqTasks) => {
        tasks.value = reqTasks
    })
})
</script>

<template lang="pug">
.tasklistcontent
    .tasklist
        ul
            TaskListItem(v-for="task in tasks" :task="task" @onDelete="taskDelete(task._id)" @onShowToast="showToast()")
        .addTask
            button(class="addTaskDisplay" type="button" @click="displayAddTask()" :style="{display: addButtonDisplay}") 
                img(src="@/assets/redaddicon.svg")
                text(class="addText") 작업 추가
            .addtaskinfo(:style="{visibility: addTaskDisplay}")
                input(v-model="taskInfo" type="text" :placeholder="placeholderText" maxlength="500")
                .addtaskbuttons
                    button(class="addButtonEnabled" type="button" @click="addTask()" :disabled="addDisable" ) 작업 추가
                    button(class="cancelButton" type="button" @click="cancelAddTask()") 취소
    .emptymessage(v-if="!tasks.length && emptyDisplay")
        h1 할 일이 없습니다
        p 남은 하루도 즐겁게 보내세요.
</template>

<style scoped lang="less">
h1 {
    line-height: 21px;
    font-size: 17px;
    padding-bottom: 15px;
}

p {
    color: #777777;
    font-size: 13px;
    line-height: 18px;
}

input {
    border: 1px solid #DDDDDD;
    width: 100%;
    border-radius: 6px;
    height: 45px;
    outline: none;
    padding: 5px;
}

.addTaskDisplay {
    padding-top: 8px;
    color: grey;
    font-size: 14px;
    align-items: center;
}

.addTaskDisplay:hover {
    color: var(--todoist-orange);
}

.addText {
    padding-left: 11px;
}

.cancelButton {
    min-width: 50px;
    border: 1px solid lightgrey;
}

.cancelButton:hover {
    background-color: lightgrey;
}

ul {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
}

:disabled {
    background-color: #EABBB5 !important;
    cursor: not-allowed;
}

.addButtonEnabled {
    background-color: var(--todoist-orange);
    color: white;
    min-width: 80px;
}

.addButtonEnabled,
.cancelButton {
    height: 30px;
    margin: 5px;
    border-radius: 3px;
    font-size: 14px;
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