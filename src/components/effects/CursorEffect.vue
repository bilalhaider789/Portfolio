<script setup lang="ts">
import { ref, onMounted } from 'vue';

const cursor = ref();
let timeout = ref();
const cursorX = ref(-50);
const cursorY = ref(-50);

document.addEventListener("mouseout", () => {
  hideCursor()
});

const hideCursor = () => {
  cursor.value.style.display = "none";
}

const showCursor = () => {
  cursor.value.style.display = "block";
}

const mouseMoveEffect = () => {
  document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    const dx = x - cursorX.value;
    const dy = y - cursorY.value;
    const speed = 0.1;

    cursorX.value += dx * speed;
    cursorY.value += dy * speed;

    cursor.value.style.top = cursorY.value + "px";
    cursor.value.style.left = cursorX.value + "px";

    clearTimeout(timeout.value);
    showCursor();
    timeout.value = setTimeout(hideCursor, 1000);
  });
}

onMounted(() => {
  cursor.value = document.querySelector(".cursor");
  mouseMoveEffect()
});

</script>

<template>
  <div>
    <div class="cursor"></div>
  </div>
</template>

<style scoped>
.cursor {
  z-index: 9999;
  position: fixed;
  background: #2696e8;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  box-shadow: 0 0 20px #2696e8 0 0 60px #2696e8 0 0 100px #2696e8;
  animation: colors 5s infinite;
  transform: translate(-100%, -100%);
  display: none;
}

@keyframes colors {
  0% {
    filter: hue-rotate(0deg);
  }

  0% {
    filter: hue-rotate(360deg);
  }
}

.cursor:before {
  content: '';
  position: absolute;
  background: #2696e8;
  width: 50px;
  height: 50px;
  opacity: 0.2;
  transform: translate(-30%, -30%);
  border-radius: 50%;
}
</style>
