<template>
    <Head>
      <Title>{{title}} | {{date}} | Assessment Indonesia</Title>
      <Meta  :name="title" :content="`${title} | ${date} | Assessment Indonesia`"/>
      <Meta  :property="'article:published_time'" :content="date"/>
      <Meta  :property="'article:category'" :content="category"/>
    </Head>
    <NuxtErrorBoundary>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />
        <!-- <Loading v-if="pending"/> -->
        <!-- <div v-else> -->
        <BlogDetailsPost
            :md="parsedMarkdown"
            :title="title" 
            :cover="cover" 
            :publishedAt="date"
            :category="category"
        />
            <RelatedBlogPost :relatedPost="relatedPost" :relatedText="blogWording?.attributes?.related_post_text" :relatedBtn="blogWording?.attributes?.btn_full_article"/>
            <FooterNew/>
            <FooterSimple/>
    </div>
    </NuxtErrorBoundary>
</template>

<script lang="js">
    import Aos from 'aos'
    import markdownParser from '@nuxt/content/transformers/markdown'

    export default {
        async setup(){
            let urlRelatedBlog = '/api/articles?populate=deep,2&'
            const config = useRuntimeConfig()
            const { id } = useRoute().params
            const navStore = useNavigationStore()
            const idNumber = []

            for (let x=0; x < 3 ; x++) {
                let randNumber = Math.floor((Math.random() * navStore.totalArticle) + 1);
                while (true) {
                    randNumber = Math.floor((Math.random() * navStore.totalArticle) + 1);
                    randNumber = roundHalfDown(randNumber)
                    if(idNumber.includes(randNumber) || randNumber === 5 || randNumber === parseInt(id)){
                        continue;
                    } else {
                        idNumber.push(randNumber)
                        break;
                    }
                }
                urlRelatedBlog = urlRelatedBlog + `filters[id][$in][${x}]=${randNumber}&`
            }

            const [
                {data : details},
                {data : relatedPost},
                {data : blogWording },  
            ] = await Promise.all([
                useFetch(`/api/articleDetail?id=${id}`),
                useFetch(() => urlRelatedBlog, {
                    key: `articles-${1}`,
                    initialCache: false,
                }),
                useFetch(`/api/articleListpage`)
            ])

            if (!details.value || !relatedPost.value || !relatedPost.value){
                throw createError({statusCode: 404, message : "[ARTICLE-DETAILS] : page not found"})
            }

            const productDetails = details.value.attributes.content
            const title = details.value.attributes.title
            const cover = config.public.clientCmsBaseUrl + details.value.attributes.image_thumbnail.data.attributes.url
            const parsedMarkdown = await markdownParser.parse( '<some-id>', productDetails)
            const date = transformDate(details.value.attributes.publishedAt)
            const category = details.value.attributes?.article_category?.data.attributes.title
            

            return {
                title,
                cover,
                parsedMarkdown,
                date,
                category,
                relatedPost,
                blogWording,
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

