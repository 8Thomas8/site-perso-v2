<script lang="ts" setup>
useHead({
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: `https://thomas-rousseau.fr`
    }
  ]
})
</script>

<template>
  <main class="container mx-auto px-4 lg:px-6">
    <div class="my-8 lg:my-14">
      <section class="space-y-10 lg:space-y-16">
        <section class="space-y-2 lg:space-y-4">
          <section class="flex justify-center">
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src="/images/profil.jpg"/>
              </div>
            </div>
          </section>

          <section class="space-y-2 lg:space-y-4">
            <h1 class="text-center text-4xl font-extrabold text-white lg:text-5xl">Thomas Rousseau</h1>
            <span
                class="inline-block w-full text-center">Je suis Thomas, un développeur frontend basé sur Rennes, en France.</span>
          </section>
        </section>

        <section class="flex justify-center space-x-6">
          <a title="LinkedIn" href="https://www.linkedin.com/in/tomrss/" target="_blank"
             class="duration-200 hover:text-white/80">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 aria-hidden="true">
              <path
                  d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
            </svg>
          </a>

          <a title="Twitter" href="https://twitter.com/Thomas_RSO" target="_blank"
             class="duration-200 hover:text-white/80">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
            </svg>
          </a>

          <a title="Github" href="https://github.com/8Thomas8" target="_blank"
             class="duration-200 hover:text-white/80">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"/>
            </svg>
          </a>
        </section>

      </section>
    </div>
  </main>
</template>
