<template>
  <aside>
    <header>
      <IconPlus class="plus" />
      <IconTrash />
    </header>
    <section>
      <Tasks />
    </section>
  </aside>
</template>

<script lang="ts">
import IconPlus from "~/components/ui/icons/IconPlus.vue";
import IconTrash from "~/components/ui/icons/IconTrash.vue";
import Tasks from "~/components/Tasks.vue";

export default {
  components: {
    IconPlus,
    IconTrash,
    Tasks,
  },
};
</script>

<style scoped>
header {
  margin-bottom: 20px;
}
aside {
  padding: 20px;
}
.plus {
  margin-right: 20px;
}
</style>
