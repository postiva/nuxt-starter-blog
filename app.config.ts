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
    title: "Nuxt.js Starter Blog",
    author: "aliosmandev",
    headerTitle: "PostivaNuxtBlog",
    description: "A blog created with Nuxt.js and Tailwind.css",
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
    facebook: "https://facebook.com/postivaapp",
    youtube: "https://youtube.com/postivaapp",
    linkedin: "https://www.linkedin.com/company/postiva",
    locale: "en-US",
  },
  analytics: {
    umamiWebsiteId: "", // e.g. 123e4567-e89b-12d3-a456-426614174000
  },
});
