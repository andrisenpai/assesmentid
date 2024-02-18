<template>
    <div class="blog-tab-section section-padding-bottom" data-aos="fade-up" data-aos-delay="700">
        <div class="container-fluid">
            <div class="row row-cols-xl-2 row-cols-1 box mtn-50">
                <!-- Single blog Start -->
                <div class="col mt-50" data-aos="fade-up" data-aos-delay="300" :class="blog?.category" v-for="(blog, index) in blogs" :key="index">
                    <div id="productBlogWrapper" class="single-blog-wrap">
                        <div class="blog-thumb">
                            <nuxt-link :to="`/products/product-${blog.id}`" class="image">
                                <img class="static-image-product" :src="blog.imgSrc" :alt="blog.title">
                            </nuxt-link>
                        </div>
                        <div class="inner-content">
                            <span class="subtitle-product-wrapper">{{ blog.subtitle }}</span>
                            <h4 class="title">
                                <nuxt-link :to="`/products/product-${blog.id}`">{{ blog.title }}</nuxt-link>
                            </h4>
                            <p>{{ blog.desc }}</p>
                            <nuxt-link :to="`/products/product-${blog.id}`" class="article">
                                {{ btnTxt }} <span class="arrow icofont-rounded-right"></span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Single blog End -->
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['blogs', 'btnTxt']
    }
</script>

<style lang="scss">
    .subtitle-product-wrapper {
        font-size: 25px;
        color: $primary;
    }

    .blog-tab-section{
        height: fit-content;
    }

    #productBlogWrapper{
        height: fit-content;
    }
</style>
