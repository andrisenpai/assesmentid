<template>
    <div class="container-fluid section-blog-container d-flex flex-column align-content-center justify-content-center align-items-center">
        <div class="container">
            <div class="row justify-content-between align-items-center mb-5" data-aos="fade-up" data-aos-delay="300">
                <!-- Section Title Start -->
                <div class="col-xl-3 col-md-12">
                    <div class="section-title mb-0">
                        <h2 class="title">{{ title }}</h2>
                    </div>
                </div>
                <!-- All Product Button Start -->
                <div class="col-xl-2 col-md-4">
                    <div class="all-project-btn">
                        <nuxt-link to="/blog">{{ subtitle }}<i class="arrow icofont-rounded-right"></i></nuxt-link>
                    </div>
                </div>
                <!-- All Product Button End -->
            </div>
        </div>
        <div class="container-fluid p-0 swiper-arrow-hover">
            <swiper
                :speed="1000"
                :looped-slides="false"
                :navigation="swiperOptions.navigation"
                :breakpoints="swiperOptions.breakpoints"
                class="row g-0"
                :pagination="{
                    clickable: true,
                }"
            >
                <swiper-slide class="col-xl-3 col-md-6">
                    <div data-aos="fade-up" data-aos-delay="300">
                        <BlogPost :blog="blogs[3]" />
                    </div>
                </swiper-slide>
                <swiper-slide class="col-xl-3 col-md-6" v-for="(blog, index) in blogs" :key="index">
                    <div v-if="index !== blogs.length - 1" data-aos="fade-up" data-aos-delay="300">
                        <BlogPost :blog="blog" />
                    </div>
                </swiper-slide>
            </swiper>

            <!-- Swiper Navigation Start -->
            <div class="tab-carousel-prev tab-carousel-btn">
                <i class="icofont-thin-left"></i>
            </div>
            <div class="tab-carousel-next tab-carousel-btn">
                <i class="icofont-thin-right"></i>
            </div>
            <!-- Swiper Navigation End -->
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation, Pagination } from 'swiper/core'
    SwiperCore.use([Navigation, Pagination ])

    import "swiper/css"


    export default {
        components: {
            BlogPost: () => import('@/components/BlogPost'),
            Swiper,
            SwiperSlide,
        },
        props : ["blogs", "title", 'subtitle'],
        data() {
            return {
                activeItem: 'architecture',
                
                swiperOptions: {
                    navigation: {
                        nextEl: '.tab-carousel-next',
                        prevEl: '.tab-carousel-prev',
                    },

                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        }
                    }
                },
            }
        },
    };
</script>

<style lang="scss">
    .section-blog-container {
        padding-top: 60px;
        padding-bottom: 60px;
        position: relative;
    }
</style>