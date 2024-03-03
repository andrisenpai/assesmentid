<template>
    <div id="feturesContainer" class="container-fluid section-features">
        <div class="features-wrapper row justify-content-center align-items-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <!-- Section Title Start -->
                        <div class="section-title" data-aos="fade-up" data-aos-delay="300">
                            <h2 class="service-title">{{ title }}</h2>
                        </div>
                        <!-- Section Title End -->
                    </div>

                    <div class="col-12">
                        <div class="service-inner-container" data-aos="fade-up" data-aos-delay="300">
                            <swiper :grid="{ rows: 2 }" :spaceBetween="40" :pagination="{
                                clickable: true,
                            }" :scrollbar="{
                                draggable: true
                            }" :modules="modules" :autoplay="{
                                delay: 2500,
                                disableOnInteraction: false,

                            }" :navigation="swiperOptions.navigation" :breakpoints="{
                                320: {
                                    slidesPerView: 1,
                                    grid: { rows: 2, },
                                    spaceBetween: 5,
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                                576: {
                                    slidesPerView: 1,
                                    grid: { rows: 2, },
                                    spaceBetween: 10,
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                                767: {
                                    slidesPerView: 4,
                                    grid: { rows: 2, },
                                    spaceBetween: 30,
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    grid: { rows: 2, },
                                    spaceBetween: 40,
                                    slidesPerView: 4,
                                    slidesPerGroup: 8,
                                }
                            }" class="mySwiper">
                                <swiper-slide class="service-block" v-for="(service, index) in featureProps" :key="index">
                                    <div class="inner-box">
                                        <h5 class="title">{{ service.title }}</h5>
                                        <p>{{ service.description }}</p>
                                        <div class="inner-box-bottom" v-if="service.icon">
                                            <div class="icon">
                                                <img :src="service.icon">
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Grid, Pagination, Navigation } from 'swiper';

export default {
    props: ["featureProps", "title"],
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperOptions: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        }
    },
    setup() {
        return {
            modules: [Grid, Pagination, Navigation],
        };
    },
};
</script>

<style lang="scss">
#feturesContainer {
    padding: 0 0;
}

#feturesContainer {
    .swiper-grid-column>.swiper-wrapper {
        flex-direction: row !important;
    }

    .swiper-wrapper {
        align-items: end;
        padding: 0 0 40px;
    }

    .swiper-button-next {
        top: 49% !important;
        border-radius: 50%;
        right: -30px;
        width: 55px;
        height: 55px;
        z-index: 9999 !important;
    }

    .swiper-button-prev {
        top: 49% !important;
        border-radius: 50%;
        width: 55px;
        left: -30px;
        height: 55px;
        z-index: 9999 !important;
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