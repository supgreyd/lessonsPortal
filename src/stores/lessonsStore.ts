import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  video_time: number;
  video_url: string;
}

export const useLessonsStore = defineStore("lessons", () => {
  const lessons = ref<Lesson[]>([]);
  const availableLessons = ref<String[]>([]);
  const completedLessons = ref<String[]>([]);
  const currentLessonId = ref("0lzg9NnWt30");
  const showNotification = ref(false);
  let loading = ref(false);

  const currenLessonData = computed(() => {
    return lessons.value.find(lesson => lesson.id === currentLessonId.value) || lessons.value[0];
  });

  const isLoading = computed(() => {
    return loading.value;
  });

  const fetchLessons = async () => {
    loading.value = true;
    const response = await fetch("@fakeData/lessons.json");
    lessons.value = await response.json();
    setAvailableLessons(currentLessonId.value);
    loading.value = false;
  };

  function setCurrentLesson(id: string) {
    showNotification.value = false;
    if (availableLessons.value.includes(id)) {
      currentLessonId.value = id;
    }
  }

  function setCompletedLessons(id: string) {
    showNotification.value = true;
    completedLessons.value.push(id);
  }

  function setAvailableLessons(id: string) {
    availableLessons.value.push(id);
  }

  function getNextLessonId(id: string) {
    const currentIndex = lessons.value.findIndex(obj => obj.id === id);
    if (currentIndex >= lessons.value.length - 1) {
      return lessons.value[currentIndex].id;
    }
    return lessons.value[currentIndex + 1].id;
  }

  fetchLessons();

  return {
    lessons,
    currenLessonData,
    currentLessonId,
    isLoading,
    completedLessons,
    availableLessons,
    showNotification,
    setCurrentLesson,
    setCompletedLessons,
    setAvailableLessons,
    getNextLessonId,
  };
});
