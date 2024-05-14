<template>
    <div class="relative w-96 h-96 flex justify-center">
        <div class="hidden lg:block bg-transparent absolute w-full h-full border-2 border-tertiary rounded-full z-0">
        </div>
        <div class="hidden para absolute w-full lg:flex justify-center items-center z-10">
            <div class="rotate-reverse custom-shadow">
                <div class="reverse "><img src="../assets/logos/node.svg" alt="My Icon" /></div>
            </div>
            <div class="rotate-reverse">
                <div class="reverse"><img src="../assets/logos/vue.svg" class="h-8 mt-1" alt="My Icon" /></div>
            </div>
            <div class="rotate-reverse">
                <div class="reverse"><img src="../assets/logos/docker.svg" class="h-10" alt="My Icon" /></div>
            </div>
            <div class="rotate-reverse">
                <div class="reverse"><img src="../assets/logos/database.svg" class="h-8" alt="My Icon" /></div>
            </div>
        </div>
        <div class="absolute w-full h-full flex justify-center items-center">
            <div
                class="bg-transparent  w-[16rem] h-[16rem]  md:w-[20rem] md:h-[20rem]  overflow-hidden   rounded-full z-0">

                <img src="../assets/imgs/dp1.png" class=" rounded-full" alt="check" />

            </div>

        </div>
    </div>
</template>
  
<style scoped>

.custom-shadow{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.adjust {
    transform: rotate(90deg);
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.reverse {
    position: absolute;
    animation: counter-rotate 15s linear infinite;
    background-color: transparent;
}

span {
    transform: rotate(90deg);
}

@keyframes counter-rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-360deg);
    }
}

.para {
    animation: rotate 15s linear infinite;
    position: relative;
}

.rotate-reverse {
    position: absolute;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #e0e5e9;
    border-color: #012957;
    border-width: 2px;
}
.rotate-reverse:nth-child(1) {
    transform: rotate(0deg) translateX(12rem);
}

.rotate-reverse:nth-child(2) {
    transform: rotate(0deg) translateY(12rem);
}

.rotate-reverse:nth-child(3) {
    transform: rotate(0deg) translateX(-12rem);
}

.rotate-reverse:nth-child(4) {
    transform: rotate(0deg) translateY(-12rem);
}


</style>
  