<template>
    <Head>
      <Title>Gallery | Assessment Indonesia</Title>
    </Head>
    <NuxtErrorBoundary>
    <div>
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <Breadcrumb :activeText="data.attributes.active_link_text" :pageTitle="data.attributes.page_title" link="gallery"/>
        <GalleryTwo :galleryProps="data"/>
        <FooterNew/>
        <FooterSimple/> 
    </div>
    </NuxtErrorBoundary>
</template>

<script setup>
    import  Aos from 'aos'
    const { data } = await useFetch('/api/gallery')
    if(!data.value){
        throw createError({statusCode: 404, message : "[GALLERY] : page not found"})
    }

    onMounted(()=>{
        Aos.init()
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    })
</script>

<style lang="scss" scoped>
.breadcrumb-item{
    display: none !important;
}

</style>