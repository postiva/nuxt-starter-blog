// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/mdc"
  ],
  colorMode: { classSuffix: "" },
  css: ["@fontsource-variable/inter/index.css"],

  devtools: {
    enabled: true,
  },
});