// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    'sweetalert2/dist/sweetalert2.min.css'],
  runtimeConfig: {
    public: {
      username: process.env.VUE_APP_USERNAME,
      password: process.env.VUE_APP_PASSWORD,
    },
  },   
  
})
