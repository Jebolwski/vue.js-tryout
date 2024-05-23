import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      tasks: [
        {
          id: 0,
          title: "Ödev Yap",
          description:
            "o, aliquet justo arcu vitae blandit facilisis orci. Quam pretium hac vel suscipitis sollicitutur molestie mattis habitasse posuere ",
          finished: false,
        },
        {
          id: 1,
          title: "Orta tempo koşu",
          description:
            "o, aliquet justo arcu vitae blandit facilisis orci. Quam pretium hac vel suscipitis sollicitutur molestie mattis habitasse posuere ",
          finished: true,
        },
        {
          id: 2,
          title: "Yüksek tempo koşu",
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
    deleteTask(state, task_id) {
      state.tasks = state.tasks.filter((task) => {
        return task_id != task.id;
      });
    },
    finishTask(state, task_id) {
      state.tasks[task_id].finished = !state.tasks[task_id].finished;
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
    deleteTask(context, task_id) {
      context.commit("deleteTask", task_id);
    },
    finishTask(context, task_id) {
      context.commit("finishTask", task_id);
    },
  },
});

export default store;
