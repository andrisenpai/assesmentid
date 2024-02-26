<template>
    <div class="section-padding-top bg-white gallery-one">
        <div class="container">
            <div class="row justify-content-between align-items-center mb-5" data-aos="fade-up" data-aos-delay="300">
                <!-- Section Title Start -->
                <div class="col-xl-3 col-lg-12">
                    <div class="section-title mb-0">
                        <h2 class="title">{{ title }}</h2>
                    </div>
                </div>
                <!-- All Product Button Start -->
                <div class="col-xl-2 col-md-4">
                    <div class="all-project-btn">
                        <nuxt-link to="/products">{{ subtitle }}<i class="arrow icofont-rounded-right"></i></nuxt-link>
                    </div>
                </div>
                <!-- All Product Button End -->
            </div>
        </div>
        <div class="container-auto">
            <!-- Tab Content Start -->
            <div class="tab-content swiper-arrow-hover" data-aos="fade-up" data-aos-delay="400">
                <div class="tab-pane fade" :class="{ 'active show': isActive('architecture') }" id="architecture">
                    <swiper :speed="1000" :loop="false" :navigation="swiperOptions.navigation"
                        :breakpoints="swiperOptions.breakpoints" :pagination="{
                            clickable: true,
                        }">
                        <swiper-slide v-for="(product, index) in products">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <nuxt-link :to="`/products/product-${index + 1}`" class="image">
                                        <img class="fit-image" :src="`${product.imageUrl}`" alt="Product" />
                                    </nuxt-link>
                                </div>
                                <div class="content my-auto">
                                    <h4 class="subtitle">{{ product.subtitle }}</h4>
                                    <h3 class="title">
                                        <nuxt-link :to="`/products/product-${index + 1}`">{{ product.title }}</nuxt-link>
                                    </h3>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>

                    <!-- Swiper Navigation Start -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <!-- Swiper Navigation End -->
                </div>
            </div>
            <!-- Tab Content End -->
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import SwiperCore, { Navigation } from 'swiper/core'
SwiperCore.use([Navigation])

import "swiper/css"

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: [
        "title",
        "subtitle",
        "products",
    ],
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
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    }
                }
            },
        }
    },
    methods: {
        isActive(menuItem) {
            return this.activeItem === menuItem
        },
        setActive(menuItem) {
            this.activeItem = menuItem
        }
    }
};
</script>

<style lang="scss">
.gallery-one {
    .swiper-grid-column>.swiper-wrapper {
        flex-direction: row !important;
    }

    .swiper-wrapper {
        align-items: end;
        padding: 0 0 40px;
    }

    .swiper-button-next {
        top: 48% !important;
        border-radius: 50%;
        right: 20px;
        width: 60px;
        height: 60px;
        z-index: 9999 !important;
        background-color: $primarylight;
        transition: 0.3s;
        &:hover{
            background-color: $primarylight2;
            transition: 0.3s;
        }
    }

    .swiper-button-prev {
        top: 48% !important;
        border-radius: 50%;
        width: 60px;
        left: 20px;
        height: 60px;
        z-index: 9999 !important;
        background-color: $primarylight;
        transition: 0.3s;
        &:hover{
            background-color: $primarylight2;
            transition: 0.3s;
        }
    }

    /*-- Tab Pane Carousel Style --*/

    .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: .3s opacity;
        transform: translate3d(0, 0, 0);
        z-index: 9999999999999999;
    }

    .swiper-horizontal>.swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
        bottom: 0;
        left: 0;
        width: 100%;
    }
}
</style>