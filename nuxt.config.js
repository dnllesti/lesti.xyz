export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Lesti.xyz',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'og:locale',
        content: 'hu',
      },
      {
        name: 'msapplication-TileColor',
        content: '#ffffff',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        name: 'lang',
        content: 'hu',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: 'https://lesti.xyz/lesti_OG.png',
      },

      {
        hid: 'description',
        name: 'description',
        content: 'Egy lelkes fejlesztő srác, aki szeret hálózatokkal és mindennel foglalkozni ami elektromos.',
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Lesti Dániel',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Lesti Dániel',
      },
            {
        hid: 'og:description',
        name: 'og:description',
        content: 'Egy totál random lelkes fejlesztő srác.',
            },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  router: {
    middleware: 'sidenav',
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/fontawesome'],
  server: {
    host: '0.0.0.0', // default: localhost
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['~/assets/scss/colors.scss'],
  },
  fontawesome: {
    icons: {
      brands: ['faInstagram'],
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  //serverMiddleware: [{ path: '/api', handler: '~/api/rest.js' }],
}