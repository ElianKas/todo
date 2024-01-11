<template>
  <header class="header">
    <h1>To-Do-App</h1>
    <p @click="toggleNew">+</p>
  </header>
</template>
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem 5rem;
  border-bottom: 2px solid white;
  width: 100%;
  gap: 5rem;
}
p {
  font-size: 3rem;
  cursor: pointer;
}
</style>
<script setup>
import { useNewTodoStore } from '~/stores/toggle';
const store = useNewTodoStore();

function toggleNew() {
  if (store.isNew == false) {
    store.isNew = true;
  }
}
</script>
