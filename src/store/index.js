import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      tasks: [
        {
          title: "Ödev Yap",
          description:
            "o, aliquet justo arcu vitae blandit facilisis orci. Quam pretium hac vel suscipitis sollicitutur molestie mattis habitasse posuere ",
          finished: false,
        },
        {
          title: "Orta tempo koşu",
          description:
            "o, aliquet justo arcu vitae blandit facilisis orci. Quam pretium hac vel suscipitis sollicitutur molestie mattis habitasse posuere ",
          finished: true,
        },
      ],
    };
  },
  mutations: {
    addTask(state, taskObject) {
      state.tasks.push(taskObject);
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
  actions: {
    addTask(context, task) {
      context.commit("addTask", task);
    },
  },
});

export default store;
