<template>
  <section id="timeline">
    <div class="min-h-screen pt-4 lg:pt-10">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="divider divider-neutral mb-4 lg:mb-10">
          <h2 class="text-left text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-ws font-semibold">Timeline</h2>
        </div>
        <div class="">
          <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-start timeline-box mb-10 md:text-end">
                <div class="flex justify-between items-center">
                  <time class="font-mono italic">2021 - 2024</time>
                </div>
                <div class="flex items-center gap-3 mt-1 justify-beetween">
                  <img src="/smk-assalaam-logo.webp" alt="SMK Assalaam Bandung Logo" class="w-10 h-10 object-contain rounded-md" />
                  <div class="text-lg font-bold">SMK Assalaam Bandung</div>
                </div>
                <div class="flex items-center md:justify-end mt-1 md:ml-3">
                  <ul class="list-disc list-inside md:list-outside font-ws text-left">
                    <li>Dasar pemrograman & OOP</li>
                    <li>Web development (JS, HTML, CSS)</li>
                    <li>Database management (MySQL)</li>
                    <li>Project berbasis tim</li>
                  </ul>
                </div>
              </div>

              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box md:mb-10">
                <div class="flex justify-between items-center">
                  <time class="font-mono italic">2023</time>
                  <span class="badge badge-outline font-medium font-sans">Backend Developer</span>
                </div>
                <div class="flex items-center mt-1 gap-3 md:justify-end">
                  <img src="/ptipd-uin-sgd-logo.webp" alt="PTIPD UIN Sunan Gunung Djati Logo" class="w-10 h-10 object-contain rounded-md" />
                  <div class="text-lg font-bold">
                    PTIPD UIN Sunan Gunung Djati
                    <span class="font-medium">(Internship)</span>
                  </div>
                </div>
                <div class="flex items-center md:justify-start mt-1 font-ws">
                  <ul class="list-disc list-inside">
                    <li>Merancang ERD & ER Diagram</li>
                    <li>Mengembangkan API & Backend</li>
                    <li>Berkoordinasi dengan tim</li>
                  </ul>
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-start timeline-box mb-10 md:text-end">
                <div class="flex justify-between items-center">
                  <time class="font-mono italic">2024 - Now</time>
                  <span class="badge badge-outline font-medium font-sans">Frontend Developer</span>
                </div>
                <div class="flex items-center gap-3 mt-1 justify-beetween">
                  <img src="/pt-dak-logo.webp" alt="PT. Digital Amore Kriyanesia Logo" class="w-10 h-10 object-contain rounded-md" />
                  <div class="text-lg font-bold">PT. Digital Amore Kriyanesia</div>
                </div>
                <div class="flex items-center md:justify-end mt-2 md:ml-3">
                  <ul class="list-disc list-inside md:list-outside font-ws text-left">
                    <li>Merancang desain UI & UX</li>
                    <li>Pengembangan web untuk perbankan</li>
                    <li>Berkolaborasi dengan tim backend</li>
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
