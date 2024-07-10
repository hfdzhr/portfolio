// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/google-fonts', '@nuxt/icon', '@nuxtjs/seo', 'nuxt-swiper'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: 'https://hafidalazhar.vercel.app',
    name: 'Hafid Al Azhar',
    description:
      'Welcome to the personal portfolio of Hafid Al Azhar, a passionate web developer and tech enthusiast. Discover my skills, projects, and experiences in computer science. Get in touch for collaborations.',
    defaultLocale: 'en',
  },
  seo: {
    fallbackTitle: false,
  },
  googleFonts: {
    families: {
      'Work Sans': {
        wght: '200..900',
      },
    },
  },
});
