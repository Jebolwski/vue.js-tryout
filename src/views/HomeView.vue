<template>
  <main>
    <p class="text-red-500">ronaldo {{ count }}</p>
    <p @click="increment" class="cursor-pointer">arttır</p>
    <p @click="decrement" class="cursor-pointer">azalt</p>
    <form @submit.prevent="handleSubmit">
      <div class="flex items-center gap-2">
        <div>
          <input
            type="text"
            placeholder="enter title"
            v-model="title"
            name="title"
            class="border border-black focus:outline-none"
          />
          <br />
          <input
            type="text"
            placeholder="enter description"
            name="description"
            v-model="description"
            class="border border-black focus:outline-none"
          />
        </div>
        <button class="bg-red-600 rounded-md p-1 text-white">add task</button>
      </div>
    </form>
    <div v-if="store" v-for="task in $store.getters.getTasks">
      <div class="bg-purple-200 font-semibold text-black my-2">
        <p>
          {{ task.title }}
        </p>
        <p class="mt-1">
          {{ task.description }}
        </p>
        <p class="mt-1">
          {{ task.finished }}
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
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
        console.log(title.value, description.value);
        store.dispatch("addTask", {
          title: "Ödev Yap",
          description: "o, aliquet",
          finished: false,
        });
      } else {
        console.log(title.value, description.value);
        console.log("hata!!");
      }
      console.log(title.value, description.value);
    };

    return {
      count,
      increment,
      store,
      decrement,
      handleSubmit,
      addTask,
    };
  },
};
</script>
