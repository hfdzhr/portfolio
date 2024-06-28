<template>
  <footer
    class="footer bg-neutral text-neutral-content items-center p-4 font-ws"
  >
    <aside class="px-5 lg:px-10 grid-flow-col items-center">
      <a href="#hero" class="text-3xl font-bold font-ws">Hafid.</a>
      <p>Copyright © {{ year }} - All right reserved</p>
    </aside>
    <nav
      class="grid-flow-col px-5 gap-4 md:place-self-center md:justify-self-end"
    >
      <a href="https://www.instagram.com/hafidalazhr" target="_blank">
        <Icon class="text-white" name="fa6-brands:instagram" size="24px" />
      </a>
      <a href="https://github.com/hfdzhr" target="_blank">
        <Icon class="text-white" name="fa6-brands:github" size="24px" />
      </a>
      <a href="https://www.linkedin.com/in/hafidalazhar/" target="_blank">
        <Icon class="text-white" name="fa6-brands:linkedin-in" size="24px" />
      </a>
    </nav>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
