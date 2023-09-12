import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      activeTask: null,
    };
  },
  mutations: {
    setActiveTask(state, task) {
      state.activeTask = task;
    },
  },
  getters: {
    activeTaskId: (state) => state.activeTask,
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
