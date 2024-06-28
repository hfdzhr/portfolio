<!-- components/CardLink.vue -->
<template>
  <div :class="cardClasses">
    <figure
      class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end overflow-visible"
    >
      <img
        loading="lazy"
        width="96"
        height="96"
        class="aspect-square w-full h-auto transition-all duration-200 grayscale group-hover:grayscale-0"
        :alt="altText"
        :src="imageUrl"
      />
    </figure>
    <div class="card-body text-center">
      <span class="font-ws text-lg">{{ label }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  cardClasses: {
    type: String,
    default: 'group card m-1 border-base-content/5 card-compact ',
  },
});
</script>
