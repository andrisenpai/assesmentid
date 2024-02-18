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
                            <swiper
                                :grid="{rows: 2,}"
                                :spaceBetween="5"
                                :pagination="{
                                    clickable: true,
                                }"
                                :scrollbar="{
                                    draggable: true
                                }"
                                :modules="modules"
                                :autoplay="{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                    
                                }"
                                :navigation="true"
                                :breakpoints="{
                                    320: {
                                        slidesPerView: 1,
                                        grid:{rows: 2,},
                                        spaceBetween:5,
                                        slidesPerView:1,
                                        slidesPerGroup:1,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                        grid:{rows: 2,},
                                        spaceBetween:10,
                                        slidesPerView:1,
                                        slidesPerGroup:1,
                                    },
                                    767: {
                                        slidesPerView: 4,
                                        grid:{rows: 2,},
                                        spaceBetween:10,
                                        slidesPerView:4,
                                        slidesPerGroup:4,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                        grid:{rows: 2,},
                                        spaceBetween:10,
                                        slidesPerView:4,
                                        slidesPerGroup:1,
                                    }
                                }"
                                class="mySwiper"
                            >
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
        props : ["featureProps", "title"],
        components: {
            Swiper,
            SwiperSlide,
        },
        data(){
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.tab-carousel-next',
                        prevEl: '.tab-carousel-prev',
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
#feturesContainer{
    padding: 0 0;
}

.swiper-grid-column>.swiper-wrapper{
    flex-direction: row !important;
}

.swiper-wrapper {
    align-items: end;
    padding: 0 0 40px 0;
}

/*-- Tab Pane Carousel Style --*/
.tab-carousel-btn {
    &.tab-carousel-prev, 
    &.tab-carousel-next {
        position: absolute;
        left: 50px;
        top: 50%;
        width: 40px;
        height: 40px;
        text-align: center;
        background-color: rgba($color: #000000, $alpha: 0.5);
        transition: $transition-base;
        transform: translateY(-50%);
        opacity: 0;
        z-index: 1;
        cursor: pointer;
        border-radius: 50%;

        &:focus{
            border: 0px;
            outline: 0px;
        }
        & i{ 
            font-size: 30px;
            color: $white;
            line-height: 40px;
        }
        &:hover {
            background-color: rgba($color: #000000, $alpha: 0.5);
            transition: $transition-base;
            i {
                color: $white;
            }
        }
    }
    &.tab-carousel-next {
        right: 50px;
        left: auto;
    }
}

.swiper-pagination {
    position: absolute;
    text-align: center;
    transition: .3s opacity;
    transform: translate3d(0,0,0);
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
</style>