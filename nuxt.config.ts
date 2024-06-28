// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/google-fonts', '@nuxt/icon', '@nuxtjs/seo'],
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
      'Welcome to Hafid Al Azhar personal portfolio website. Discover my journey as a passionate web developer and tech enthusiast, showcasing my skills, projects, and experiences in the field of computer science. Explore my latest works, learn about my professional background, and get in touch for collaborations.',
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
