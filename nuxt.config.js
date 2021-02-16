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
        content:
          'Egy lelkes fejlesztő srác, aki szeret hálózatokkal és mindennel foglalkozni ami elektromos.',
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

  css: [],
  router: {},
  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/fontawesome'],
  server: {
    host: '0.0.0.0', // default: localhost
  },
  pwa: {
    meta: {
      lang: 'hu',
      author: 'Lesti Dániel',
      theme_color: '#ffffff',
      favicon: true,
      name: 'lesti.xyz',
    },
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    ['nuxt-matomo', { matomoUrl: '//server.lesti.xyz/', siteId: 2 }],
  ],
  styleResources: {
    scss: ['~/assets/scss/colors.scss'],
  },
  fontawesome: {
    icons: {
      brands: ['faInstagram'],
    },
  },

  build: {},
}