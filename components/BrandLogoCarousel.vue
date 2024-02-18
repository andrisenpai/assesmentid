<template>
    <div class="brand-logo-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="brand-logo-carousel" data-aos="fade-up" data-aos-delay="300">
                        <swiper
                            :space-between="30"
                            :speed="1000"
                            :loop="false"
                            :breakpoints="swiperOptions.breakpoints"
                        >
                            <swiper-slide class="single-brand-logo" v-for="(brand, index) in brandLogos" :key="index">
                                <nuxt-link to="">
                                    <img :src="brand.imgSrc" :alt="brand.alt">
                                </nuxt-link>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                swiperOptions: {
                    breakpoints: {
                        320: {
                            slidesPerView: 2
                        },
                        480: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        992: {
                            slidesPerView: 5
                        }
                    }
                },

                brandLogos: [
                    {
                        imgSrc: "/images/brand-logo/1.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand-logo/2.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand-logo/3.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand-logo/4.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand-logo/5.png",
                        alt: "brand logo"
                    }
                ]
            }
        },
    };
</script>