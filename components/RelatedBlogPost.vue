<template>
    <div class="section-padding-bottom">
        <div class="container">
            <div class="blog-related-news">
                <div class="row">
                    <div class="col-xl-8 col-lg-10" data-aos="fade-up" data-aos-delay="300">
                        <div class="section-title">
                            <h4 class="title text-capitalize">{{ relatedText }}</h4>
                        </div>
                    </div>
                </div>

                <div class="row mtn-30">
                    <div class="col-lg-4 col-md-6 mt-30" data-aos="fade-up" data-aos-delay="100" v-for="(blog, index) in relatedPost.articleList" :key="index">
                        
                        <div id="relatedBlogWrapper" class="single-blog-wrap-custom" style="">
                            <div class="blog-thumb">
                                <nuxt-link :to="`/blog/${blog?.attributes?.slug}`" class="image">
                                    <img class="fit-image w-100" :src="config.public.clientCmsBaseUrl + blog.attributes.image_thumbnail_small?.data.attributes.url" :alt="`test`">
                                </nuxt-link>
                            </div>
                            <div class="inner-content">
                                <ul class="info-list">
                                    <li>{{ transformDate(blog.attributes.publishedAt) }}</li>
                                    <li>{{ blog.attributes?.article_category.data.attributes.title }}</li>
                                </ul>
                                <h4 class="title">
                                    <nuxt-link :to="`/blog/${blog?.attributes?.slug}`">{{ blog.attributes.title }}</nuxt-link>
                                </h4>
                                <nuxt-link :to="`/blog/${blog?.attributes?.slug}`" class="article">
                                    {{ relatedBtn }} <span class="arrow icofont-rounded-right"></span>
                                </nuxt-link>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['relatedPost', 'relatedText', 'relatedBtn'],
        components: {
            BlogPost: () => import('@/components/BlogPost'),
        },
        setup(){
            const config = useRuntimeConfig()
            return {
                config
            }
        }
    };
</script>
<style lang="scss">
    #relatedBlogWrapper{
        display: block;
        height: 550px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        position: relative;

        & .title {
            margin-top: 0;
            font-size: 20px;
        }

        & .inner-content {
          position: static;
          
            & .article {
                bottom: 20px;
                position: absolute;

                @media #{$xl-down} {
                    position: absolute;    
                    bottom: 20px;
                    left: 30px; 
                }

                @media #{$small-mobile} {
                    position: absolute;    
                    bottom: 20px;
                    left: 20px; 
                }
            }
        } 

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    }
</style>