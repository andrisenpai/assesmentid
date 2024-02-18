<template>
    <Head>
      <Title>Price | Assessment Indonesia</Title>
    </Head>
    <NuxtErrorBoundary>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <Breadcrumb :activeText="activeLink" :pageTitle="title" link="products/price"/>
        <CardPrice :products="products" :btnWord="btnWord" :priceWord="priceWord"/>
        <FooterNew/>
        <FooterSimple/>
    </div>
    </NuxtErrorBoundary>
</template>

<script lang="ts" >
import Aos from 'aos'

    export default defineComponent({
        async setup(){
            const [
                {data : productItem},
                {data : footerItem}
            ] = await Promise.all([
                useFetch('/api/productPage'),
                useFetch('/api/footer') 
            ])

            const title = productItem.value.attributes.title
            const activeLink = productItem.value.attributes.active_text
            const products = productItem.value.attributes.products
            const btnWord = productItem.value.attributes.btn_word
            const priceWord = productItem.value.attributes.price_word
            const footers = {
                address : footerItem.value.attributes.address,
                copyright : footerItem.value.attributes.copyright,
                email_1 : footerItem.value.attributes.email_1,
                email_2 : footerItem.value.attributes.email_2,
                facebook : footerItem.value.attributes.facebook,
                instagram : footerItem.value.attributes.instagram,
                no_telepon : footerItem.value.attributes.no_telepon,
                twitter : footerItem.value.attributes.twitter,
                wa_1 : footerItem.value.attributes.wa_1,
                wa_2 : footerItem.value.attributes.wa_2,
            }
            

            return {
                footers,
                title,
                activeLink,
                products,
                btnWord,
                priceWord
            }
        },
        mounted(){
            Aos.init()
            window.scroll({
                top: 0,
                behavior: "smooth",
            })
        }
    })

    
</script>

