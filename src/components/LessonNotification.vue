<script lang="ts">
  import { useLessonsStore } from "@/stores/lessonsStore";
  import { storeToRefs } from "pinia";

  export default {
    name: "AppNotification",
    setup() {
      const lessonsStore = useLessonsStore();
      const { currentLessonId, showNotification } = storeToRefs(lessonsStore);

      const handleClick = () => {
        const id = lessonsStore.getNextLessonId(currentLessonId.value);
        lessonsStore.setCurrentLesson(id);
      };

      return {
        showNotification,
        handleClick,
      };
    },
  };
</script>

<template>
  <div
    v-if="showNotification"
    class="bg-white rounded-lg shadow-md p-4 w-80 absolute right-2 bottom-2"
  >
    <p class="text-gray-800">You finished this lesson! Continue to next lesson?</p>
    <button
      @click="handleClick"
      class="mt-2 py-2 px-4 bg-orange-500 w-full text-white rounded-md hover:bg-orange-600 transition duration-300"
    >
      Next Lesson
    </button>
  </div>
</template>
