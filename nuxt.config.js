module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: '{{ name }}',
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }, {
            hid: 'description',
            name: 'description',
            content: '{{ description }}'
        }],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.png'
        }]
    },
    css: [
        '@/assets/css/main.scss'
    ],
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: 'black'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        // extend(config, {
        //     isDev,
        //     isClient
        // }) {
        //     if (isDev && isClient) {
        //         config.module.rules.push({
        //             enforce: 'pre',
        //             test: /\.(js|vue)$/,
        //             loader: 'eslint-loader',
        //             exclude: /(node_modules)/
        //         })
        //     }
        // },
        vendor: ['axios']
    },
    plugins: [{
        src: '~/plugins/vue-carousel',
        ssr: false
    }, {
        src: '~/plugins/vue-masonry',
        ssr: false
    }]
}