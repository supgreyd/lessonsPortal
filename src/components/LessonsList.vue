<script lang="ts">
  import LessonsListItem from "@/components/LessonsListItem.vue";
  import { useLessonsStore } from "@/stores/lessonsStore";
  import { storeToRefs } from "pinia";
  export default {
    name: "LessonsList",
    components: {
      LessonsListItem,
    },
    setup() {
      const lessonsStore = useLessonsStore();
      const { lessons } = storeToRefs(lessonsStore);

      const handleClick = (id: string) => {
        lessonsStore.setCurrentLesson(id);
      };

      return {
        lessons,
        handleClick,
      };
    },
  };
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li
      v-for="lesson in lessons"
      :key="lesson.id"
      @click="handleClick(lesson.id)"
    >
      <LessonsListItem :lesson="lesson" />
    </li>
  </ul>
</template>
