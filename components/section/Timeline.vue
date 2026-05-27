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

          <!-- Entry loop -->
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="relative flex flex-col md:flex-row gap-4 md:gap-8"
          >
            <!-- Left: period + dot -->
            <div class="flex-shrink-0 w-full md:w-48 pt-1">
              <div class="flex items-center gap-3 md:gap-0">
                <div class="w-[18px] h-[18px] rounded-full bg-black flex-shrink-0 relative z-10 md:mr-6"></div>
                <time class="font-ws font-semibold text-sm sm:text-base tracking-wider">{{ exp.period }}</time>
              </div>
            </div>

            <!-- Right: content -->
            <div class="flex-1 ml-8 md:ml-0">
              <div class="flex items-center gap-3 mb-2">
                <img
                  :src="exp.logo"
                  :alt="exp.logoAlt"
                  class="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-md"
                />
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold font-ws">{{ exp.company }}</h3>
                  <span
                    v-if="exp.badge"
                    class="badge badge-outline font-ws font-medium mt-1"
                  >
                    {{ exp.badge }}
                  </span>
                </div>
              </div>

              <ul class="list-disc list-inside font-ws text-base sm:text-lg leading-relaxed space-y-1 mt-3">
                <li v-for="(point, i) in exp.points" :key="i">{{ point }}</li>
              </ul>

              <a
                v-if="exp.projectLink"
                :href="exp.projectLink.href"
                @click.prevent="scrollToSection(exp.projectLink.href)"
                class="link link-primary inline-flex items-center gap-1 text-sm font-ws font-medium mt-3"
              >
                <Icon name="tabler:arrow-right-circle" class="w-4 h-4" />
                {{ exp.projectLink.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experiences } from '~/data/experience'

function scrollToSection(id) {
  const element = document.querySelector(id)
  const offset = 68
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }
}
</script>
