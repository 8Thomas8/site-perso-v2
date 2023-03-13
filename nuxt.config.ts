// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/plausible',
        'nuxt-og-image',
        'nuxt-schema-org',
        '@nuxt/devtools'
    ],
    schemaOrg: {
        host: 'https://thomas-rousseau.fr/'
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    }
})
