<template>
    <Head>
      <Title>{{ priceItem?.value?.attributes?.title }} | Assessment Indonesia</Title>
    </Head>
    <NuxtErrorBoundary>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <Loading v-if="pendingAddOn || pendingPriceItem"/>
        <AssessmentService v-else :serviceProps="priceItem" :idProps="id" :addOnProps="addOnsItem"/>
        <FooterSimple/>
    </div>
    </NuxtErrorBoundary>
</template>

<script lang="js">
    export default { 
        async setup(){
            const {product_id} = useRoute().params
            const id = parseInt(product_id)
            const url = `/api/servicePrice?id=${id-1}`
            
            const [
                {data : priceItem, pending: pendingPriceItem},
                {data : addOnsItem, pending : pendingAddOn},
            ] = await Promise.all([
                useFetch(url),
                useFetch(`/api/addOn?filter=${id}`)
            ])


            return {
                id,
                priceItem,
                addOnsItem,
                pendingPriceItem,
                pendingAddOn,
            }
        },
    }
</script>