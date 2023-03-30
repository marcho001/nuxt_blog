import path from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ],
      link: [],
      style: [],
      script: [],
      noscript: []
    }
  },
  debug: true,
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/content'],
  typescript: {
    strict: true
  }
})
