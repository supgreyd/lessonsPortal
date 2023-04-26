<script lang="ts">
  import { useLessonsStore } from "@/stores/lessonsStore";
  import { storeToRefs } from "pinia";
  import {onMounted, watch, ref} from "vue";

  export default {
    name: "LessonVideo",
    setup() {
      const lessonsStore = useLessonsStore();
      const { currenLessonData } = storeToRefs(lessonsStore);

      const player = ref<any>({});

      function onYouTubeIframeAPIReady() {
        player.value = new YT.Player("ytVideo", {
          height: '360',
          width: '100%',
          playerVars: { 'autoplay': 0, 'controls': 0 },
          videoId: currenLessonData.value.id,
          events: {
            'onStateChange': onPlayerStateChange,
          }
        });

        function onPlayerStateChange(event: any) {
          if (event.data == YT.PlayerState.ENDED) {
            lessonsStore.setCompletedLessons(currenLessonData.value.id)
            const nextLessonId = lessonsStore.getNextLessonId(currenLessonData.value.id)
            lessonsStore.setAvailableLessons(nextLessonId);
          }
        }
      }

      onMounted(() => {
        onYouTubeIframeAPIReady();
      })

      watch(currenLessonData, (oldVal, newVal)=> {
        if (newVal !== oldVal) {
          player.value.loadVideoByUrl(currenLessonData.value.video_url)
        }
      })

      return {
        currenLessonData,
      };
    },
  };
</script>

<template>
  <div id="ytVideo"></div>
</template>
