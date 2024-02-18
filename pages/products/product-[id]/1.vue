<template>
    <Head>
      <Title>Assessment Potensi | Assessment Indonesia</Title>
    </Head>
    <NuxtErrorBoundary>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <Loading v-if="pendingPage && pendingPrice && pendingAddOn"/>
        <div v-else>
            <AssessmentPotensi :assessmentPotensi="assessmentPotensi" :addOnProps="addOnList" :dataProps="prices" :groupsProps="groups"/>
            <FooterSimple/>
        </div>
    </div>
    </NuxtErrorBoundary>
</template>

<script lang="js">
import { storeToRefs } from 'pinia'

    export default {
        async setup(){
            const productStore = useProductStore()
            const {basis, groups, assessmentPotensi} = storeToRefs(productStore)
            const setAssessmentPotensi = productStore.setAssessmentPotensi
            const prices = []
            const addOnList = []
            const [
                {data : potensiItem, pending : pendingPage},
                {data : priceItem, pending : pendingPrice},
                {data : addOnsItem, pending : pendingAddOn}
            ] = await Promise.all([
                useFetch('/api/potensiPage'), 
                useFetch(`/api/potensiPrice`),
                useFetch(`/api/addOn`)
            ])

            priceItem.value?.forEach((element => {
                prices.push(element)
            }))

            addOnsItem.value?.forEach((element) => {
                const services = element.attributes?.services.data
                services.forEach(value => {
                    if(value.attributes.name === "assessment potensi"){
                        addOnList.push(element)
                    } 
                })
            })
            
            const title = potensiItem.value.attributes?.title
            const subtitle = potensiItem.value.attributes?.subtitle
            const textCategories = potensiItem.value.attributes?.text_categories
            const tableHead = potensiItem.value.attributes?.table_head
            const buttonDownload = potensiItem.value.attributes?.button_link
            const addOns = potensiItem.value.attributes?.adds
            const otherText = potensiItem.value.attributes?.information_text
            const onlineInformation = potensiItem.value.attributes?.information_list[0]
            const offlineInformation = potensiItem.value.attributes?.information_list[1]
            const cta = {
                title : potensiItem.value.attributes?.cta_title,
                subtitle : potensiItem.value.attributes?.cta_subtitle,
                button : potensiItem.value.attributes?.cta_button.display_text,
                link : potensiItem.value.attributes?.cta_button.value
            }
            const otherAssessment = potensiItem.value.attributes?.other_assessment
            const otherAssessmentList = potensiItem.value.attributes?.other_service_list
            const addOnText = potensiItem.value.attributes?.add_on_title
            const btnProductDescription = potensiItem.value.attributes?.btn_product_description
            let filterList = []
            const filterFetched = potensiItem.value.attributes?.filter
            filterFetched.forEach(element => {
                filterList.push(element.value)
            });
            const potensi = {
                title ,
                subtitle,
                textCategories,
                filterList,
                tableHead,
                buttonDownload,
                addOns,
                otherText,
                onlineInformation,
                offlineInformation,
                cta,
                otherAssessment, 
                otherAssessmentList,
                addOnText,
                btnProductDescription
            }

            setAssessmentPotensi(potensi)
            
            return {
                assessmentPotensi,
                basis,
                groups,
                prices,
                productStore,
                pendingPage,
                pendingPrice,
                pendingAddOn,
                addOnList
            }
        },
        methods: {
            updateState(value){
                const groups = ["instansi", "pendidikan", "individu"]
                if(value === 'online' || value === 'offline'){
                    this.productStore.$patch({
                        basis : value
                    })
                } else if(groups.includes(value)) {
                    this.productStore.$patch({
                        groups : value
                    })
                } else {
                }
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>