<template>
  <header>
    <div class="fixed top-0 left-0 right-0 bg-white z-50">
      <div class="container mx-auto px-1 lg:px-8">
        <div class="navbar">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content font-ws bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="#about" @click.prevent="scrollToSection('#about')"
                    >About</a
                  >
                </li>
                <li>
                  <a href="#skills" @click.prevent="scrollToSection('#skills')"
                    >Skills</a
                  >
                </li>
                <li>
                  <a
                    href="#projects"
                    @click.prevent="scrollToSection('#projects')"
                    >Projects</a
                  >
                </li>
                <li>
                  <a
                    href="#contact"
                    @click.prevent="scrollToSection('#contact')"
                    >Contact</a
                  >
                </li>
              </ul>
            </div>
            <a
              href="#hero"
              @click.prevent="scrollToSection('#hero')"
              class="text-3xl font-bold font-ws"
              >Hafid.</a
            >
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal font-ws px-1 font-medium">
              <li>
                <a href="#about" @click.prevent="scrollToSection('#about')"
                  >About</a
                >
              </li>
              <li>
                <a href="#skills" @click.prevent="scrollToSection('#skills')"
                  >Skills</a
                >
              </li>
              <li>
                <a
                  href="#projects"
                  @click.prevent="scrollToSection('#projects')"
                  >Projects</a
                >
              </li>
              <li>
                <a href="#contact" @click.prevent="scrollToSection('#contact')"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
          <div class="navbar-end">
            <button
              @click="downloadCV"
              class="btn btn-primary font-ws hover:bg-white hover:text-black"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
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

function downloadCV() {
  const fileUrl = 'cv_hafid_al_azhar.pdf';
  const fileName = 'CV HAFID AL AZHAR.pdf';

  fetch(fileUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const fileURL = URL.createObjectURL(blob);

      const downloadLink = document.createElement('a');
      downloadLink.href = fileURL;
      downloadLink.download = fileName;

      downloadLink.click();

      URL.revokeObjectURL(fileURL);
    })
    .catch((error) => {
      console.error('Error downloading CV:', error);
    });
}
</script>
