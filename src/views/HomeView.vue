<template>
  <main>
    <form @submit.prevent="addTask">
      <div class="flex items-center gap-2">
        <div class="p-2">
          <p>title</p>
          <input
            placeholder="enter title"
            v-model="title"
            class="border border-black focus:outline-none"
          />
          <br />
          <p class="mt-3">description</p>
          <input
            placeholder="enter description"
            v-model="description"
            class="border border-black focus:outline-none"
          />
        </div>
        <button class="bg-red-600 rounded-md p-1 text-white">add task</button>
      </div>
    </form>
    <div v-if="store" v-for="task in $store.getters.getTasks" class="p-2">
      <div
        class="bg-gray-200 font-semibold text-black my-2 relative p-2 rounded-lg"
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
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const count = ref(0);
const title = ref("");
const description = ref("");
const store = useStore();
function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}
const handleSubmit = () => {
  console.log(title.value, description.value);
};

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
