<script setup>
import { useNewTodoStore } from '~/stores/toggle';

const newTodo = useNewTodoStore();
const newInput = ref();

let newEntry = ref('');
let list = ref([
  { id: 0, text: 'Eintrag 1' },
  { id: 1, text: 'Eintrag 2' },
  { id: 2, text: 'Eintrag 3' },
]);

onClickOutside(newInput, () => {
  newTodo.isNew = false;
  newEntry.value = '';
});
function submitToList() {
  let currentId = list.value.length + 1;
  list.value.push({ id: currentId, text: newEntry.value });
  newEntry.value = '';
}
function deleteEntry(currentID) {
  list.value = list.value.filter((el) => {
    return el.id !== currentID;
  });
}
</script>
<template>
  <ul>
    <Eintrag v-for="eintrag in list" :key="eintrag.id" :eintrag="eintrag" @pressed-x="deleteEntry" />
  </ul>
  <input
    autofocus
    ref="newInput"
    v-if="newTodo.isNew"
    @keyup.enter="submitToList"
    v-model="newEntry"
    type="text"
    placeholder="Neuer Eintrag"
  />
</template>
<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
  margin: 2rem 0;
}
</style>
