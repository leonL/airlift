// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/icon', '@nuxt/ui', '@pinia/nuxt'],
  runtimeConfig: {
    airtableApiKey: 'env'
  }
})