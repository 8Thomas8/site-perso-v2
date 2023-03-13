<script lang="ts" setup>
useHead({
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: `https://thomas-rousseau.fr/tools/slugify`
    }
  ]
})

useSeoMeta({
  title: 'Thomas Rousseau - Slugify Tool',
  description:
      "La slugification permet de simplifier les URL pour le référencement naturel. Elle consiste à transformer une chaîne de caractères en un format adapté aux URL en supprimant les caractères spéciaux et les espaces, en convertissant en minuscules et en remplaçant les espaces par des tirets. Découvrez comment faciliter ce processus grâce à nos outils de développement web."
})

const text = ref('')
const slug = ref('')

const onClick = () => {
  try {
    navigator.clipboard.writeText(slug.value)
  } catch (e) {
    console.error("Can't copy to clipboard : ", e)
  }
}

watch(text, (val) => {
  slug.value = slugify(val)
})
</script>

<template>
  <main class="container mx-auto px-4 lg:px-6">
    <div class="my-8 lg:my-14">
      <section class="space-y-10 lg:space-y-16">
        <section class="space-y-2 lg:space-y-4">
          <h1 class="text-center text-4xl font-extrabold text-white lg:text-5xl">Slugify</h1>
          <span
              class="inline-block w-full text-center">Transformez un texte en une chaîne de caractères ne contenant que des mots-clés lisibles par un être humain.</span>

        </section>

        <section>
          <div class="flex flex-wrap justify-center gap-x-4">
            <div class="w-full max-w-xs form-control lg:max-w-lg">
              <label class="label">
                <span class="font-semibold label-text lg:text-lg">Texte à transformer</span>
              </label>
              <input v-model="text" type="text" placeholder="Entrez votre texte"
                     class="w-full max-w-xs input input-bordered lg:max-w-lg"/>
            </div>
            <div class="w-full max-w-xs form-control lg:max-w-lg">
              <label class="label">
                <span class="font-semibold label-text lg:text-lg">Slug</span>
              </label>
              <div class="relative">
                <input ref="slugInput" v-model="slug" readonly type="text" placeholder=""
                       class="w-full max-w-xs pr-12 input input-bordered lg:max-w-lg"/>
                <button @click.prevent="onClick()" class="absolute top-2 right-1 btn btn-sm btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="flex flex-wrap justify-between gap-x-4 gap-y-16">
            <article class="mx-auto prose">
              <p>Slugifier une chaîne de caractères fait référence au processus de transformation d'une chaîne de
                caractères en un format simplifié et adapté aux URL. Cela est généralement fait pour des raisons de
                référencement naturel (SEO), car cela rend les URL plus lisibles et compréhensibles pour les moteurs de
                recherche et les utilisateurs humains.</p>

              <p>La slugification implique généralement la suppression de tous les caractères spéciaux ou espaces de la
                chaîne, la conversion de tous les caractères en minuscules, et le remplacement des espaces par des
                tirets ou des traits de soulignement. Par exemple, la chaîne "Hello World! This is a Sample Text."
                pourrait être slugifiée en "hello-world-this-is-a-sample-text". Les chaînes slugifiées sont souvent
                utilisées comme partie de l'URL pour une page web ou un article de blog.</p>

              <p>La slugification est une pratique courante en développement web, et de nombreux langages de
                programmation et frameworks offrent des fonctions ou des bibliothèques intégrées pour faciliter le
                processus.</p>
            </article>

            <article class="mx-auto prose">
              <p>Slugifying a string refers to the process of transforming a string of characters into a simplified,
                URL-friendly format. This is commonly done for SEO (search engine optimization) purposes, as it makes
                URLs
                more readable and understandable to both search engines and human users.</p>

              <p>Slugifying typically involves removing any special characters or spaces from the string, converting it
                to
                all lowercase, and replacing spaces with hyphens or underscores. For example, the string "Hello World!
                This is a Sample Text." might be slugified as "hello-world-this-is-a-sample-text". Slugified strings are
                often used as part of the URL for a webpage or blog post.</p>

              <p>Slugifying is a common practice in web development, and many programming languages and frameworks offer
                built-in functions or libraries to assist with the process.</p>
            </article>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>