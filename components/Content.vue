<template>
  <section>
    <header>
      <IconCreate />
      <MySearch />
    </header>
    <textarea name="textarea" rows="10" />
  </section>
</template>

<script lang="ts">
import MySearch from "@/components/MySearch.vue";
import IconCreate from "~/components/ui/icons/IconCreate.vue";

export default {
  components: {
    MySearch,
    IconCreate,
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
}
</style>
