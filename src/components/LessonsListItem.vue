<script lang="ts">
  import type { Lesson } from "@/stores/lessonsStore";
  import type { PropType } from "vue";

  export default {
    name: "LessonsListItem",
    props: {
      lesson: {
        type: Object as PropType<Lesson>,
        required: true,
      },
    },
  };
</script>

<template>
  <div class="flex h-24">
    <div class="w-1/4 bg-gray-600 flex justify-center items-center">
      <svg
        class="stroke-white"
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
    <div class="w-3/4 bg-orange-500 flex justify-center items-center">
      <span class="text-2xl text-white">{{ lesson.title }}</span>
    </div>
  </div>
</template>
