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

  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-icon'
  ],

  googleFonts: {
    families: {
      Mali: {
        wght: [400, 600, 700],
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
