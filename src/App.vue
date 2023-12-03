<script setup lang="ts">
import CursorEffect from "./components/effects/CursorEffect.vue"

document.addEventListener("scroll", function() {
    const textElements = document.querySelectorAll('.text-element');
    textElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
});
function isElementInViewport(el:any) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

</script>

<template>
  <div>
    <CursorEffect></CursorEffect>
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
      <p class="max-w-3xl text-element">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores minus vel nisi
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
@keyframes fadeInText {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.text-element {
    opacity: 0; /* Start with the text hidden */
    transition: opacity 0.3s ease-in-out; /* Smooth transition for the fade-in effect */
}

.text-element.visible {
    animation-name: fadeInText;
    animation-duration: 3s; /* Duration of the fade-in effect */
    animation-fill-mode: forwards; /* Keeps the text visible after the animation completes */
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
