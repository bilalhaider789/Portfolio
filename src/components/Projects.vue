<template>
  <div class="custom-shape-divider-top-1708193282 bg-[#f8f8f8] mt-[-2px]">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill fill-quaternary"></path>
    </svg>
  </div>
  <section class="bg-[#f8f8f8] min-h-fit flex flex-col font-merienda px-4 lg:px-6">
    <div class="w-full flex justify-center">
      <h1 class="responsive-h1 lg:text-[3.5rem]">Achievements</h1>
    </div>
    <div class="flex flex-col w-full items-center mt-16">
      <h1 class="responsive-h3">
        Secured 2nd Position in Comsats Career Expo 2023 Amidst 200+ Projects
      </h1>
      <div class="mt-6 mx-6 h-[220px] md:h-[320px] 2xl:h-[420px] w-[350px]  md:w-[600px] 2xl:w-[800px]  relative "
        @mouseenter="changeHoverComponent(1)" @mouseleave="changeHoverComponent(0)">
        <img class="absolute inset-0 w-full h-full object-fill" src="../assets/intelli-lines.png" />
        <div v-if="hoverComponent == 1"
          class="absolute inset-0 flex items-center gap-6 justify-center bg-gray-200 bg-opacity-70 cursor-pointer transition-opacity ease-linear duration-500 opacity-0 hover:opacity-100">
          <div
            class="flex flex-col justify-center items-center gap-3 p-2 responsive-h3 border-2 hover:border-black border-transparent "
            @click="openNewTab('https://github.com/bilalhaider789/Intelli-lines')">
            <img src="../assets/imgs/skills/github.svg" class="h-16 w-16" />
            <h3>Github</h3>
          </div>
          <div
            class="flex flex-col justify-center items-center gap-3 py-2 px-4 responsive-h3 border-2 hover:border-black border-transparent"
            @click="openNewTab('https://www.youtube.com/watch?v=-xwXv3JGKbA')">
            <img src="../assets/imgs/skills/chain.svg" class="h-16 w-16" />
            <h3>Demo</h3>
          </div>
        </div>
        <!-- <img class="h-full w-full" src="../assets/intelli-lines.png" />
        
        <div class="h-full w-full top-0 left-0 z-10 absolute bg-gray-200 opacity-50">
          <p class="opacity-100 text-black">hello i am bilal</p>
        </div> -->
      </div>
      <!-- <iframe  width="560" height="315" src="https://www.youtube.com/embed/-xwXv3JGKbA" allowfullscreen class="bg-red-200">
        
      </iframe> -->

    </div>
  </section>
  <div class="h-56"></div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

  const hoverComponent = ref(0);
  const changeHoverComponent = (value: number)=>{
    hoverComponent.value = value;
  }

  const openNewTab = (url: string)=>{
    window.open(url, '_blank');
  }
</script>

<style scoped>


</style>