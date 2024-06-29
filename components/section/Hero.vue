<template>
  <section id="hero">
    <div class="hero min-h-screen relative">
      <div class="hero-content text-center">
        <div class="max-w-lg mx-auto">
          <h1
            class="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-ws font-semibold"
            id="name"
          >
            <span class="text-wrapper">
              <span
                v-for="(letter, index) in letters"
                :key="index"
                class="letter"
              >
                {{ letter === ' ' ? '\u00A0' : letter }}
              </span>
            </span>
          </h1>
          <p class="py-6 text-sm sm:text-lg font-ws" id="subtitle">
            Web Developer | Tech Enthusiast | Student
          </p>
        </div>
      </div>
      <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div id="icon-container">
          <Icon
            class="animate-bounce rotate-0"
            name="streamline:interface-arrows-button-down-double-arrow-arrows-double-down"
            size="35px"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap';

const text = 'Hafid Al Azhar';
const letters = ref(text.split(''));

onMounted(() => {
  const tl = gsap.timeline();

  tl.fromTo(
    '.letter',
    { y: '100%' },
    {
      y: '0%',
      duration: 2,
      stagger: 0.03,
      ease: 'power4.out',
    }
  )
    .fromTo(
      '#subtitle',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
      },
      '-=1'
    )
    .fromTo(
      '#icon-container',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
      },
      '-=0.2'
    );
});
</script>

<style scoped>
.text-wrapper {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
}

.letter {
  display: inline-block;
  transform: translateY(100%);
}
</style>
