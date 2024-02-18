export default defineNuxtPlugin(async () => {
    const {data : navbar} = await useFetch('/api/navigation')
    const {data : footerData} = await useFetch('/api/footer')
    const {data : articleData } = await useFetch('/api/articles?sort=publishedAt%3Aasc&pagination[page]=1&pagination[pageSize]=1&fields[0]=id')
    const {data : footerSmall} = await useFetch('/api/footerSmall')

    const footerStore = useFooterStore()  
    const navStore = useNavigationStore()
    navStore.$patch({
        home: navbar.value.attributes.home,
        about: navbar.value.attributes.about,
        product: navbar.value.attributes.product,
        productChild : navbar.value.attributes.product_child,
        blog: navbar.value.attributes.blog,
        blogChild : navbar.value.attributes.blog_child,
        contact : navbar.value.attributes.contact,
        onlineTest : navbar.value.attributes.psikotes_online,
        totalArticle : articleData.value.metaData.pagination.pageCount
    })



    footerStore.$patch({
        data : footerData,
        dataSmall : footerSmall
    })
})