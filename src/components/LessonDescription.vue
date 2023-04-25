<script lang="ts">
  import { useLessonsStore } from "@/stores/lessonsStore";
  import { storeToRefs } from "pinia";

  export default {
    name: "LessonDescription",
    setup() {
      const lessonsStore = useLessonsStore();
      const { currenLessonData } = storeToRefs(lessonsStore);
      return {
        currenLessonData,
      };
    },
  };
</script>

<template>
  <article>
    <h2 class="text-xl font-bold mb-2">{{ currenLessonData.title }}</h2>
    <p class="text-orange-500 my-2">{{ currenLessonData.subtitle }}</p>
    <p class="mt-2">{{ currenLessonData.description }}</p>
  </article>
</template>
