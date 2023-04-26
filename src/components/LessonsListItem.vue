<script lang="ts">
  import type { Lesson } from "@/stores/lessonsStore";

  import { computed, defineComponent } from "vue";
  import { useLessonsStore } from "@/stores/lessonsStore";
  import { storeToRefs } from "pinia";

  export default defineComponent({
    name: "LessonsListItem",
    props: {
      lesson: {
        type: Object as () => Lesson,
        required: true,
      },
    },
    setup(props) {
      const lessonsStore = useLessonsStore();
      const { completedLessons, availableLessons } = storeToRefs(lessonsStore);

      const lessonStatus = computed(() => {
        if (completedLessons.value.includes(props.lesson.id)) {
          return "completed";
        }
        if (availableLessons.value.includes(props.lesson.id)) {
          return "available";
        } else {
          return "locked";
        }
      });

      return {
        lessonStatus,
      };
    },
  });
</script>

<template>
  <div :class="['flex h-24', lessonStatus === 'locked' ? 'cursor-not-allowed' : 'cursor-pointer']">
    <div class="w-1/4 bg-black flex justify-center items-center">
      <svg
        :class="[
          lessonStatus === 'completed'
            ? 'stroke-green-500'
            : lessonStatus === 'available'
            ? 'stroke-orange-500'
            : 'stroke-gray-500',
        ]"
        height="24"
        width="24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        ></path>
      </svg>
    </div>
    <div
      :class="[
        'w-3/4 flex justify-center items-center',
        lessonStatus === 'completed'
          ? 'bg-green-500'
          : lessonStatus === 'available'
          ? 'bg-orange-500'
          : 'bg-gray-500',
      ]"
    >
      <span class="text-2xl text-white p-4">{{ lesson.title }}</span>
    </div>
  </div>
</template>
