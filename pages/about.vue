<template>
    <Head>
      <Title>About | Assessment Indonesia</Title>
    </Head>
    <NuxtErrorBoundary>
        <div class="main-container">
            <TheHeader />
            <OffCanvasMobileMenu />
            <BannerOne :title="bannerTitle"  :imageUrl="bannerImage"/>
            <AboutTwo :list="aboutList" />
            <FooterNew/>
            <FooterSimple/>
        </div>
    </NuxtErrorBoundary>
</template>

<script lang="ts" >
import Aos from 'aos'

    export default {
        async setup(){
            const config = useRuntimeConfig()
            const aboutStore = useAboutStore()
            const {language} = useNavigationStore()
            const {
                aboutList,
                addAboutList,
            } = aboutStore

            if(aboutList.length === 0){
                const [
                    {data : content},
                ] = await Promise.all([
                    useFetch('/api/aboutPage',{
                        params: {locale : `${language}`}
                    })
                ])
                
                aboutStore.$state.bannerTitle = content.value.attributes.banner_title
                aboutStore.$state.bannerImage = config.public.clientCmsBaseUrl + content.value.attributes.banner_img.data.attributes.url 
                const contents = content.value.attributes.content
                contents.forEach((value : any) => {
                    addAboutList({
                        title : value.title,
                        subtitle : value.subtitle,
                        paragraph : value.description,
                        sideImage : config.public.clientCmsBaseUrl + value.image.data[0].attributes.url
                    })
                })
            }
            
            const bannerTitle = aboutStore.$state.bannerTitle
            const bannerImage = aboutStore.$state.bannerImage            
            return {
                aboutList,
                bannerImage,
                bannerTitle,
            }
        },
        mounted(){
            Aos.init()
            window.scroll({
                top: 0,
                behavior: "smooth",
            })
        }
    }

    
</script>

