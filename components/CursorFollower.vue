<template>
  <div
    ref="cursorDot"
    class="fixed top-0 left-0 w-5 h-5 bg-black rounded-full pointer-events-none z-[99999] transition-all duration-150"
    :class="{
      'scale-150': isHovering,
      'scale-100': !isHovering,
    }"
    :style="{
      transform: 'translate(-50%, -50%)',
      display: isDesktop ? 'block' : 'none',
    }"
  ></div>
</template>

<script setup>
import { gsap } from 'gsap';

const cursorDot = ref(null);
const isHovering = ref(false);
const isDesktop = ref(false);

let xTo = null;
let yTo = null;
let cleanupHover = null;

onMounted(() => {
  isDesktop.value = window.innerWidth >= 1024;
  if (!isDesktop.value) return;

  // Buat quickTo functions untuk follow cursor dengan delay
  xTo = gsap.quickTo(cursorDot.value, 'x', {
    duration: 0.35,
    ease: 'power2.out',
  });
  yTo = gsap.quickTo(cursorDot.value, 'y', {
    duration: 0.35,
    ease: 'power2.out',
  });

  // Inisialisasi posisi awal
  xTo(window.innerWidth / 2);
  yTo(window.innerHeight / 2);

  // Sembunyikan cursor default
  document.body.style.cursor = 'none';

  // Track mouse position
  const onMove = (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  };

  window.addEventListener('mousemove', onMove);

  // Hover effect untuk link & button
  const hoverElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
  const onHoverIn = () => { isHovering.value = true; };
  const onHoverOut = () => { isHovering.value = false; };

  hoverElements.forEach((el) => {
    el.addEventListener('mouseenter', onHoverIn);
    el.addEventListener('mouseleave', onHoverOut);
  });

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('mousemove', onMove);
    document.body.style.cursor = '';
    hoverElements.forEach((el) => {
      el.removeEventListener('mouseenter', onHoverIn);
      el.removeEventListener('mouseleave', onHoverOut);
    });
  });
});
</script>
