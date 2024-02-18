<template>
    <Head>
      <Title>Assessment Kompetensi | Assessment Indonesia</Title>
    </Head>
    <NuxtErrorBoundary>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <AssessmentKompetensi :serviceProps="priceItem" :idProps="id" :addOnProps="addOnsItem"/>
        <FooterSimple/>
    </div>
    </NuxtErrorBoundary>
</template>

<script lang="js">

    export default {
        data(){
            const pending = true
            return {
                pending
            }
        },  
        async setup(){
            const id = 1
            const url = `/api/servicePrice?id=${id}`
            const [
                {data : priceItem, pending: pendingPriceItem},
                {data : addOnsItem, pending : pendingAddOn},
            ] = await Promise.all([
                useFetch(url),
                useFetch(`/api/addOn?filter=${id+1}`)
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