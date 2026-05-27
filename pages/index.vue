<template>
  <!-- Loader overlay -->
  <AppLoader :visible="isLoading" :bar-progress="barProgress" />

  <!-- Content selalu di-render, hanya di-hidden oleh loader -->
  <div :class="{ 'pointer-events-none select-none': isLoading }">
    <AppHeader />
    <main>
      <SectionHero :ready="!isLoading" />
      <SectionAbout />
      <SectionSkill />
      <SectionCertificate />
      <SectionProject />
      <SectionTimeline />
      <SectionContact />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const isLoading = ref(true);
const barProgress = ref(0);

const MIN_LOAD_TIME = 2000;
let minTimeReached = false;
let assetsLoaded = false;

function checkDone(interval) {
  if (assetsLoaded && minTimeReached) {
    clearInterval(interval);
    // Progress bar ke 100%
    barProgress.value = 100;

    // Setelah user lihat 100%, slide loader ke atas
    setTimeout(() => {
      isLoading.value = false;
    }, 400);
  }
}

onMounted(() => {
  const startTime = Date.now();

  // Animasi progress bar
  const progressInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    barProgress.value = Math.min(
      (2 / Math.PI) * 100 * Math.atan(elapsed / 1000),
      99
    );
  }, 50);

  // Minimum display time
  setTimeout(() => {
    minTimeReached = true;
    checkDone(progressInterval);
  }, MIN_LOAD_TIME);

  // Tunggu semua asset selesai load (gambar, font, dll)
  const onAssetsLoaded = () => {
    setTimeout(() => {
      assetsLoaded = true;
      checkDone(progressInterval);
    }, 400);
  };

  if (document.readyState === 'complete') {
    onAssetsLoaded();
  } else {
    window.addEventListener('load', onAssetsLoaded);
  }
});

// --- Head, SEO, Meta ---
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
      content:
        'Hafid Al Azhar, Web Developer, Portfolio, Vue.js, Nuxt.js, Laravel, Full Stack Developer, Computer Science',
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

useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>
