<script setup>
import { useNewTodoStore } from '~/stores/toggle';

const newTodo = useNewTodoStore();
const newInput = ref();

let newEntry = ref('');
let newDate = ref(new Date());
let list = ref([]);

onClickOutside(newInput, () => {
  newTodo.isNew = false;
  newEntry.value = '';
  newDate.value = new Date();
});
function submitToList() {
  if (newEntry.value != '') {
    const year = newDate.value.getFullYear();
    const month = newDate.value.getMonth() + 1;
    const date = newDate.value.getDate();
    const deadline = date + '.' + month + '.' + year;

    let currentId = list.value.length + 1;

    list.value.push({ id: currentId, text: newEntry.value, date: deadline });

    newEntry.value = '';
    newDate.value = new Date();
  } else {
    document.getElementById('input1').focus();
  }
}
function deleteEntry(currentID) {
  list.value = list.value.filter((el) => {
    return el.id !== currentID;
  });
}
</script>
<template>
  <main>
    <ul>
      <Eintrag v-for="eintrag in list" :key="eintrag.id" :eintrag="eintrag" @pressed-x="deleteEntry" />
    </ul>
    <div class="newTodoContainer" v-if="newTodo.isNew" ref="newInput">
      <input
        id="input1"
        autofocus
        v-model="newEntry"
        @keyup.enter="submitToList"
        type="text"
        placeholder="Neuer Eintrag"
      />
      <client-only>
        <VDatePicker class="datePicker" title-position="right" v-model="newDate" view="weekly">
          <template #footer> <button @click="submitToList">hinzufügen</button> </template>
        </VDatePicker>
      </client-only>
    </div>
  </main>
</template>
<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
  margin: 2rem 0;
}
.newTodoContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.newTodoContainer input {
  width: 15rem;
}
.datePicker {
  color: white;
}
.datePicker button {
  background-color: rgb(20, 20, 20);
  padding: 1rem 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
}
</style>
