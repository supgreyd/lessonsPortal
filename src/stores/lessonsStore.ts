import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  video_time: number;
  video_url: string;
}

export const useLessonsStore = defineStore("lessons", () => {
  const lessons = ref<Lesson[]>([]);
  const currentLessonId = ref(1);
  let loading = ref(false);

  const currenLessonData = computed(() => {
    return lessons.value.find(lesson => lesson.id === currentLessonId.value);
  });

  const isLoading = computed(() => {
    return loading.value;
  });

  const fetchLessons = async () => {
    loading.value = true;
    const response = await fetch("@fakeData/lessons.json");
    lessons.value = await response.json();
    loading.value = false;
  };

  function setCurrentLesson(id: number) {
    currentLessonId.value = id;
  }

  fetchLessons();

  return { lessons, currenLessonData, isLoading, setCurrentLesson };
});
