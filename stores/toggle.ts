import { defineStore } from 'pinia';

export const useNewTodoStore = defineStore('addNew', () => {
  const isNew = ref(false);
  return { isNew };
});
