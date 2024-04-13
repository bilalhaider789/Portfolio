<template>
  <div class=" font-merienda text-tertiary h-fit" >
    <div class="flex responsive-h2">
      <h1 class=" spring-text w-fit text-seconday" v-for="(letter, index) in `Hi, I'm`" :key="index">{{ letter }}</h1>
    </div>
    <div class="flex responsive-h1 mt-[-5px] lg:mt-[-15px]">
      <h1 class=" spring-text w-fit" :class="index==0? '': ''" v-for="(letter, index) in 'Bilal'" :key="index">{{ letter }}
      </h1>
      <span class="mr-3"></span>
      <h1 class=" spring-text w-fit" v-for="(letter, index) in 'Haider'" :key="index">{{ letter }}</h1>
    </div>
    <div class="p-1 w-[100%]">
      <div class="relative p-1 w-full ">
        <div ref="descriptionElement" class="absolute responsive-h3 top-[-99999px]">{{ description }}</div>
        <p ref="container" class="responsive-h3 text-black min-w-full">{{ displayedDescription }}<span class="cursor">|</span></p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { Ref, nextTick, onMounted, ref } from 'vue';

const description = ("I'm a professional full stack web developer, Experties in micro services, devops and system design.");
const displayedDescription= ref("")
const descriptionElement: Ref<HTMLDivElement | null> = ref(null);
const currentCharIndex = ref(0);
const isErasing = ref(false);
const typingDelay = 30;  
const erasingDelay = 10; 
const container: Ref<HTMLDivElement | null> = ref(null);

const typeText = () => {
  if (isErasing.value) {
    if (displayedDescription.value.length > 1) {
      displayedDescription.value = displayedDescription.value.substring(0, displayedDescription.value.length - 1);
      setTimeout(typeText, erasingDelay);
    } else {
      isErasing.value = false;
      currentCharIndex.value = 1;
      setTimeout(typeText, typingDelay);
    }
  } else {
    if (currentCharIndex.value < description.length) {
      displayedDescription.value += description.charAt(currentCharIndex.value);
      currentCharIndex.value++;
      setTimeout(typeText, typingDelay);
    } else {
      setTimeout(() => { isErasing.value = true; typeText(); }, 3000); 
    }
  }
};

onMounted(async()=>{
  await nextTick(); 
  const height = descriptionElement.value?.offsetHeight;
  if (height && container.value) {
    container.value.style.height = `${height}px`;
    typeText() 
  }
})

</script>

<style scoped>

.spring-text {
  transition: transform 0.15s;
}

.spring-text:hover {
  transform: scaleX(1.75) scaleY(0.75);
}

.cursor {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

</style>