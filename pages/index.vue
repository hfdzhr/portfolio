<template>
  <AppLoader v-if="progress" />
  <template v-else>
    <AppHeader />
    <main>
      <SectionHero />
      <SectionAbout />
      <SectionSkill />
      <SectionCertificate />
      <SectionProject />
      <SectionTimeline />
      <SectionContact />
    </main>
    <AppFooter />
  </template>
</template>

<script setup>
useHead({
  meta: [
    {
      name: 'google-site-verification',
      content: '0LZ0SzJu15w7oi6WNc6pjlsleS6WKzEXwPdV0_LINhw',
    },
    {
      name: 'msvalidate.01',
      content: '675881BAA2B322D4662BE890FE10B9FC',
    },
    {
      name: 'keywords',
      content: 'Hafid Al Azhar, Web Developer, Portfolio, Vue.js, Nuxt.js, Laravel, Full Stack Developer, Computer Science',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Hafid Al Azhar',
        url: 'https://hafidalazhar.vercel.app',
        sameAs: [
          'https://www.instagram.com/hafidalazhr',
          'https://github.com/hfdzhr',
          'https://www.linkedin.com/in/hafidalazhar/',
        ],
        jobTitle: 'Web Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance',
        },
        description:
          'Welcome to Hafid Al Azhar personal portfolio website. Discover my journey as a passionate web developer and tech enthusiast.',
      }),
    },
  ],
});

const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,

  estimatedProgress: (duration, elapsed) =>
    (2 / Math.PI) * 100 * Math.atan(((elapsed / duration) * 100) / 50),
});
const description =
  'Welcome to Hafid Al Azhar personal portfolio website. Discover my journey as a passionate web developer and tech enthusiast, showcasing my skills, projects, and experiences in the field of computer science. Explore my latest works, learn about my professional background, and get in touch for collaborations.';

start();

finish();

clear();

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
