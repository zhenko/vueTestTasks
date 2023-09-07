<template>
  <main class="main">
    <SideBar class="aside" />
    <Content class="content" />
  </main>
</template>

<script lang="ts">
import SideBar from "@/components/SideBar.vue";
import Content from "@/components/Content.vue";

export default {
  components: {
    Content,
    SideBar,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  height: 100vh;
}

.aside {
  flex: 0 0 30%;
  border-right: 2px solid gray;
}

.content {
  flex: 1;
}
</style>
