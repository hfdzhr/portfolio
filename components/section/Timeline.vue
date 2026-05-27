<template>
  <section id="timeline">
    <div class="bg-base-200 min-h-screen pt-4 lg:pt-10">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="divider divider-neutral mb-4 lg:mb-10">
          <h2 class="text-left text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-ws font-semibold">EXPERIENCE</h2>
        </div>

        <div class="relative space-y-10 lg:space-y-16">
          <!-- Garis timeline vertikal -->
          <div class="absolute left-[7px] lg:left-[11px] top-2 bottom-2 w-0.5 bg-gray-200"></div>

          <!-- Entry 1: SMK Assalaam -->
          <div class="relative flex flex-col md:flex-row gap-4 md:gap-8">
            <div class="flex-shrink-0 w-full md:w-48 pt-1">
              <div class="flex items-center gap-3 md:gap-0">
                <div class="w-[18px] h-[18px] rounded-full bg-black flex-shrink-0 relative z-10 md:mr-6"></div>
                <time class="font-ws text-base sm:text-lg italic">2021 - 2024</time>
              </div>
            </div>
            <div class="flex-1 ml-8 md:ml-0">
              <div class="flex items-center gap-3 mb-3">
                <img
                  src="/smk-assalaam-logo.webp"
                  alt="SMK Assalaam Bandung Logo"
                  class="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-md"
                />
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold font-ws">SMK Assalaam Bandung</h3>
                </div>
              </div>
              <ul class="list-disc list-inside font-ws text-base sm:text-lg leading-relaxed space-y-1">
                <li>Mempelajari dasar pemrograman &amp; OOP</li>
                <li>Membangun 5+ project web dengan JavaScript, HTML, &amp; CSS</li>
                <li>Mengelola database MySQL untuk aplikasi berbasis web</li>
                <li>Menyelesaikan project akhir tim dengan nilai A</li>
              </ul>
            </div>
          </div>

          <!-- Entry 2: PTIPD UIN SGD -->
          <div class="relative flex flex-col md:flex-row gap-4 md:gap-8">
            <div class="flex-shrink-0 w-full md:w-48 pt-1">
              <div class="flex items-center gap-3 md:gap-0">
                <div class="w-[18px] h-[18px] rounded-full bg-black flex-shrink-0 relative z-10 md:mr-6"></div>
                <time class="font-ws text-base sm:text-lg italic">2023</time>
              </div>
            </div>
            <div class="flex-1 ml-8 md:ml-0">
              <div class="flex items-center gap-3 mb-2">
                <img
                  src="/ptipd-uin-sgd-logo.webp"
                  alt="PTIPD UIN Sunan Gunung Djati Logo"
                  class="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-md"
                />
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold font-ws">PTIPD UIN Sunan Gunung Djati</h3>
                  <span class="badge badge-outline font-ws font-medium mt-1">Backend Developer · Internship</span>
                </div>
              </div>
              <ul class="list-disc list-inside font-ws text-base sm:text-lg leading-relaxed space-y-1 mt-3">
                <li>Merancang ERD &amp; Entity Relationship Diagram untuk sistem inventory</li>
                <li>Mengembangkan REST API menggunakan Express.js &amp; MySQL</li>
                <li>Berkolaborasi dengan tim IT untuk kebutuhan 10+ lab komputer</li>
              </ul>
              <a
                href="#projects"
                @click.prevent="scrollToSection('#projects')"
                class="link link-primary inline-flex items-center gap-1 text-sm font-ws font-medium mt-3"
              >
                <Icon name="tabler:arrow-right-circle" class="w-4 h-4" />
                Lihat Project: PTIPD Inventory
              </a>
            </div>
          </div>

          <!-- Entry 3: PT. Digital Amore Kriyanesia -->
          <div class="relative flex flex-col md:flex-row gap-4 md:gap-8">
            <div class="flex-shrink-0 w-full md:w-48 pt-1">
              <div class="flex items-center gap-3 md:gap-0">
                <div class="w-[18px] h-[18px] rounded-full bg-black flex-shrink-0 relative z-10 md:mr-6"></div>
                <time class="font-ws text-base sm:text-lg italic">2024 - Now</time>
              </div>
            </div>
            <div class="flex-1 ml-8 md:ml-0">
              <div class="flex items-center gap-3 mb-2">
                <img
                  src="/pt-dak-logo.webp"
                  alt="PT. Digital Amore Kriyanesia Logo"
                  class="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-md"
                />
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold font-ws">PT. Digital Amore Kriyanesia</h3>
                  <span class="badge badge-outline font-ws font-medium mt-1">Frontend Developer</span>
                </div>
              </div>
              <ul class="list-disc list-inside font-ws text-base sm:text-lg leading-relaxed space-y-1 mt-3">
                <li>Merancang UI/UX design untuk aplikasi web sektor perbankan</li>
                <li>Mengembangkan frontend menggunakan Nuxt.js &amp; Tailwind CSS</li>
                <li>Berkolaborasi dengan tim backend dalam integrasi API dan deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
function scrollToSection(id) {
  const element = document.querySelector(id);
  const offset = 68;
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
}
</script>
