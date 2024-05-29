// nuxt.config.js
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

  modules: ['@nuxtjs/google-fonts', 'nuxt-icon', "@nuxt/ui"],

  googleFonts: {
    families: {
      Montserrat: {
        wght: [100, 200, 300, 400, 600, 700, 800, 900],
      },
    },
    subsets: ['latin'],
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
  }
});