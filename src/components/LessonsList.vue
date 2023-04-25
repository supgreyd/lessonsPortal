<script lang="ts">
  import LessonsListItem from "@/components/LessonsListItem.vue";
  export default {
    name: "LessonsList",
    components: {
      LessonsListItem,
    },
  };
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li
      v-for="i in 5"
      :key="i"
    >
      <LessonsListItem />
    </li>
  </ul>
</template>
