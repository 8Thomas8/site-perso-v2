<template>
  <section class="hero">
    <div class="w-full mx-auto max-w-5xl">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="assets/images/profil.jpg" class="w-[250px] h-[250px] rounded-lg shadow-2xl"/>
        <div>
          <h1 class="text-5xl font-bold">Thomas Rousseau</h1>
          <p class="pt-6 pb-2">Je suis développeur front end depuis 2019 et je travaille
            principalement avec
            <a href="https://v3.nuxtjs.org/" target="_blank" title="Site NuxtJS"
               class="link link-accent font-semibold">
              <svg class="w-6 h-6 inline" viewBox="0 0 24 24" aria-labelledby="Logo NuxtJS">
                <path fill="currentColor"
                      d="M21.8 18.36L16.03 8.08C15.93 8 15.63 7.43 15.03 7.43C14.78 7.43 14.43 7.53 14.07 8.08L13.33 9.26L11.31 5.65C11.26 5.55 10.91 5 10.31 5C10.06 5 9.66 5.1 9.36 5.65L2.18 18.31C2.13 18.41 1.83 19 2.13 19.5C2.23 19.75 2.53 20 3.19 20H20.85C20.95 20 21.6 20 21.9 19.5C22 19.26 22.1 18.86 21.8 18.36M8.1 18.31L7.95 18.86H3.24L10.36 6.34L12.66 10.47L8.1 18.31M9.21 18.86L13.32 11.66L17.5 18.86H9.21M18.74 18.86L18.54 18.31L14 10.46L15.03 8.73L20.75 18.86H18.74Z"/>
              </svg>NuxtJS</a> (et
            accessoirement
            <a href="https://www.typescriptlang.org/" target="_blank" title="Site VueJS"
               class="link link-accent">
              <svg class="w-7 h-7 inline" viewBox="0 0 24 24" aria-labelledby="Logo VueJS">
                <path fill="currentColor"
                      d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z"/>
              </svg>
            </a>
            , forcement).
          </p>
          <p class="pb-6">Je travaille également avec
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
               title="Site MDN Javascript" class="link link-accent">
              <svg class="w-7 h-7 inline" viewBox="0 0 24 24" aria-labelledby="Logo Javascript">
                <path fill="currentColor"
                      d="M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z"/>
              </svg>
            </a>
            ,
            <a href="https://www.typescriptlang.org/" target="_blank" title="Site Typescript"
               class="link link-accent">
              <svg class="w-7 h-7 inline" viewBox="0 0 24 24" aria-labelledby="Logo Typescript">
                <path fill="currentColor"
                      d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z"/>
              </svg>
            </a>
            et
            <a href="https://jquery.com/" target="_blank" title="Site jQuery"
               class="link link-accent">
              <svg class="w-7 h-7 inline" viewBox="0 0 24 24" aria-labelledby="Logo jQuery">
                <path fill="currentColor"
                      d="M22.88,10.41C20.77,12.18 17.61,11.9 15.84,9.79C14.06,7.67 14.34,4.5 16.45,2.75L16.96,2.37C15.27,4.19 15.16,7.03 16.8,9C18.43,10.94 21.25,11.32 23.34,9.97L22.88,10.41M21.1,14.5C17.93,17.17 13.2,16.76 10.54,13.58C7.87,10.41 8.29,5.68 11.46,3L12.38,2.36C9.96,5.09 9.84,9.26 12.26,12.14C14.68,15 18.8,15.63 21.91,13.72L21.1,14.5M19.97,19.38C15.53,23.11 8.9,22.53 5.17,18.08C1.45,13.64 2.03,7 6.47,3.29L7.58,2.5C4.07,6.3 3.85,12.23 7.28,16.32C10.71,20.4 16.59,21.22 20.96,18.43L19.97,19.38Z"/>
              </svg>
            </a>
            dans des environnements
            <a href="https://symfony.com/" target="_blank" title="Site Symfony"
               class="link link-accent">
              <svg class="w-7 h-7 inline" viewBox="0 0 24 24" aria-labelledby="Logo Symfony">
                <path fill="currentColor"
                      d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.37,5.7V5.7C17.39,5.67 18.15,6.13 18.21,6.84C18.22,7.15 18.04,7.75 17.42,7.77C16.95,7.79 16.63,7.5 16.62,7.09C16.61,6.93 16.88,6.42 16.88,6.33C16.87,6.06 16.47,6.05 16.36,6.06C14.86,6.11 14.46,8.13 14.14,9.78L14,10.65C14.84,10.78 15.46,10.62 15.8,10.4C16.28,10.09 15.66,9.77 15.74,9.41C15.82,9.04 16.15,8.87 16.41,8.86C16.78,8.85 17.04,9.23 17.03,9.62C17,10.26 16.17,11.14 14.5,11.1C14.28,11.1 14.09,11.08 13.91,11.06C13.3,14.16 12.92,16 11.56,17.58C10.39,18.97 9.2,19.18 8.67,19.2C7.67,19.24 7,18.71 7,18C6.97,17.32 7.57,16.94 7.97,16.93C8.5,16.91 8.87,17.3 8.88,17.74C8.9,18.11 8.7,18.23 8.57,18.3C8.5,18.37 8.35,18.45 8.36,18.6C8.36,18.67 8.43,18.82 8.65,18.81C9.07,18.8 9.34,18.59 9.54,18.45C10.5,17.65 10.88,16.24 11.37,13.68C11.63,12.23 11.82,11.3 12.1,10.38C11.42,9.87 11,9.23 10.09,9C9.46,8.81 9.08,8.96 8.81,9.3C8.5,9.71 8.6,10.23 8.9,10.54C10.05,11.82 10.39,12.38 10.26,13.14C10.06,14.35 8.62,15.27 6.92,14.75C5.47,14.3 5.2,13.28 5.37,12.71C5.53,12.22 5.92,12.12 6.31,12.24C6.73,12.37 6.89,12.87 6.77,13.26C6.75,13.3 6.55,13.67 6.5,13.79C6.41,14.1 6.83,14.31 7.12,14.4C7.77,14.6 8.4,14.26 8.55,13.73C8.7,13.25 8.4,12.91 8.27,12.78C7.38,11.8 6.76,10.93 7.06,9.95C7.18,9.58 7.42,9.18 7.78,8.91C8.53,8.36 9.35,8.26 10.12,8.5C11.13,8.77 11.61,9.44 12.24,9.95C12.59,8.93 13.08,7.92 13.81,7.07C14.47,6.3 15.35,5.74 16.37,5.7Z"/>
              </svg>
            </a>
            avec et sans API.
          </p>
          <p class="pb-6">Vous pouvez me contacter via <a href="https://www.linkedin.com/in/tomrss/" class="link link-secondary font-semibold" title="Linkedin" target="_blank">Linkedin</a> ou <a href="https://twitter.com/Thomas_RSO" class="link link-secondary font-semibold" title="Twitter" target="_blank">Twitter</a>.</p>
          <nuxt-link to="cv" title="Consulter mes expériences" class="btn btn-primary">Consulter mes expériences</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
