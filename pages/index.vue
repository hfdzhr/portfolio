<template>
  <AppLoader v-if="progress" />
  <template v-else>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </template>
</template>

<script setup>
const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,

  estimatedProgress: (duration, elapsed) =>
    (2 / Math.PI) * 100 * Math.atan(((elapsed / duration) * 100) / 50),
});

start();

finish();

clear();

const description =
  'Welcome to Hafid Al Azhar personal portfolio website. Discover my journey as a passionate web developer and tech enthusiast, showcasing my skills, projects, and experiences in the field of computer science. Explore my latest works, learn about my professional background, and get in touch for collaborations.';

useSeoMeta({
  ogTitle: 'Hafid Al Azhar',
  author: 'Hafid Al Azhar',
  description: description,
  ogDescription: description,
  ogUrl: 'https://hafidalazhar.vercel.app',
  ogImage: '/ogimage.png',
  ogLocale: 'en',
  twitterTitle: 'Hafid Al Azhar',
  twitterDescription: description,
  twitterImage: '/ogimage.png',
  twitterCard: 'summary_large_image',
});
``;
useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>
