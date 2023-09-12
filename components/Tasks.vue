<template>
  <div v-if="!tasks.length">Not found tasks</div>
  <div v-else>
    <div
      v-for="task in tasks"
      :key="task.id"
      class="task"
      @click="setActiveTask(task.id)"
      :class="{ active: task.id === activeTaskId }"
    >
      <div class="task_name">
        {{
          nameOFContent(task.content).length
            ? nameOFContent(task.content)
            : "New task"
        }}
      </div>
      <div class="task_info">
        <strong>
          {{ task.date }}
        </strong>
        <span>
          {{
            nameOFContent(task.content).length
              ? contentWithoutHead(task.content)
              : task.content
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IndexedDB } from "@/util/IndexedDB.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tasks: [] as { id: number; date: string; content: string }[],
      activeTaskId: -1,
    };
  },
  async created() {
    try {
      const tasksFromDB = await IndexedDB.getTasks();
      this.tasks = tasksFromDB;
    } catch (error) {
      console.error("Ошибка при получении задач из базы данных:", error);
    }
  },
  methods: {
    setActiveTask(taskId: number) {
      this.activeTaskId = taskId;
      this.$store.commit("setActiveTask", taskId);
    },
    nameOFContent(content: string) {
      let res = content.match(/<h1>(.*?)<\/h1>/);
      return res ? res[1] : "";
    },
    contentWithoutHead(content: string) {
      return content.replace(/<h1>.*?<\/h1>/g, "");
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
};
</script>
<style scoped>
.task {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border-radius: 6px;
  position: relative;
}

.task:after {
  content: "";
  width: calc(100% - 12px);
  height: 1px;
  background-color: gray;
  position: absolute;
  bottom: 0;
  left: 6px;
}

.task.active,
.task:hover {
  background-color: gray;
  cursor: pointer;
}
.task:hover {
  opacity: 0.8;
}
.task_name {
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 10px;
}
.task_info strong {
  padding-right: 10px;
}
</style>
