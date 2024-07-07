export default defineAppConfig({
  head: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msapplication-TileColor", content: "#000000" },
      {
        name: "theme-color",
        media: "(prefers-color-scheme: light)",
        content: "#fff",
      },
      {
        name: "theme-color",
        media: "(prefers-color-scheme: dark)",
        content: "#000",
      },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicons/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png",
      },
      { rel: "manifest", href: "/favicons/site.webmanifest" },
      {
        rel: "mask-icon",
        href: "/favicons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    style: [],
    script: [],
    noscript: [],
  },
  metadata: {
    title: "Postiva Nuxt Starter",
    author: "Postiva",
    headerTitle: "Postiva Nuxt Starter",
    description:
      "A starter blog template by Postiva using Nuxt 3 and Tailwind CSS. Ideal for quickly setting up a modern, customizable blog.",
    language: "en-us",
    theme: "dark", // system, dark or light
    siteUrl: "https://nuxt-starter.postiva.app",
    siteRepo: "https://github.com/aliosmandev/postivanuxtblog",
    siteLogo: "/images/logo.png",
    image: "/images/avatar.png",
    socialBanner: "/images/twitter-card.png",
    email: "hello@postiva.app",
    github: "https://github.com/postiva",
    twitter: "https://twitter.com/postivaapp",
    locale: "en-US",
  },
});
