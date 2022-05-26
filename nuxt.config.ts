import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  css: ["@/assets/css/styles.css",
        "primevue/resources/themes/saga-blue/theme.css", //theme
        "primevue/resources/primevue.min.css", //core css
        "primeicons/primeicons.css" //icons

],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
})