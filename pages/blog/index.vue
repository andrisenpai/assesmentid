<template>
    <Head>
      <Title>Blogs | Assessment Indonesia</Title>
    </Head>
    <NuxtErrorBoundary>
        <div class="main-container">
            <TheHeaderTwo />
            <OffCanvasMobileMenu />
            <Breadcrumb :activeText="blogWording?.attributes?.active_link_text" :pageTitle="blogWording?.attributes?.title" link="blog"/>    
            <BlogWrapperNew :articles="data" :btnProps="blogWording?.attributes?.btn_full_article" :categories="categories" :all-word="blogWording?.attributes?.word_all" 
            :search-word="blogWording?.attributes?.word_search" :total-page="totalPage"/>
            <FooterNew/>
            <FooterSimple/>
        </div>
    </NuxtErrorBoundary>
</template>

<script setup>
    import  Aos from 'aos'
    const {data} = await useFetch(()=>`/api/articles?sort=createdAt%3Adesc&pagination[pageSize]=500&populate=deep,2&fields[0]=title&fields[1]=content&fields[2]=image_thumbnail&fields[3]=article_category&fields[4]=publishedAt&fields[5]=slug`, {
        initialCache: false,
    })

                
    const {data : blogWording } = await useFetch(()=>`/api/articleListpage`)
    const {data : categories } = await useFetch(()=>`/api/articlesCategory`)

    let totalPage = 1
    try {
        if(data.value.metaData.pagination.total){
            totalPage = Math.ceil(data.value.metaData.pagination.total/10)
        }
    } catch (error) {
        console.log("error extract pagination : ", error)
    }


    onMounted(()=> {
        Aos.init()
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    })

</script>
