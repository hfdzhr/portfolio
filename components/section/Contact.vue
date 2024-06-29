<template>
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
