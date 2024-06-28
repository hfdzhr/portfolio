<template>
  <main>
    <section id="hero">
      <div class="hero min-h-screen relative">
        <div class="hero-content text-center">
          <div class="max-w-lg mx-auto">
            <h1
              class="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-ws font-semibold"
              id="name"
            >
              Hafid Al Azhar
            </h1>
            <p class="py-6 text-sm sm:text-lg font-ws">
              Web Developer | Tech Enthusiast | Student
            </p>
          </div>
        </div>
        <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <Icon
            class="animate-bounce rotate-0"
            name="streamline:interface-arrows-button-down-double-arrow-arrows-double-down"
            size="35px"
          />
        </div>
      </div>
    </section>
    <section id="about">
      <div class="bg-base-200 min-h-screen pt-4 lg:pt-10">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="divider divider-neutral mb-4 lg:mb-10">
            <h2
              class="text-left text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-ws font-semibold"
            >
              ABOUT ME
            </h2>
          </div>
          <div
            class="hero-content flex-col lg:flex-row-reverse items-center lg:items-start"
          >
            <img
              src="../public/person.jpeg"
              class="w-full max-w-sm shadow-2xl mb-4 lg:mb-0 lg:ml-8"
              alt="Hafid Al Azhar Image"
            />
            <div>
              <p
                class="font-ws text-base sm:text-2xl font-normal leading-relaxed text-left"
              >
                I am a passionate web developer and tech enthusiast currently
                pursuing my studies in computer science. With a keen eye for
                detail and a love for coding, I strive to create engaging and
                efficient web applications.
                <br />
                <br />
                My journey in the tech world started at a young age, and since
                then, I have been honing my skills in various programming
                languages and frameworks. I am always eager to learn new
                technologies and take on challenging projects. In my free time,
                I enjoy exploring the latest trends in technology and
                contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <section id="projects">
      <div class="bg-base-200 min-h-screen pt-4 lg:pt-10">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="divider divider-neutral mb-4 lg:mb-10">
            <h2
              class="text-left text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-ws font-semibold"
            >
              PROJECTS
            </h2>
          </div>
          <div
            class="hero-content flex-col lg:flex-row-reverse items-center lg:items-start"
          >
            <img
              src="../public/ptipd-website.webp"
              class="w-full max-w-xl shadow-md mb-4 grayscale transition-all duration-200 hover:grayscale-0 lg:mb-0 lg:ml-8"
              alt="PTIPD Invetory Website"
            />
            <div>
              <h2 class="text-3xl font-bold">PTIPD Inventory</h2>
              <p
                class="font-ws text-base sm:text-lg mt-5 leading-relaxed text-left"
              >
                PTIPD Inventory is an internship project application used to
                manage computer labs at PTIPD UIN Sunan Gunung Djati.
              </p>
              <div class="divider"></div>
              <p
                class="font-ws text-base sm:text-lg mt-2 leading-relaxed text-right"
              >
                Vue.js | Express.js | MySQL
              </p>
            </div>
          </div>
          <div
            class="hero-content mt-5 flex-col lg:flex-row items-center lg:items-start"
          >
            <img
              src="../public/artisanalley-website.webp"
              class="w-full max-w-xl shadow-md mb-4 grayscale transition-all duration-200 hover:grayscale-0 lg:mb-0"
              alt="ArtisanAlley Website"
            />
            <div>
              <h2 class="text-3xl font-bold">ArtisanAlley</h2>
              <p
                class="font-ws text-base sm:text-lg mt-5 leading-relaxed text-left"
              >
                ArtisanAlley is a straightforward ecommerce platform created as
                an internal internship project.
              </p>
              <div class="divider"></div>
              <p
                class="font-ws text-base sm:text-lg mt-2 leading-relaxed text-right"
              >
                Vue.js | Laravel | MySQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="min-h-[80vh] pt-4 lg:pt-10">
        <div class="container mx-auto px-4 lg:px-8">
          <div class="divider divider-neutral mb-4 lg:mb-10">
            <h2
              class="text-left text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-ws font-semibold"
            >
              CONTACT
            </h2>
          </div>
          <Form
            class="font-ws"
            :validation-schema="validationSchema"
            @submit="submit"
          >
            <div class="hero-content flex-col lg:flex-row lg:items-start">
              <div class="w-full mb-4 lg:mb-0 lg:mr-4">
                <Field
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  v-model="fullName"
                  class="input input-bordered input-primary placeholder-black w-full my-2"
                />
                <ErrorMessage name="fullName" />
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  v-model="subject"
                  class="input input-bordered input-primary placeholder-black w-full my-2"
                />
                <ErrorMessage name="subject" />
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  v-model="message"
                  class="textarea textarea-primary placeholder-black my-2 w-full text-base"
                  placeholder="Message"
                ></Field>
                <ErrorMessage name="message" />
                <button
                  type="submit"
                  class="btn my-2 btn-block text-white btn-primary hover:bg-white hover:text-black"
                >
                  Send
                  <Icon
                    name="streamline:interface-arrows-right-arrow-right-keyboard"
                    size="20px"
                  />
                </button>
              </div>
              <div class="w-full mb-4 lg:mb-0 lg:mr-4">
                <h3 class="text-3xl font-medium mb-3">Contact</h3>
                <a
                  class="text-xl font-normal underline underline-offset-7"
                  href="mailto:hafidalazhar5@gmail.com"
                  >hafidalazhar5@gmail.com</a
                >
                <h3 class="text-3xl font-medium mt-10 mb-3">Location</h3>
                <p class="text-xl font-normal">
                  Bandung,
                  <br />
                  Indonesia
                </p>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const myEmail = 'hafidalazhar5@gmail.com';
const fullName = ref('');
const subject = ref('');
const message = ref('');

const validationSchema = toTypedSchema(
  zod.object({
    fullName: zod
      .string()
      .min(1, { message: 'Full Name is required' })
      .max(30, { message: 'Full Name is too long' }),
    subject: zod
      .string()
      .min(1, { message: 'Subject is required' })
      .max(30, { message: 'Subject is too long' }),
    message: zod.string().min(1, { message: 'Message is required' }),
  })
);

const submit = (values) => {
  const mailtoLink = `mailto:${myEmail}?subject=${
    values.subject
  }&body=${encodeURIComponent(
    `From: ${values.fullName}\n\nMessage: ${values.message}`
  )}`;

  window.location.href = mailtoLink;
};
</script>
