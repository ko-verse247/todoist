import { createStore } from 'vuex'

function updateLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export const store = createStore({
  state () {
    return {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    }
  },
  getters: {
    tasks: (state) => {
      return state.tasks;
    },
  },
  mutations: {
    addTask (state, payload) {
      state.tasks.push(payload);
      updateLocalStorage(state.tasks);
    },
    updateTask: (state, payload) => {
      const index = state.tasks.findIndex((task) => task.id === payload.id);
      state.tasks[index].completed = payload.completed;
      state.tasks[index].title = payload.title;
      updateLocalStorage(state.tasks);
    },
    deleteTask: (state, payload) => {
      const index = state.tasks.findIndex((task) => task.id === payload.id);
      if (index > -1) state.tasks.splice(index, 1);
      updateLocalStorage(state.tasks);
    },
  }
})
