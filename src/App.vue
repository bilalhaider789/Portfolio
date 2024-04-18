

<template>
  <div class="relative bg-white">
    <CursorEffect></CursorEffect>
    <NavBar class="top-0 fixed z-50"></NavBar>

    <div class="">
      <section
        class="lg:h-[100vh] pt-16 lg:pt-50 pb-24 flex flex-col lg:flex-row lg:items-center w-full lg:gap-16 bg-quaternary  ">
        <div class="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <RotatingCircle></RotatingCircle>
        </div>
        <div class="w-full lg:w-1/2 px-6">
          <SpringHeading></SpringHeading>
        </div>
      </section>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
    </div>


  </div>
</template>

<script setup lang="ts">
import CursorEffect from "./components/effects/CursorEffect.vue"
import RotatingCircle from "./components/RotatingCircle.vue";
import SpringHeading from "./components/SpringHeading.vue";
import NavBar from "./components/NavBar.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";





document.addEventListener("scroll", function () {
  const textElements = document.querySelectorAll('.scroll-effect');
  textElements.forEach(el => {
    if (isElementInViewport(el)) {
      el.classList.remove('invisible');
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
      el.classList.add('invisible');

    }
  });
});
function isElementInViewport(el: any) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

</script>

<style scoped>


.skills > div > img {
  display: none;
}

@media (min-width: 768px) {
  .skills > div > img {
    display: block;
  }
}

@keyframes fadeInText {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.scroll-effect {
  opacity: 0;
  /* Start with the text hidden */
  transition: opacity 0.3s ease-in-out;
  /* Smooth transition for the fade-in effect */
}

.scroll-effect.visible {
  animation-name: fadeInText;
  animation-duration: 3s;
  /* Duration of the fade-in effect */
  animation-fill-mode: forwards;
  /* Keeps the text visible after the animation completes */
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

.para p {
  position: absolute;
}

.para {
  animation: rotate 8s linear infinite;
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


