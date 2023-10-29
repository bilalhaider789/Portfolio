<script setup lang="ts">
import { onMounted, ref} from 'vue';

const items = ref<any>([]);

onMounted(() => {
  items.value = document.querySelectorAll(".custom");
  console.log(items.value);
});
</script>

<template>
  <div class="">
    <!-- <div v-if="state" class="btn px-4 w-fit border-2 border-red-500 rounded-xl m-10">
      <button class=""> I am here</button>
    </div>
    <button @click="state=!state">click me</button>
    <div class="relative">
      <p class="bg-red-400 w-52 top-0 absolute hover:z-10  transition-all duration-500"> here buddy</p>
      <p class="bg-blue-400 w-52 absolute ml-5 top-0 z-0 transition-all duration-500"> here buddy</p>
    </div> -->
    <section class="custom bg-red-100 min-h-[100vh] flex flex-col justify-center items-center">
      <div class="relative w-96 flex justify-center">
        <p class="text-[100px] font-semibold spring-text">A</p>
        <div class="para absolute w-full flex justify-between">
          <p class=" rotate-reverse w-14 bg-red-500 h-14 flex items-center justify-center rounded-full"> Hello</p>
          <p class=" rotate-reverse  w-14 bg-red-500 h-14 flex items-center justify-center rounded-full"> World</p>
        </div>
        <!-- <div class="w-52 h-64 bg-blue-300 rounded-2xl absolute top-0 left-1/2 transform -translate-x-1/2 hover:scale-110 duration-500 hover:z-10">
        </div>
        <div class="w-52 h-64 bg-green-300 rounded-2xl absolute top-0  ml-20 left-1/2 transform -translate-x-1/2 hover:scale-110 duration-500 hover:z-10">
        </div> -->
      </div>
    </section>
    <section class="custom bg-red-200 min-h-[100vh] flex flex-col justify-center items-center">
      <h1>I am heading</h1>
      <p class="max-w-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores minus vel nisi iure qui adipisci velit, dolorum in? Quisquam quod nihil voluptatem. Eius nihil voluptas, ut commodi voluptatum consequuntur!</p>
    </section>
    <section class="custom bg-red-300 min-h-[100vh] flex flex-col justify-center items-center">
      <h1 class="slide-bck-center bg-green-300">I am heading</h1> 
      <p class="max-w-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores minus vel nisi iure qui adipisci velit, dolorum in? Quisquam quod nihil voluptatem. Eius nihil voluptas, ut commodi voluptatum consequuntur!</p>
    </section>
  </div>
</template>

<style scoped>

@keyframes spring {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(5px);
  }
  75% {
    transform: translateY(-5px);
  }
}

.spring-text:hover {
  transform: scaleX(1.25) scaleY(0.75);
  transition: transform 0.5s;
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
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes lol {
  from{
    transform: translateX(-300px);
  }
  to{
    transform: translateX(0px);
  }
}
</style>
