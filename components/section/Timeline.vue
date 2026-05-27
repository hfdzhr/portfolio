<template>
  <section id="timeline">
    <div class="min-h-screen pt-4 lg:pt-10">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="divider divider-neutral mb-4 lg:mb-10">
          <h2 class="text-left text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-ws font-semibold">EXPERIENCE</h2>
        </div>
        <div class="">
          <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <!-- SMK Assalaam -->
            <li>
              <div class="timeline-middle">
                <Icon name="tabler:circle-check-filled" class="h-5 w-5 text-primary" />
              </div>
              <div class="timeline-start timeline-box mb-10 md:text-end">
                <time class="font-ws italic text-base">2021 - 2024</time>
                <div class="flex items-center gap-3 mt-1 justify-between">
                  <img
                    src="/smk-assalaam-logo.webp"
                    alt="SMK Assalaam Bandung Logo"
                    class="w-10 h-10 object-contain rounded-md"
                  />
                  <div class="text-xl font-bold font-ws">SMK Assalaam Bandung</div>
                </div>
                <div class="mt-3 md:ml-3">
                  <ul class="list-disc list-inside md:list-outside font-ws text-base sm:text-lg text-left leading-relaxed">
                    <li>Mempelajari dasar pemrograman &amp; OOP</li>
                    <li>Membangun 5+ project web dengan JavaScript, HTML, &amp; CSS</li>
                    <li>Mengelola database MySQL untuk aplikasi berbasis web</li>
                    <li>Menyelesaikan project akhir tim dengan nilai A</li>
                  </ul>
                </div>
              </div>
              <hr />
            </li>
            <!-- PTIPD UIN SGD -->
            <li>
              <hr />
              <div class="timeline-middle">
                <Icon name="tabler:circle-check-filled" class="h-5 w-5 text-primary" />
              </div>
              <div class="timeline-end timeline-box md:mb-10">
                <div class="flex justify-between items-center flex-wrap gap-2">
                  <time class="font-ws italic text-base">2023</time>
                  <span class="badge badge-outline font-ws font-medium">Backend Developer</span>
                </div>
                <div class="flex items-center mt-1 gap-3 md:justify-end">
                  <img
                    src="/ptipd-uin-sgd-logo.webp"
                    alt="PTIPD UIN Sunan Gunung Djati Logo"
                    class="w-10 h-10 object-contain rounded-md"
                  />
                  <div class="text-xl font-bold font-ws">
                    PTIPD UIN Sunan Gunung Djati
                    <span class="font-normal text-base">(Internship)</span>
                  </div>
                </div>
                <div class="mt-3 font-ws text-base sm:text-lg">
                  <ul class="list-disc list-inside leading-relaxed">
                    <li>Merancang ERD &amp; Entity Relationship Diagram untuk sistem inventory</li>
                    <li>Mengembangkan REST API menggunakan Express.js &amp; MySQL</li>
                    <li>Berkolaborasi dengan tim IT untuk kebutuhan 10+ lab komputer</li>
                  </ul>
                </div>
                <!-- Link to Related Project -->
                <a
                  href="#projects"
                  @click.prevent="scrollToSection('#projects')"
                  class="link link-primary mt-3 inline-flex items-center gap-1 text-sm font-ws font-medium"
                >
                  <Icon name="tabler:arrow-right-circle" class="w-4 h-4" />
                  Lihat Project: PTIPD Inventory
                </a>
              </div>
              <hr />
            </li>
            <!-- PT. Digital Amore Kriyanesia -->
            <li>
              <hr />
              <div class="timeline-middle">
                <Icon name="tabler:circle-check-filled" class="h-5 w-5 text-primary" />
              </div>
              <div class="timeline-start timeline-box mb-10 md:text-end">
                <div class="flex justify-between items-center flex-wrap gap-2">
                  <time class="font-ws italic text-base">2024 - Now</time>
                  <span class="badge badge-outline font-ws font-medium">Frontend Developer</span>
                </div>
                <div class="flex items-center gap-3 mt-1 justify-between">
                  <img
                    src="/pt-dak-logo.webp"
                    alt="PT. Digital Amore Kriyanesia Logo"
                    class="w-10 h-10 object-contain rounded-md"
                  />
                  <div class="text-xl font-bold font-ws">PT. Digital Amore Kriyanesia</div>
                </div>
                <div class="mt-3 md:ml-3">
                  <ul class="list-disc list-inside md:list-outside font-ws text-base sm:text-lg text-left leading-relaxed">
                    <li>Merancang UI/UX design untuk aplikasi web sektor perbankan</li>
                    <li>Mengembangkan frontend menggunakan Nuxt.js &amp; Tailwind CSS</li>
                    <li>Berkolaborasi dengan tim backend dalam integrasi API dan deployment</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
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
