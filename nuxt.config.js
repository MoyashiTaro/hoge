require("dotenv").config() //一番上に
const client = require("./plugins/contentful")

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'hogehoge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/contentful'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  // 追加　markdownit / generate / env
  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    typography: true,
  },
  generate: {
    fallback: true,
    routes() {
      return client
        .getEntries({ content_type: 'post' })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: "/posts/"+entry.fields.slug,
              payload: entry
            }
          })
        })
    }
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
