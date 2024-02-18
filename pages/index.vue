<template>
    <NuxtErrorBoundary>
    <div class="main-container">
        <Loading v-if="loading"/>
        <div v-else >
            <TheHeader />
            <OffCanvasMobileMenu />
            <HeroOne :heros="bannerList" />
            <AboutOne :about="aboutData"/>
            <Features :featureProps="features" :title="featureTitle"/>
            <GalleryOne :title="productTitle" :subtitle="productSubtitle" :products="productList" />
            <Order :orders="orders" :title="orderTitle" :subtitle="orderSubtitle"/>
            <BlogStyleOne :blogs="articleList" :title="articleTitle" :subtitle="articleSubtitle" />
            <FooterNew/>
            <FooterSimple/>
        </div>
    </div>
    </NuxtErrorBoundary>
</template>

<script lang="ts">
import Aos from 'aos'
import { transformDate } from '~~/utils/helper'

export default {
        async setup(){
            const loading = ref(false)
            const footerStore = useFooterStore()
            const aboutStore = useAboutStore()
            
            const {
                language, 
            } = useNavigationStore()                
            
            const articleStore = useArticleStore()
            const productStore = useProductStore()
            
            const {
                addProduct,
                productList,
             } = productStore
            
             const {
                addArticle, articleList, 
            } = articleStore
            
            const footers = footerStore.$state
            const aboutData = aboutStore.$state
            const config = useRuntimeConfig()
            
            var bannerList : BannerType[] = []
                
            loading.value = true
            
            const [
                {data : banners},
                {data, pending: pendingData}, 
                {data : articlesItem, pending : pendingArticle},
            ] = await Promise.all([
                useFetch('/api/homeBanners'),
                useFetch('/api/home', {
                    params: {locale : `${language}`}
                }),
                useFetch('/api/articles?sort=publishedAt%3Aasc&pagination[page]=1&pagination[pageSize]=4&populate=deep,2'),
            ])
            
            footerStore.$patch({
                address : data.value.attributes.footer.address,
                copyright : data.value.attributes.footer.copyright,
                email_1 : data.value.attributes.footer.email_1,
                email_2 : data.value.attributes.footer.email_2,
                facebook : data.value.attributes.footer.facebook,
                instagram : data.value.attributes.footer.instagram,
                no_telepon : data.value.attributes.footer.no_telepon,
                twitter : data.value.attributes.footer.twitter,
                wa_1 : data.value.attributes.footer.wa_1,
                wa_2 : data.value.attributes.footer.wa_2,
            })

            banners.value.forEach((data : any) => {
                bannerList.push({
                    id : data.id,
                    background : config.public.clientCmsBaseUrl + data.attributes?.background?.data?.attributes?.url,
                    title_1 : data.attributes?.title_1,
                    title_2 : data.attributes?.title_2,
                    subtitle : data.attributes?.subtitle,
                    currency : data.attributes?.currency,
                    price : data.attributes?.price,
                    text_info : data.attributes?.text_info,
                    phone_numbers : data.attributes?.phone_numbers,
                    points : data.attributes?.points,
                })
            });

            aboutStore.$patch({
                title : data.value.attributes.about_us.title,
                subtitle : data.value.attributes.about_us.subtitle,
                paragraph : data.value.attributes.about_us.description,
                sideImage : config.public.clientCmsBaseUrl + data.value.attributes.about_us.image.data[0].attributes.url,
                sideImage2 : config.public.clientCmsBaseUrl + data.value.attributes.about_us.image.data[1].attributes.url
            })

            const features = [] as any[]
            const featureFetched = data.value.attributes.feature.features
            featureFetched.forEach((value : any) => {
                features.push(
                    {
                        id : value.id,
                        title : value.title,
                        description : value.description,
                        icon : config.public.clientCmsBaseUrl +  value.icon.data.attributes.url
                    }
                )
            })
            
            const orders = [] as any[]
            const ordersFetched = data.value.attributes.order
            console.log(orders)
            ordersFetched.forEach((value : any) => {
                orders.push(
                    {
                        title : value.title,
                        text : value.button,
                        link : value.link_button,
                        src : config.public.clientCmsBaseUrl + value.img.data.attributes.url
                    }
                )
            })
            
            
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            articlesItem.value.articleList.forEach((value : any) => {
                addArticle({
                    id : value.id,
                    title : value.attributes.title,
                    category : value.attributes?.article_category.data.attributes.title,
                    imageUrl : config.public.clientCmsBaseUrl + value.attributes.image_thumbnail_small.data.attributes.url,
                    publishedDate : transformDate(value.attributes.publishedAt),
                    slug : value.attributes.slug
                })
            })

            const productFethed = data.value.attributes.product
            productFethed.products.forEach((value : any) => {
                addProduct({
                    title : value.title,
                    subtitle : value.subtitle,
                    imageUrl : config.public.clientCmsBaseUrl +  value.imgSrc.data.attributes.url
                })
            })

            const articleTitle = data.value.attributes.article_section_title
            const articleSubtitle = data.value.attributes.article_section_subtitle
            const featureTitle = data.value.attributes.feature.section_title
            const orderTitle = data.value.attributes.order_section_title
            const orderSubtitle = data.value.attributes.order_section_subtitle
            const productTitle = productFethed.section_title
            const productSubtitle = productFethed.section_subtitle

            return {
                footers,
                aboutData,
                features,
                articleList,
                articleTitle,
                articleSubtitle,
                featureTitle,
                productTitle,
                productSubtitle,
                productList,
                language,
                orders,
                orderTitle,
                orderSubtitle,
                pendingData,
                pendingArticle,
                loading,
                bannerList
            }
        },
        data(){
            return {
                img1 : false,
                img2 : false,
                img3 : false
            }
        },
        methods : {
            preloadImage(url : string, option : number) {
                const image = new Image()
                image.src = url
                image.onload = () => {this.handleLoadImage(option)}
            },
            handleLoadImage(option : number){
             switch (option) {
                case 1:
                    this.img1 = true
                    break;
                case 2:
                    this.img2 = true
                    break;
                case 3:
                    this.img3 = true
                    break;
                default:
                    break;
             }

             if(this.img1 && this.img2 && this.img3){
                this.handleLoading()
             }
            },
            handleLoading(){
                this.loading = false
            }
        },
        async mounted(){
            try {
                Aos.init()                            
                window.scroll({
                    top: 0,
                    behavior: "smooth",
                })  
            } catch (error) {
                console.log("failed : ", error) 
            }

            try {
                this.bannerList.map((hero, index) => {
                    const num = index + 1
                    this.preloadImage(hero.background, num)
                    console.log(`url ${num} : ${hero.background}`)
                })
            } catch (error) {
                console.log("error preload : ", error)
            }
            this.loading = false
        }
    } 
</script>


