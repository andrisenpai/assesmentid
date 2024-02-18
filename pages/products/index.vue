<template>
    <Head>
      <Title>Products | Assessment Indonesia</Title>
    </Head>
    <NuxtErrorBoundary>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <Breadcrumb :activeText="pageSuppot.attributes.active_link_text" :pageTitle="pageSuppot.attributes.title" link="products"/>
        <ProductsWrapper :blogs="blogs" :btnTxt="pageSuppot.attributes.btn_full_article"/>
        <FooterNew/>
        <FooterSimple/>
    </div>
    </NuxtErrorBoundary>
</template>

<script lang="js" >
import Aos from 'aos'
import ProductsWrapper from '~~/components/ProductsWrapper.vue';


    export default defineComponent({
        async setup() { 
            const config = useRuntimeConfig()
            const [
                { data },
                { data : products },
                { data : pageSuppot }
            ] = await Promise.all([
                useFetch("/api/footer"),
                useFetch("/api/productsThumbnail"),
                useFetch("/api/productListPage")
            ]);
            const footers = {
                address: data.value.attributes.address,
                copyright: data.value.attributes.copyright,
                email_1: data.value.attributes.email_1,
                email_2: data.value.attributes.email_2,
                facebook: data.value.attributes.facebook,
                instagram: data.value.attributes.instagram,
                no_telepon: data.value.attributes.no_telepon,
                twitter: data.value.attributes.twitter,
                wa_1: data.value.attributes.wa_1,
                wa_2: data.value.attributes.wa_2,
            };

            const blogs = []

            products.value.forEach((value) => {
                blogs.push({
                    id : value.id,
                    title : value.attributes.title,
                    subtitle : value.attributes.subtitle,
                    desc : value.attributes.sinopsis,
                    imgSrc : config.public.clientCmsBaseUrl + value.attributes.thumbnail.data.attributes.url
                })
            });

            return {
                footers,
                blogs,
                pageSuppot,
            };
        },
        mounted() {
            Aos.init();
            window.scroll({
                top: 0,
                behavior: "smooth",
            })
        },
        components: { ProductsWrapper }
    })
</script>


