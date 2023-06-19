<template>
  <div id="app">
    <!-- NavBar -->
    <nav class="navbar navbar-expand-sm navbar-dark navbar-custom">
      <!-- Brand -->
      <a class="navbar-brand" href="#">
        <i class="fa-solid fa-house-chimney align-middle"></i>
      </a>
      <form class="form-inline my-2 my-md-0">
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback" style="height: 37px;"></span>
          <input type="text" class="form-control search" placeholder="검색" style="height: 35px;">
        </div>
      </form>
      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Navbar links -->
      <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-solid fa-plus pr-3 icon-white"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-solid fa-arrow-trend-up pr-3 icon-white"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span class="pr-3 icon-white">0/5</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-regular fa-circle-question pr-3 icon-white"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-regular fa-bell pr-3 icon-white"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-solid fa-circle fa-2xl" style="color: #ffffff;"></i></a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
    <div class="task">
        <!-- Form Title -->
        <div class="title">
          <h1>오늘
            <a class="date-style"><span id="month">{{new Date().getMonth() + 1}}</span>월</a>
            <a class="date-style"><span id="day">{{new Date().getDate()}}</span>일</a>
          </h1>
        </div>
        <!-- Form Content -->
        <div class="form">
          <input type="text" placeholder="작업 추가" v-model="Task.task" @keyup.enter="addTask"/>
          <button @click="addTask"><i class="fas fa-plus"></i></button>
        </div>
        <!-- Task Lists -->
        <div class="taskItems">
          <ul>
            <task-item v-bind:task="task" v-for="(task, index) in tasks" :key="task._id" @remove="removeTask(index, task._id)" @complete="completeTask(task)"></task-item>
          </ul>
        </div>
        <!-- Buttons -->
        <div class="clearBtns">
          <!-- Clear Completed Tasks -->
          <button @click="clearCompleted">완료된 작업 제거</button>
          <!-- Clear All Tasks -->
          <button @click="clearAll">모든 작업 제거</button>
        </div>
        <!-- Pending Tasks -->
        <div class="pendingTasks">
          <span>보류중인 작업: {{ incomplete }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TaskItem from './TaskItem.vue'

export default {
  name: 'Task',
  props: ['tasks'],
  components: {
    TaskItem
  },
  data () {
    return {
      Task: {
        _id: '',
        task: '',
        completed: ''
      }
    }
  },
  computed: {
    incomplete () {
      return this.tasks.filter(this.inProgress).length
    }
  },
  methods: {
    addTask () {
      let newTask = {
        task: this.Task.task
      }
      axios.post('http://localhost:5000/save', newTask)
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
      if (newTask) {
        this.tasks.push({
          task: this.Task.task,
          completed: false
        })
        this.Task.task = ''
      }
    },
    inProgress (task) {
      return !this.isCompleted(task)
    },
    isCompleted (task) {
      return task.completed
    },
    clearCompleted () {
      this.tasks = this.tasks.filter(this.inProgress)
    },
    clearAll () {
      this.tasks = []
    },
    removeTask (index, key) {
      axios.delete('http://localhost:5000/delete/' + key)
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
      this.tasks.splice(index, 1)
    },
    completeTask (task) {
      let taskId = task._id
      axios.put('http://localhost:5000/complete/' + taskId,
        {
          completed: 'true'
        })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
      task.completed = !task.completed
    }
  }
}
</script>
