<script lang="ts">
  import { useLessonsStore } from "@/stores/lessonsStore";
  import { storeToRefs } from "pinia";

  export default {
    name: "LessonVideo",
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
  <iframe
    :src="currenLessonData.video_url"
    allowfullscreen
    class="w-full h-96"
  ></iframe>
</template>
