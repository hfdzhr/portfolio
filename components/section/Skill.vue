<template>
  <section id="skills">
    <div class="min-h-screen pt-4 lg:pt-9">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="divider divider-neutral mb-4 lg:mb-9">
          <h2
            class="text-left text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-ws font-semibold"
          >
            SKILLS
          </h2>
        </div>
        <div
          class="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 my-10 gap-6"
        >
          <AppCardSkill
            v-for="skill in skills"
            :key="index"
            :image-url="skill.imageUrl"
            :alt-text="skill.altText"
            :label="skill.label"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from '~/data/skills'
</script>
