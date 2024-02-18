<template>
    <Head>
      <Title>{{ title }} | Assessment Indonesia</Title>
    </Head>
    <NuxtErrorBoundary>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <ProductOne :md="parsedMarkdown" :title="title" :cover="cover"/>
        <CallToAction :id-props="id" :cta-props="cta"/>
        <!-- <FooterNew/> -->
        <FooterSimple/>
    </div>
    </NuxtErrorBoundary>
</template>

<script lang="js">
    import Aos from 'aos'
    import markdownParser from '@nuxt/content/transformers/markdown'

    export default {
        async setup(){
            const config = useRuntimeConfig()
            const { id } = useRoute().params

            try {
                const page = parseInt(id)
                if(page > 4){
                    throw createError({statusCode: 404, statusMessage: "[PRODUCT-ID] : page not found"})
                }
            } catch (error) {
                throw createError({statusCode: 404, statusMessage: "[PRODUCT-ID] : page not found"})
            }

            const [
                {data},
                {data : details},
                {data : productDesc}
            ] = await Promise.all([
                useFetch('/api/footer'),
                useFetch(`/api/productDetail?id=${id}`),
                useFetch('/api/productPageDesc'),
            ])

            if(!data.value || !details.value || !productDesc.value){
                throw createError({statusCode: 404, statusMessage: "[PRODUCT-ID] : page not found"})
            }

            const productDetails = details.value.attributes.content
            const title = details.value.attributes.title
            const cover = config.public.clientCmsBaseUrl + details.value.attributes.cover.data.attributes.url

            const cta = {
                    title : productDesc.value.attributes.cta_title,
                    subtitle: productDesc.value.attributes.cta_subtitle,
                    btnText: productDesc.value.attributes.cta_title_btn,
                }

            const footers = {
                address : data.value.attributes.address,
                copyright : data.value.attributes.copyright,
                email_1 : data.value.attributes.email_1,
                email_2 : data.value.attributes.email_2,
                facebook : data.value.attributes.facebook,
                instagram : data.value.attributes.instagram,
                no_telepon : data.value.attributes.no_telepon,
                twitter : data.value.attributes.twitter,
                wa_1 : data.value.attributes.wa_1,
                wa_2 : data.value.attributes.wa_2,
            }
            const parsedMarkdown = await markdownParser.parse( '<some-id>', productDetails)
                
            return {
                cta,
                productDetails,
                footers,
                parsedMarkdown,
                title,
                cover,
                id,
            }
        },
        mounted(){
            Aos.init()
            window.scroll({
                top: 0,
                behavior: "smooth",
            })
        }
    };
</script>