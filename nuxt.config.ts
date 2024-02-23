// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from 'axios'

export default defineNuxtConfig({
    modules: [
        [
            '@pinia/nuxt',
            {
              autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
        '@nuxt/content',
        '@pinia-plugin-persistedstate/nuxt',
        '@funken-studio/sitemap-nuxt-3'
    ],
    ssr : true,
    sitemap : {
        generateOnBuild: true,
        hostname: 'https://strapi.tokopsikologi.com',
        gzip: true,
        cacheTime: 1000 * 60 * 15,
        routes: async () => {
            const routes = [
                '/', '/contact', '/about', 
                '/products', '/products/price', '/products', 
                '/products/product-1', '/products/product-1/1',
                '/products/product-2', '/products/product-2/2',
                '/products/product-3', '/products/product-3/3',
                '/products/product-4', '/products/product-4/4',
                '/blog', '/blog/gallery'
            ]
            const header = {Authorization : `Bearer 948358d772ea12c3f11e145a56198a7b1943609478b5ebf626b5cea2d2f3fd2f6db4730e86c3b0b4fe6a81e92d0ccbd1dab6310dc417da674dd6c735e8ad51c78c1c4d0908d8450a7727a8573d0b4c3b0b201966e5bd061e843a9337dc0b8981eacdcb5911bddb7233707cf6ebd2af8562a305e8a3db03cf9cd0a3705b69855f`}
            try {
                await axios.get(`https://strapi.tokopsikologi.com/api/articles?fields[0]=id&fields[1]=slug&pagination[pageSize]=500`, {
                    headers : header
                }).
                then(res => {


                    const ids = res.data.data
                    console.log("data res : ", ids)
                    ids.forEach(element => {
                        routes.push(`/blog/${element?.attributes?.slug}`)
                    })
                }).
                catch(err => console.log("failed : ", err))
            } catch (error) {
                console.log("error generate sitemap : ", error)                
            }
            console.log("ROUTES : ", routes)
            return routes
        }
    },
    css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/style.scss", 'aos/dist/aos.css'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/scss/_variables.scss";'
                },
            },
        },
        resolve : {
            alias : {
                'vue-easy-lightbox': 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js',
            }
        }
    },
    app: {
        head:{
            title : 'Assessment Indonesia',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta : [
                {
                    name : 'theme-color',
                    content : '#6EBEBF'
                },
                {
                    name : 'application-name',
                    content : 'Assessment Indonesia'
                },
                {
                    property : 'og:site:name',
                    content : 'Assessment Indonesia'
                },

            ],
            link : [
                {
                    rel : 'icon',
                    href : 'https://assessmentindonesia.com/favicon.ico'
                },
                {
                    rel : 'search',
                    type : 'application/xhtml+xml',
                    title : 'Assessment Indonesia',
                    href : '/sitemap.xml'
                }
            ],
            script : [
                // {
                //     src : 'https://www.googletagmanager.com/gtag/js?id=G-81YMWPZ27R',
                //     async: true,
                //     tagPosition : "head"
                // },
                // {
                //     hid : 'gtmHead',
                //     children : `
                //     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                //     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                //     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                //     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                //     })(window,document,'script','dataLayer','GTM-NBF27JG');
                //     `,
                // },
                
            ],
            noscript : [
                {
                    // children : `
                    // <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NBF27JG"
                    // height="0" width="0" style="display:none;visibility:hidden"></iframe>
                    // `,
                    // tagPosition : "bodyClose" 
                }
            ]
        },
    },
    runtimeConfig : {
        apiToken : '948358d772ea12c3f11e145a56198a7b1943609478b5ebf626b5cea2d2f3fd2f6db4730e86c3b0b4fe6a81e92d0ccbd1dab6310dc417da674dd6c735e8ad51c78c1c4d0908d8450a7727a8573d0b4c3b0b201966e5bd061e843a9337dc0b8981eacdcb5911bddb7233707cf6ebd2af8562a305e8a3db03cf9cd0a3705b69855f',
        public : {
            cmsBaseUrl : 'https://strapi.tokopsikologi.com',
            clientCmsBaseUrl : 'https://strapi.tokopsikologi.com'
        }
    },
    plugins: [
        { src : "@/plugins/aos", ssr: true, mode: "client" },
        { src : "@/plugins/wording", ssr: true},
        { src : "@/plugins/googleAnalytics", ssr: false, mode: "client"},
        { src : "@/plugins/globalErrorReporter", ssr: true},
    ],
    imports : {
        dirs : ['store','assets'],
    },
    content: {
        watch: false,
    },
})
