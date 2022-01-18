const Prismic = require('prismic-javascript');
const prismicEndpoint = 'https://2gether-international.cdn.prismic.io/api/v2';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  head: {
    title: '2Gether-International',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We are flipping the disability narrative. We work to unleash the entrepreneurial mindset of disabled people.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' }
    ]
  },

  generate:{
    routes: async function() {
      const client = await Prismic.api(prismicEndpoint, (err, api) => api);

      async function fetchDocs(page = 1, routes = []) {
        const response = await client.query('', {
          pageSize: 100,
          lang: '*',
          page
        });

        const allRoutes = routes.concat(response.results);

        if (response.results_size + routes.length < response.total_results_size) {
          return fetchDocs(page + 1, allRoutes);
        }

        return [...new Set(allRoutes)];
      };

      const allRoutes = await fetchDocs();

      const linkResolver = (doc) => {
        if (doc.isBroken) {
          return '/'
        }
      
        if (doc.type === 'homepage') {
          return '/'
        }
      
        if (doc.type === 'page') {
          return '/pages/' + doc.uid
        }
      
        if (doc.type === 'member') {
          return '/our-members/' + doc.uid
        }
      
        if (doc.type === 'blog_post') {
          return '/our-blog/' + doc.uid
        }
      
        return '/'
      }

      return allRoutes.map(linkResolver)
    },
    fallback: '404.html'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  prismic: {
    endpoint: prismicEndpoint,
    modern: true,
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
  },
}
