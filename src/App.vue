

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
    </div>
    <div class="custom-shape-divider-top-1708193282 bg-[#f8f8f8] mt-[-2px]">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill fill-quaternary"></path>
      </svg>
    </div>
    <section class="bg-[#f8f8f8] min-h-[100vh] flex flex-col font-merienda px-4 lg:px-6" >
      <div class="w-full flex justify-center">
        <h1 class="responsive-h1 lg:text-[3.5rem]">Skills</h1>
      </div>
      <h2 class="responsive-h3 mt-4 font-semibold">FrontEnd</h2>
      <div class="skills responsive-p1 grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 lg:mt-6">
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/react.svg" /><span>React.js</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/vue.svg" /><span>Vue.js</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/nextjs.svg" /><span>Next.js</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/flutter.svg" /><span>Flutter</span></div>
        <div class="flex gap-2 items-center "><img class="h-10 w-10"
            src="./assets/imgs/skills/state-management.svg" /><span class="white">State Management</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/tailwind.svg" /><span>Tailwind Css</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/material-ui.svg" /><span>Material UI</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/html.svg" /><span>HTML</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/css.svg" /><span>CSS</span></div>
      </div>
      <h2 class="responsive-h3 mt-6 font-semibold">BackEnd</h2>
      <div class="skills responsive-p1 grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 lg:mt-6">
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/node.svg" /><span>Node</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/nestjs.svg" /><span>Nest</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/sequelize.svg" /><span>Sequelize</span></div>
        <div class="flex gap-2 items-center "><img class="h-10 w-10"
            src="./assets/imgs/skills/typeorm.svg" /><span>TypeOrm</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/database.svg" /><span>PostgresSQL</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/firebase.svg" /><span>FireBase</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/mongodb.svg" /><span>MongoDB</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/influxdb.svg" /><span>InfluxDB</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10" src="./assets/imgs/skills/api.svg" /><span>Rest
            </span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/protobuf.svg" /><span>ProtoBuf</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/grpc.svg" /><span>gRPC</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/flask.svg" /><span>Flask</span></div>
        <div class="flex gap-2 items-center"><img class="h-6 w-10"
            src="./assets/imgs/skills/mqtt.svg" /><span>Mqtt</span></div>

      </div>

      <h2 class="responsive-h3 mt-6 font-semibold">Other</h2>
      <div class="skills responsive-p1 grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 lg:mt-6">
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/docker.svg" /><span>Docker</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/ci-cd.svg" /><span>CI-CD</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/git.svg" /><span>Git</span></div>
        <div class="flex gap-2 items-center "><img class="h-10 w-10"
            src="./assets/imgs/skills/jira.svg" /><span>Jira</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/azure.svg" /><span>Azure</span></div>
        <div class="flex gap-2 items-center"><img class="h-8 w-10" src="./assets/imgs/skills/aws.svg" /><span>AWS</span>
        </div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/go.svg" /><span>GoLang</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/js.svg" /><span>JavaScript</span></div>
        <div class="flex gap-2 items-center"><img class="h-10 w-10"
            src="./assets/imgs/skills/typescript.svg" /><span>TypeScript</span></div>
        <div class="flex gap-2 items-center "><img class="h-10 w-10"
            src="./assets/imgs/skills/python.svg" /><span>Python</span></div>
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


