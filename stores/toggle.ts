import { defineStore } from 'pinia';

export const useNewTodoStore = defineStore('addNew', () => {
  const isNew = ref(false);
  return { isNew };
});

export const useNewInputStore = defineStore('input', () => {
  const newInput = ref(null);
  return { newInput };
});
