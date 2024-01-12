<script setup>
import gsap from 'gsap';

const props = defineProps(['eintrag']);
const emit = defineEmits(['pressedX']);
const target = ref(null);

let counter = ref(0);
let isClicked = ref(false);

onClickOutside(target, submitChange);
function handleClick(event) {
  if (counter.value == 0) {
    counter.value = 1;
    gsap.to(event.target.previousElementSibling, {
      opacity: 0.3,
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
  counter.value = 0;
}
</script>
<template>
  <div class="eintrag" ref="target">
    <li @click="handleClickText" v-if="!isClicked">
      {{ eintrag.text }}
      <br />
      bis zum <b>{{ eintrag.date }}</b>
    </li>
    <input v-if="isClicked" @keyup.enter="submitChange" type="text" v-model="eintrag.text" />
    <span v-if="!isClicked" @click="handleClick">╳</span>
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
