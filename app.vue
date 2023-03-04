<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
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
    <Html lang="fr" data-theme="emerald"/>
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com"/>
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <Link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
          media="print"
          onload="this.onload=null;this.media='all'"/>
    </Head>
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
  @apply font-opensans;
}
</style>
