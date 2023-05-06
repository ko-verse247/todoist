import { createStore } from 'vuex'

function updateLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
}
  
export const store = createStore({
  state () {
    return {
      items: JSON.parse(localStorage.getItem("items")) || [],
    }
  },
  getters: {
    items: (state) => {
      return state.items;
    },
  },
  mutations: {
    addItem (state, payload) {
      state.items.push(payload);
      updateLocalStorage(state.items);
    },
    updateItem: (state, payload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      state.items[index].completed = payload.completed;
      state.items[index].title = payload.title;
      updateLocalStorage(state.items);
    },
    deleteItem: (state, payload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      if (index > -1) state.items.splice(index, 1);
      updateLocalStorage(state.items);
    },
  }
})
