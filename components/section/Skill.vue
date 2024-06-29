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
            imageUrl="/logos/adonisjs.svg"
            altText="Adonis JS Framework Logo"
            label="Adonis.js"
          />
          <AppCardSkill
            imageUrl="/logos/git.svg"
            altText="Git Logo"
            label="Git"
          />
          <AppCardSkill
            imageUrl="/logos/go.svg"
            altText="Go Programming Logo"
            label="Go"
          />
          <AppCardSkill
            imageUrl="/logos/javascript.svg"
            altText="Javascript Programming Logo"
            label="JavaScript"
          />
          <AppCardSkill
            imageUrl="/logos/laravel.svg"
            altText="Laravel Framework Logo"
            label="Laravel"
          />
          <AppCardSkill
            imageUrl="/logos/mysql.svg"
            altText="MySQL Logo"
            label="MySQL"
          />
          <AppCardSkill
            imageUrl="/logos/nodejs.svg"
            altText="Node.js Runtime Logo"
            label="Node.js"
          />
          <AppCardSkill
            imageUrl="/logos/nuxt.svg"
            altText="Nuxt Framework Logo"
            label="Nuxt"
          />
          <AppCardSkill
            imageUrl="/logos/php.svg"
            altText="PHP Programming Logo"
            label="PHP"
          />
          <AppCardSkill
            imageUrl="/logos/vue.svg"
            altText="Vue.js Logo"
            label="Vue.js"
          />
        </div>
      </div>
    </div>
  </section>
</template>
