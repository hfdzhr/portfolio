<template>
  <div
    class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-transform duration-700 ease-in-out pointer-events-none"
    :class="{
      'translate-y-0': visible,
      'translate-y-[-100%]': !visible,
    }"
  >
    <!-- Name (statis) -->
    <h1
      class="text-5xl sm:text-6xl md:text-7xl font-ws font-bold tracking-tight text-black"
    >
      Hafid Al Azhar
    </h1>

    <!-- Loading Bar -->
    <div
      class="relative w-48 sm:w-56 h-[3px] bg-gray-200 rounded-full mt-6 overflow-hidden"
    >
      <div
        class="absolute inset-y-0 left-0 bg-black rounded-full transition-all duration-300 ease-out"
        :style="{ width: barProgress + '%' }"
      ></div>
    </div>

    <!-- Loading Text -->
    <p class="mt-4 font-ws text-xs sm:text-sm text-gray-400 tracking-[0.3em] uppercase">
      Loading&hellip;
    </p>
  </div>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
  barProgress: {
    type: Number,
    default: 0,
  },
});
</script>
