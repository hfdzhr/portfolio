<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: 'Image',
  },
});
</script>

<template>
  <swiper-slide>
    <img class="block w-[100%]" :src="image" :alt="altText" />
  </swiper-slide> 
</template>

<style scoped></style>
