<script setup lang="ts"></script>

<template>
  <section id="certificate">
    <div class="bg-base-200 min-h-[1vh] lg:min-h-[80vh] pt-4 lg:pt-10">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="divider divider-neutral mb-4 lg:mb-10">
          <h2
            class="text-left text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-ws font-semibold"
          >
            CERTIFICATION
          </h2>
        </div>
        <div
          class="hero-content flex-col lg:flex-row-reverse items-center lg:items-start"
        >
          <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :initialSlide="1"
            :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }"
            :pagination="{
              bulletActiveClass: 'false',
              bulletClass: 'false',
            }"
            :modules="[SwiperEffectCoverflow, SwiperPagination]"
            class="mySwiper"
          >
            <swiper-slide
              ><img
                src="/bisaai-nodejs-certificate.webp"
                alt="Bisa AI Node JS Certificate Image"
              />

              <figcaption class="text-center mt-1 font-ws text-sm md:text-base">
                BISA.AI Node JS Certificate
              </figcaption>
            </swiper-slide>
            <swiper-slide
              ><img
                src="/codepolitan-python-certificate.webp"
                alt="CodePolitan Python Certificate Image"
              />
              <figcaption class="text-center mt-1 font-ws text-sm md:text-base">
                CodePolitan Python Certificate
              </figcaption> </swiper-slide
            ><swiper-slide
              ><img
                src="/ptipd-uinsgd-certificate.webp"
                alt="PTIPD UIN Sunan Gunung Djati Intern Certificate Image "
              />
              <figcaption class="text-center mt-1 font-ws text-sm md:text-base">
                UIN SGD Intern Certificate
              </figcaption>
            </swiper-slide>
            ><swiper-slide
              ><img
                src="/plabs-certificate.webp"
                alt="PLABS.ID Skill Competency Test Certificate Image "
              />
              <figcaption class="text-center mt-1 font-ws text-sm md:text-base">
                PLABS.ID Skill Competency Test
              </figcaption>
            </swiper-slide>
            >
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swiper {
  width: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

@media (min-width: 768px) {
  .swiper-slide {
    width: 400px;
    height: 400px;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
