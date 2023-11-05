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
    <!-- <div v-if="state" class="btn px-4 w-fit border-2 border-red-500 rounded-xl m-10">
              <button class=""> I am here</button>
            </div>
            <button @click="state=!state">click me</button>
            <div class="relative">
              <p class="bg-red-400 w-52 top-0 absolute hover:z-10  transition-all duration-500"> here buddy</p>
              <p class="bg-blue-400 w-52 absolute ml-5 top-0 z-0 transition-all duration-500"> here buddy</p>
            </div> -->
    <section class="custom bg-red-100 min-h-[100vh] flex flex-col justify-center items-center">
      <div class="relative w-96 flex justify-center bg-gray-300">
        <p class="text-[100px] font-semibold spring-text">A</p>
        <div class="para absolute w-full flex justify-between">
          <p class=" rotate-reverse w-14 bg-red-500 h-14 flex items-center justify-center rounded-full"> Hello</p>
          <p class=" rotate-reverse  w-14 bg-red-500 h-14 flex items-center justify-center rounded-full"> World</p>
        </div>
        <div class="absolute w-full rotate60">
          <div class=" flex justify-between para">
            <p class=" rotate-reverse w-14 bg-red-500 h-14 flex items-center justify-center rounded-full"> Hello</p>
            <p class=" rotate-reverse  w-14 bg-red-500 h-14 flex items-center justify-center rounded-full"> World</p>
          </div>
        </div>
        <div class="absolute w-full rotate120">
          <div class=" flex justify-between para">
            <p class=" rotate-reverse w-14 bg-green-500 h-14 flex items-center justify-center rounded-full"> Hello</p>
            <p class=" rotate-reverse  w-14 bg-green-500 h-14 flex items-center justify-center rounded-full"> World</p>
          </div>
        </div>
      </div>
    </section>
    <section class="custom bg-red-200 min-h-[100vh] flex flex-col justify-center items-center">
      <h1>I am heading</h1>
      <p class="max-w-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores minus vel nisi
        iure qui adipisci velit, dolorum in? Quisquam quod nihil voluptatem. Eius nihil voluptas, ut commodi voluptatum
        consequuntur!</p>
    </section>
    <section class="custom bg-red-300 min-h-[100vh] flex flex-col justify-center items-center">
      <h1 class="slide-bck-center bg-green-300">I am heading</h1>
      <p class="max-w-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores minus vel nisi
        iure qui adipisci velit, dolorum in? Quisquam quod nihil voluptatem. Eius nihil voluptas, ut commodi voluptatum
        consequuntur!</p>
    </section>
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



.spring-text {
  transition: transform 0.5s;
}

.spring-text:hover {
  transform: scaleX(1.75) scaleY(0.75);
}

.btn {
  color: green;
  transition: all ease 0.8s;
  /* animation: lol 2s ; */
}

.btn:hover {
  color: blueviolet;
  animation: rotate 2s;
  transform-origin: top left;
}

.para {
  animation: rotate 8s linear infinite;
}


.rotate60 {
  transform: rotate(60deg);
}

.rotate120 {
  transform: rotate(120deg);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.rotate-reverse {
  animation: rotate-reverse 8s linear infinite;
}

@keyframes rotate-reverse {
  0% {
    transform: rotate(120deg);
  }

  100% {
    transform: rotate(-120deg);
  }
}

@keyframes lol {
  from {
    transform: translateX(-300px);
  }

  to {
    transform: translateX(0px);
  }
}
</style>
