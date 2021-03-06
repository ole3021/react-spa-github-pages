import meta from './meta'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: meta.name,
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.0.0/js/all.js'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: meta.description },
      { hid: 'keywords', name: 'keywords', content: meta.keywords }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3D5AFE',
    failedColor: 'red',
    height: '5px',
    throttle: 200
  },

  /*
   ** Global CSS
   */
  css: ['bulma', '@/assets/sass/theme.sass', '@/assets/sass/main.sass'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/image-redirect.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/redirect-module'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    middleware: ['static-content']
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
