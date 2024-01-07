<script setup>
//bei klick auf den Text soll sich in ein Inputfeld öffnen indem der Text dargestellt und bearbeitbar wird
//bei klick auf den Text soll sich der Text bearbeiten lassen indem er zum Input feld wird

//der Wert des Listeneintrags muss in einer Funktion gespeichert werden um dann den <li> eintrag in ein input feld umzuwandeln mithilfe von event.target
import gsap from 'gsap';

const props = defineProps(['eintrag']);
const emit = defineEmits(['pressedX']);
let counter = ref(0);
let isClicked = ref(false);

function handleClick(event) {
  if (counter.value == 0) {
    counter.value = 1;
    gsap.to(event.target.previousElementSibling, {
      textDecorationLine: 'line-through',
    });
    return;
  } else if (counter.value == 1) {
    counter.value = 0;
    emit('pressedX', props.eintrag.id);
    return;
  }
}
function handleClickText() {
  isClicked.value = true;
}
function submitChange() {
  isClicked.value = false;
}
</script>
<template>
  <div class="eintrag">
    <li @click="handleClickText" v-if="!isClicked">{{ eintrag.text }}</li>
    <input v-if="isClicked" @keyup.enter="submitChange" type="text" v-model="eintrag.text" />
    <span @click="handleClick">╳</span>
  </div>
</template>
<style scoped>
.eintrag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
span {
  color: red;
  cursor: pointer;
}
</style>
