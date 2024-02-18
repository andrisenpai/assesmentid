<template>
    <div class="section-padding-top">
        <div class="container">
            <div class="row">
                <div class="col-12 position-relative">
                    <div class="section-title client-title" data-aos="fade-up" data-aos-delay="300">
                        <h2 class="title">+2,500 clients love us</h2>
                    </div>
                    <div class="client-carousel" data-aos="fade-up" data-aos-delay="300">
                        <swiper
                            :space-between="30"
                            :speed="1000"
                            :loop="false"
                            :navigation="swiperOptions.navigation"
                            :breakpoints="swiperOptions.breakpoints"
                        >
                            <swiper-slide v-for="(client, index) in clients" :key="index" class="single-client-wrapper">
                                <div class="client-thumb-icon">
                                    <div class="thumb">
                                        <img :src="client.imgSrc" :alt="client.name">
                                    </div>
                                    <div class="icon">
                                        <i class="icofont-quote-right"></i>
                                    </div>
                                </div>

                                <div class="client-content">
                                    <h6 class="name">
                                        <a href="#">{{ client.name }}</a> / <span> {{ client.position }}</span>
                                    </h6>
                                    <p>{{ client.desc }}</p>
                                </div>
                            </swiper-slide>
                        </swiper>

                        <!-- Swiper Navigation Start -->
                        <div class="client-carousel-prev swiper-button-prev">
                            <i class="icofont-thin-left"></i>
                        </div>
                        <div class="client-carousel-next swiper-button-next">
                            <i class="icofont-thin-right"></i>
                        </div>
                        <!-- Swiper Navigation End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation } from 'swiper/core'
    SwiperCore.use([Navigation ])

    import "swiper/css"

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.client-carousel .client-carousel-next',
                        prevEl: '.client-carousel .client-carousel-prev',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        }
                    }
                },

                clients: [
                    {
                        id: 1,
                        imgSrc: "/images/client/1.png",
                        name: "Ryan Betthalyn",
                        position: "Director at Chobham Manor",
                        desc: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
                    },
                    {
                        id: 2,
                        imgSrc: "/images/client/2.png",
                        name: "Bobs Hanely",
                        position: "Director at Spotify",
                        desc: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
                    },
                    {
                        id: 3,
                        imgSrc: "/images/client/1.png",
                        name: "Erik Jhonson",
                        position: "Director at TotoCompany",
                        desc: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
                    },
                ]
            }
        },
    };
</script>