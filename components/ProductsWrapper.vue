<template>
    <div class="blog-tab-section section-padding-bottom" data-aos="fade-up" data-aos-delay="700">
        <div class="container-fluid">
            <div class="row justify-content-between align-items-center mb-5" data-aos="fade-up" data-aos-delay="300">
                <!-- Section Title Start -->
                <div class="col-xl-auto col-lg-12">
                    <div class="section-title mb-0 ms-3">
                        <h2 class="title">PRODUK ASESSMENT</h2>
                    </div>
                </div>
                <!-- All Product Button Start -->
                <div class="col-xl-2 col-md-4">
                    <div class="all-project-btn me-3">
                        <a href="javascript:void(0)" @click="toggleShow()">Lihat Semua<i class="arrow" :class="swiperActive == true ? 'icofont-rounded-down' : 'icofont-rounded-up'"></i></a>
                    </div>
                </div>
                <!-- All Product Button End -->
            </div>
        </div>
        <div class="container-fluid" data-aos="fade-up" v-if="swiperActive == true">
            <swiper :speed="1000" :loop="false" :navigation="swiperOptions.navigation"
                :breakpoints="swiperOptions.breakpoints" :pagination="{
                    clickable: true,
                }">
                <swiper-slide v-for="(blog, index) in blogs">
                    <div id="productBlogWrapper" class="single-blog-wrap mx-3">
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
                </swiper-slide>
            </swiper>
            <div class="swiper-button-next"></div>
             <div class="swiper-button-prev"></div>
        </div>
        <div class="container-fluid" data-aos="fade-up" v-if="swiperActive == false">
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
import { Swiper, SwiperSlide } from "swiper/vue"
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
SwiperCore.use([Navigation, Pagination])

import "swiper/css"
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['blogs', 'btnTxt'],
    data() {
        return {
            activeItem: 'architecture',

            swiperOptions: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 2,
                    }
                }
            },
            swiperActive: true
        }
    },
    methods:{
        toggleShow(){
            this.swiperActive == false ? this.swiperActive = true : this.swiperActive = false 
        }
    }
}
</script>

<style lang="scss">
.subtitle-product-wrapper {
    font-size: 25px;
    color: $primary;
}

.blog-tab-section {
    height: fit-content;
}

#productBlogWrapper {
    height: fit-content;
}
.swiper-button-next {
        top: 35% !important;
        border-radius: 50%;
        right: 20px;
        width: 40px;
        height: 40px;
        z-index: 9999 !important;
        background-color: $primarylight;
        transition: 0.3s;
        &:hover{
            background-color: $primarylight2;
            transition: 0.3s;
        }
    }

    .swiper-button-prev {
        top: 35% !important;
        border-radius: 50%;
        width: 40px;
        left: 20px;
        height: 40px;
        z-index: 9999 !important;
        background-color: $primarylight;
        transition: 0.3s;
        &:hover{
            background-color: $primarylight2;
            transition: 0.3s;
        }
    }
</style>
