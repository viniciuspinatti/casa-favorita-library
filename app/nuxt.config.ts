// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/css/main.css",
    "vue-toast-notification/dist/theme-default.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  components: true,
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
