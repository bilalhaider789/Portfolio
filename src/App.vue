

<template>
  <div class="relative bg-white">
    <CursorEffect></CursorEffect>
    <NavBar class="top-0 fixed z-50"></NavBar>

    <div class="">
      <section class="lg:h-[100vh] pt-16 lg:pt-50 pb-24 flex flex-col lg:flex-row lg:items-center w-full lg:gap-16 bg-quaternary  ">
        <div class="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <RotatingCircle></RotatingCircle>
        </div>
        <div class="w-full lg:w-1/2 px-6">
          <SpringHeading></SpringHeading>
        </div>
      </section>
    </div>
    <div class="custom-shape-divider-top-1708193282 bg-[#f8f8f8] mt-[-2px]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill fill-quaternary"></path>
        </svg>
      </div>
    <section class="bg-[#f8f8f8] min-h-[100vh] flex flex-col font-merienda">
      <div class="w-full flex justify-center"><h1 class="responsive-h1 lg:text-[3.5rem]">Skills</h1></div>
      <h2 class="responsive-h3 mt-4">FrontEnd</h2>
      <div>
        
      </div>
    </section>
    
  </div>
</template>

<script setup lang="ts">
import CursorEffect from "./components/effects/CursorEffect.vue"
import RotatingCircle from "./components/RotatingCircle.vue";
import SpringHeading from "./components/SpringHeading.vue";
import NavBar from "./components/NavBar.vue";


document.addEventListener("scroll", function () {
  const textElements = document.querySelectorAll('.scroll-effect');
  textElements.forEach(el => {
    if (isElementInViewport(el)) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
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
@keyframes fadeInText {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.text-element {
  opacity: 0;
  /* Start with the text hidden */
  transition: opacity 0.3s ease-in-out;
  /* Smooth transition for the fade-in effect */
}

.text-element.visible {
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


