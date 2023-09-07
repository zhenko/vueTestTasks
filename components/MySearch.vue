<template>
  <div class="search-container">
    <IconSearch class="icon-search" />
    <input class="search-input" type="text" placeholder="Search" />
  </div>
</template>
<script lang="ts">
import IconSearch from "@/components/ui/icons/IconFind.vue";

export default {
  components: {
    IconSearch,
  },
};
</script>

<style scoped>
.search-input {
  height: 26px;
  border-radius: 6px;
  border: 1px solid gray;
  padding-left: 40px;
}

.icon-search {
  position: relative;
  left: 30px;
  top: 7px;
}
</style>
