<template>
  <div
    ref="loaderContainer"
    class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-transform duration-700 ease-in-out pointer-events-none"
    :class="{
      'translate-y-0': visible,
      'translate-y-[-100%]': !visible,
    }"
  >
    <!-- Name dengan letter animation -->
    <h1
      class="text-5xl sm:text-6xl md:text-7xl font-ws font-bold tracking-tight text-black overflow-hidden"
    >
      <span class="inline-block">
        <span
          v-for="(letter, index) in letters"
          :key="index"
          ref="letterRefs"
          class="inline-block"
          :style="{ transform: 'translateY(100%)' }"
        >
          {{ letter === ' ' ? '\u00A0' : letter }}
        </span>
      </span>
    </h1>

    <!-- Loading Bar -->
    <div
      ref="barContainer"
      class="relative w-48 sm:w-56 h-[3px] bg-gray-200 rounded-full mt-6 overflow-hidden"
    >
      <div
        class="absolute inset-y-0 left-0 bg-black rounded-full transition-all duration-300 ease-out"
        :style="{ width: barProgress + '%' }"
      ></div>
    </div>

    <!-- Loading Text -->
    <p
      ref="loadingText"
      class="mt-4 font-ws text-xs sm:text-sm text-gray-400 tracking-[0.3em] uppercase"
    >
      Loading&hellip;
    </p>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

const props = defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
  barProgress: {
    type: Number,
    default: 0,
  },
});

const text = 'Hafid Al Azhar';
const letters = ref(text.split(''));
const letterRefs = ref([]);
const loaderContainer = ref(null);
const barContainer = ref(null);
const loadingText = ref(null);

// Animasi masuk — letters muncul satu per satu
onMounted(() => {
  // Stagger letter animation
  gsap.fromTo(
    letterRefs.value,
    { y: '100%' },
    {
      y: '0%',
      duration: 1.2,
      stagger: 0.04,
      ease: 'power4.out',
      delay: 0.2,
    }
  );

  // Loading text fade in
  gsap.fromTo(
    loadingText.value,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.8, delay: 1.5, ease: 'power2.out' }
  );
});

// Animasi keluar — letters terbang ke atas saat loader di-hide
watch(
  () => props.visible,
  (isVisible) => {
    if (!isVisible && letterRefs.value.length) {
      gsap.to(letterRefs.value, {
        y: '-120%',
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: 'power2.in',
      });

      gsap.to([barContainer.value, loadingText.value], {
        y: -30,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      });
    }
  }
);
</script>
