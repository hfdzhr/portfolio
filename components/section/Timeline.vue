<template>
  <section id="timeline">
    <div class="bg-base-200 min-h-screen pt-4 lg:pt-10 pb-4 lg:pb-10">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="divider divider-neutral mb-4 lg:mb-10">
          <h2 class="text-left text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-ws font-semibold">EXPERIENCE</h2>
        </div>

        <div class="relative space-y-10 lg:space-y-16">
          <!-- Timeline vertical line -->
          <div class="absolute left-[7px] lg:left-[11px] top-2 bottom-2 w-0.5 bg-gray-300"></div>

          <!-- Entry 1: SMK Assalaam -->
          <div class="relative flex flex-col md:flex-row gap-4 md:gap-8">
            <div class="flex-shrink-0 w-full md:w-48 pt-1">
              <div class="flex items-center gap-3 md:gap-0">
                <div class="w-[18px] h-[18px] rounded-full bg-black flex-shrink-0 relative z-10 md:mr-6"></div>
                <time class="font-ws font-semibold text-sm sm:text-base tracking-wider">2021 — 2024</time>
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
                <li>Learned fundamentals of programming &amp; OOP</li>
                <li>Built 5+ web projects using JavaScript, HTML, &amp; CSS</li>
                <li>Managed MySQL databases for web-based applications</li>
                <li>Completed team final project with grade A</li>
              </ul>
            </div>
          </div>

          <!-- Entry 2: PTIPD UIN SGD -->
          <div class="relative flex flex-col md:flex-row gap-4 md:gap-8">
            <div class="flex-shrink-0 w-full md:w-48 pt-1">
              <div class="flex items-center gap-3 md:gap-0">
                <div class="w-[18px] h-[18px] rounded-full bg-black flex-shrink-0 relative z-10 md:mr-6"></div>
                <time class="font-ws font-semibold text-sm sm:text-base tracking-wider">2023</time>
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
                <li>Designed ERD &amp; Entity Relationship Diagram for inventory system</li>
                <li>Developed REST API using Express.js &amp; MySQL</li>
                <li>Collaborated with IT team for 10+ computer lab needs</li>
              </ul>
              <a
                href="#projects"
                @click.prevent="scrollToSection('#projects')"
                class="link link-primary inline-flex items-center gap-1 text-sm font-ws font-medium mt-3"
              >
                <Icon name="tabler:arrow-right-circle" class="w-4 h-4" />
                View Project: PTIPD Inventory
              </a>
            </div>
          </div>

          <!-- Entry 3: PT. Digital Amore Kriyanesia -->
          <div class="relative flex flex-col md:flex-row gap-4 md:gap-8">
            <div class="flex-shrink-0 w-full md:w-48 pt-1">
              <div class="flex items-center gap-3 md:gap-0">
                <div class="w-[18px] h-[18px] rounded-full bg-black flex-shrink-0 relative z-10 md:mr-6"></div>
                <time class="font-ws font-semibold text-sm sm:text-base tracking-wider">2024 — Present</time>
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
                  <span class="badge badge-outline font-ws font-medium mt-1">Frontend · Fullstack Developer</span>
                </div>
              </div>
              <ul class="list-disc list-inside font-ws text-base sm:text-lg leading-relaxed space-y-1 mt-3">
                <li>Designed UI/UX for banking sector web applications</li>
                <li>Developed frontend using Nuxt UI &amp; Tailwind CSS</li>
                <li>Built and integrated backend services with Laravel</li>
                <li>Collaborated with team on API integration and deployment</li>
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
