// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/style/tailwind/tailwind.css',
        '~/style/global/styles.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Montserrat: true,
    },
    prefetch: true,
    preload: true
  }
})