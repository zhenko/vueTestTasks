<template>
  <section>
    <header>
      <IconCreate />
      <MySearch />
    </header>
    <div style="border: 1px solid red">Active Task ID: {{ activeTaskId }}</div>

    <div v-html="newTask"></div>
    <textarea
      name="textarea"
      v-model="newTask"
      @blur="saveInIndexedDB"
      rows="10"
    />
  </section>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { IndexedDB } from "@/util/IndexedDB.js";
import MySearch from "@/components/MySearch.vue";
import IconCreate from "@/components/ui/icons/IconCreate.vue";

export default {
  components: {
    MySearch,
    IconCreate,
  },
  data() {
    return {
      newTask: "",
      tasks: [] as { id: number; date: string; content: string }[],
    };
  },
  methods: {
    async saveInIndexedDB() {
      console.log("saveInIndexedDB");
      let Task = {
        content: this.newTask,
        date: Date.now(),
        id: Date.now(),
      };
      IndexedDB.addTask(Task);
    },
    async getTasksFromIndexedDB() {
      try {
        const tasksFromDB = await IndexedDB.getTasks();
        this.tasks = tasksFromDB;
      } catch (error) {
        console.error("Ошибка при получении задач из базы данных:", error);
      }
    },
  },
  computed: {
    ...mapGetters(["activeTaskId"]),
    // getActiveTask(activeTaskId) {
    //   console.log("tasks", this.tasks);
    //   return this.tasks.find((task) => task.id === this.activeTaskId);
    // },
  },
};
</script>

<style scoped>
section {
  padding: 20px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  height: 26px;
  border-radius: 6px;
  border: 1px solid gray;
  padding-left: 40px;
}

textarea {
  width: 100%;
  border-radius: 6px;
}
</style>
