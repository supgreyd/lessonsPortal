<script lang="ts">
  export default {
    name: "LessonVideo",
    setup() {
      const url = "https://www.youtube.com/embed/0lzg9NnWt30";
      return {
        url,
      };
    },
  };
</script>

<template>
  <iframe
    width="560"
    height="315"
    :src="url"
    allowfullscreen
    class="w-full"
  ></iframe>
</template>
