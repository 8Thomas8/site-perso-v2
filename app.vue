<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'fr',
    'data-theme': 'dark'
  },
  link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
      {rel: 'stylesheet', media: 'print', onload:'this.onload=null;this.media="all"', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap'},
  ]
})
useSeoMeta({
  title: 'Thomas Rousseau - Site web',
  description:
      "Bienvenue sur le site personnel de Thomas Rousseau, développeur frontend, javascript, typescript, NuxtJS et VueJS."
})
defineOgImageScreenshot({
  alt: 'Thomas Rousseau - Site web'
})
useSchemaOrg([
  defineOrganization({
    name: 'Thomas Rousseau'
  }),
  defineWebSite({
    name: 'Thomas Rousseau - Site web'
  }),
  defineWebPage()
])
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
body {
  @apply font-roboto;
}

h1, h2, h3, h4, h4, h5, h6 {
  @apply font-poppins;
}
</style>
