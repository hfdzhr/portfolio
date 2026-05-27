<template>
  <section id="projects">
    <div class="min-h-screen pt-4 lg:pt-10">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="divider divider-neutral mb-4 lg:mb-10">
          <h2
            class="text-left text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-ws font-semibold"
          >
            PROJECTS
          </h2>
        </div>

        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="hero-content flex-col"
          :class="[
            index > 0 ? 'mt-5' : '',
            index % 2 === 0
              ? 'lg:flex-row-reverse'
              : 'lg:flex-row',
            'items-center lg:items-start',
          ]"
        >
          <img
            :src="project.image"
            :alt="project.imageAlt"
            class="w-full max-w-xl shadow-md mb-4 lg:mb-0"
            :class="index % 2 === 0 ? 'lg:ml-8' : ''"
          />
          <div>
            <h2 class="text-3xl font-bold">{{ project.title }}</h2>
            <p
              class="font-ws text-base sm:text-lg mt-5 leading-relaxed text-left"
            >
              {{ project.description }}
            </p>
            <div class="divider"></div>
            <p
              class="font-ws text-base sm:text-lg mt-2 leading-relaxed text-right"
            >
              {{ project.techStack }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '~/data/projects'
</script>
