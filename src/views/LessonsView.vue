<script lang="ts">
  import AppLayout from "@/components/AppLayout.vue";
  import LessonsList from "@/components/LessonsList.vue";
  import LessonDescription from "@/components/LessonDescription.vue";
  import LessonVideo from "@/components/LessonVideo.vue";

  import { useLessonsStore } from "@/stores/lessonsStore";
  import { storeToRefs } from "pinia";

  export default {
    name: "LessonsView",
    components: {
      AppLayout,
      LessonsList,
      LessonDescription,
      LessonVideo,
    },
    setup() {
      const lessonsStore = useLessonsStore();
      const { isLoading } = storeToRefs(lessonsStore);
      return {
        isLoading,
      };
    },
  };
</script>

<template>
  <AppLayout>
    <Suspense>
      <div
        v-if="!isLoading"
        class="flex flex-col items-center h-screen px-4 md:px-8"
      >
        <h1 class="text-4xl font-bold mt-8 mb-4 text-center">Lessons Portal</h1>
        <div class="flex flex-col md:flex-row w-full md:mt-8">
          <div class="w-full md:w-2/3 md:mr-4">
            <div class="mb-4">
              <LessonVideo />
            </div>
            <LessonDescription />
          </div>
          <div class="w-full md:w-1/3">
            <LessonsList />
          </div>
        </div>
      </div>
      <template #fallback> Loading... </template>
    </Suspense>
  </AppLayout>
</template>
