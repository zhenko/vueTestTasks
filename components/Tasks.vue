<template>
  <div v-for="task in tasks" :key="task.id" class="task">
    <div class="task_name">
      {{ task.name }}
    </div>
    <div class="task_info">
      <strong>
        {{ task.date }}
      </strong>
      <span>
        {{ task.content }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Head 1",
          date: "12:12",
          content: "Nay",
        },
        {
          id: 2,
          name: "Head 2",
          date: "12:12",
          content: "ssadcds fcesfw",
        },
        {
          id: 3,
          name: "Head 3",
          date: "12:12",
          content: "dddd",
        },
      ],
    };
  },
};
</script>
<style scoped>
.task {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  border-bottom: 1px solid gray;
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
