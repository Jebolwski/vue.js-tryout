<template>
  <main>
    <div class="flex flex-col justify-center items-center">
      <form @submit.prevent="addTask">
        <div class="flex items-center gap-2">
          <div class="p-2">
            <p>Title</p>
            <input
              v-model="title"
              ref="title_input"
              class="border border-black focus:outline-none rounded-md title_class"
            />
            <br />
            <p class="mt-3">Description</p>
            <textarea
              v-model="description"
              rows="4"
              ref="description_input"
              class="border w-full border-black focus:outline-none rounded-md description_class"
            ></textarea>
          </div>
          <button class="bg-red-600 rounded-md p-1 text-white shadow-md">
            Add Task
          </button>
        </div>
      </form>
      <div
        v-if="store"
        v-for="task in $store.getters.getTasks"
        class="p-2 lg:w-2/3 w-5/6"
      >
        <div
          class="bg-gray-200 font-semibold text-black my-2 relative p-2 rounded-lg w-full"
        >
          <p>
            {{ task.id }}
          </p>
          <p>
            {{ task.title }}
          </p>
          <p class="mt-1">
            {{ task.description }}
          </p>
          <p class="mt-1" @click="finishTask(task.id)">
            {{ task.finished }}
          </p>
          <p
            class="absolute right-4 top-0 text-xl text-red-500"
            @click="deleteTask(task.id)"
          >
            x
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const count = ref(0);
const title = ref("");
const description = ref("");
const store = useStore();

const addTask = () => {
  if (
    title != null &&
    title != "" &&
    description != null &&
    description != ""
  ) {
    store.dispatch("addTask", {
      id: store.getters.getTasks.length,
      title: title,
      description: description,
      finished: false,
    });
  } else {
    console.log(title.value, description.value);
    console.log("hata!!");
  }
};

const deleteTask = (task_id) => {
  store.dispatch("deleteTask", task_id);
};

const finishTask = (task_id) => {
  store.dispatch("finishTask", task_id);
};
</script>
