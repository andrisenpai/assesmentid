<template>
    <div class="hero-slider">
        <swiper :speed="500" :loop="false" :navigation="true" :pagination="{ clickable: true }" :effect="'fade'"
            :autoplay="width < 992 ? false : autoplayConfig" :disableOnInteraction="width < 992 ? true : false"
           >
            <template v-for="(hero, index) in heros" :key="index">
                <swiper-slide class="slides" v-if="index < 2">
                    <div v-if="!hero.price" class="hero-slide-item"
                        :style="{ backgroundImage: `url('${hero.background}')` }" :data-id="hero.id">
                        <!-- <div class="container">
                            <div class="row justify-content-xl-end justify-content-start hero-slide-container ">
                                <div class="col-12 col-md-6 hero-slide-wrapper">
                                    <div class="hero-slide-content">
                                        <h2 class="hero-title" v-html="hero.title_1"></h2>
                                        <p>{{ hero.subtitle }}</p>
                                    </div>
                                </div>
                            </div>
                            <img v-if="hero.id === 1" class="img-util" src="/images/utils/Shape-banner-homepage.svg" alt="">
                        </div> -->
                    </div>
                    <div v-else-if="hero.price.length" class="hero-slide-item invisible-content"
                        :class="hero.price.length && hero.points.length ? 'slide-2' : 'slide-3'"
                        :style="{ backgroundImage: `url('${hero.background}')` }" :data-id="hero.id">
                        <div class="container">
                            <div class="hero-slide-content">
                                <!-- <h1 class="hero-title">{{ hero.title_1 }}
                                    <br v-if="!(hero.price.length && hero.points.length)"/>
                                    <span>{{ hero.title_2 }}</span>
                                </h1> -->

                                <!-- <div class="row justify-content-between align-items-center content-wrapper">
                                    <div class="col-lg-8 col-12 left">
                                        <h3 class="price-word-text">{{ hero.subtitle }}</h3>
                                        <h2 class="price-text">{{ hero.price }}<span class="kilo">{{ hero.currency }}</span></h2>
                                        <h4 class="more-info-text">{{ hero.text_info }}</h4>
                                        <div class="row align-items-center phone-container">
                                            <template v-for="(phone, index) in hero.phone_numbers">
                                                <a v-if="index === 0" :href="`tel:${phone.value}`" id="icon-phone" class="d-none d-lg-inline col-lg-1 phone-text">
                                                    <i class="icofont-phone"></i>
                                                </a>
                                                <a v-else :href="`tel:${phone.value}`" class="col-6 col-lg-3 phone-text">{{ phone.display_number }}</a>
                                            </template>
                                        </div>
                                    </div>
                                    <div v-if="hero.points.length" class="col-lg-4 d-none d-lg-inline right">
                                        <template  v-for="(point,  index) in hero.points">
                                            <div v-if="point.sub_point.length" id="point-3" class="row align-items-center justify-content-between wrapper-point result-container">
                                                <div class="col-6">
                                                    <span class="point-text">{{ point.main_point }}</span>
                                                </div>
                                                <div class="col-6 wrapper-result">
                                                    <div v-for="sub_point in point.sub_point" class="result">{{ sub_point.text }}</div>
                                                </div> 
                                            </div>       
                                            <div v-else :id="`point-${index + 1}`" class="wrapper-point"><span class="point-text">{{ point.main_point }}</span></div>
                                        </template>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </template>
        </swiper>

        <!-- Swiper Pagination Start -->
        <!-- <div class="hero-pagination swiper-pagination d-flex d-md-none"></div> -->
        <!-- Swiper Pagination End -->

        <!-- Swiper Navigation Start -->
        <!-- <div class="home-slider-prev swiper-button-prev d-md-flex d-none">
            <i class="icofont-long-arrow-left"></i>
        </div>
        <div class="home-slider-next swiper-button-next d-md-flex d-none">
            <i class="icofont-long-arrow-right"></i>
        </div> -->
        <!-- Swiper Navigation End -->
    </div>
</template>

<script lang="js">
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue"
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/core'
SwiperCore.use([Navigation, Pagination, EffectFade])

import "swiper/css"
import 'swiper/css/effect-fade';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: [
        "heros"
    ],
    setup() {
        const swiper = useSwiper();

        const width = ref(window.innerWidth)
        let autoplayConfig = {
            delay: 7000,
            disableOnInteraction: true,
        }

        if (width < 992) {
            autoplayConfig = false
        }

        return {
            modules: [Autoplay, Pagination, Navigation],
            swiper,
            autoplayConfig, width
        };
    },
    data() {
        const preventSwipe = ref(false)

        return {
            swiperOptions: {
                navigation: {
                    nextEl: '.hero-slider .home-slider-next',
                    prevEl: '.hero-slider .home-slider-prev'
                },
                pagination: {
                    el: '.hero-slider .swiper-pagination',
                    type: 'bullets',
                    clickable: 'true'
                },
            },
            preventSwipe,
        }
    },
    mounted() {
        const invisibleContent = document.querySelectorAll('.invisible-content')
        setTimeout(() => {
            invisibleContent.forEach(element => {
                element.classList.toggle('invisible-content')
            })
        }, 3000)
    }
};
</script>

<style lang="scss">
.invisible-content {
    visibility: hidden;
}

.hero-slider {
    .swiper-button-next {
        top: 48% !important;
        border-radius: 50%;
        right: 10px;
        width: 60px;
        height: 60px;
        z-index: 9999 !important;
    }

    .swiper-button-prev {
        top: 48% !important;
        border-radius: 50%;
        width: 60px;
        left: 10px;
        height: 60px;
        z-index: 9999 !important;
    }
}

.hero-pagination {
    bottom: 70px !important;

    @media #{$large-mobile} {
        display: none;
    }
}

.hero-slide-item {
    background-size: cover;
    background-repeat: no-repeat;

    @media #{$large-mobile} {
        background-position-x: -10rem;
    }

    @media #{$large-mobile} {
        background-position-x: -25rem;
    }

    @media #{$small-mobile} {
        background-position-x: -33rem;
    }

    @media #{"only screen and (min-width: 376px) and (max-width: 415px)"} {
        background-position-x: -33rem !important;
    }

    @media #{"only screen and (max-width: 376px)"} {
        background-position-x: -20rem;
    }
}

.hero-title {
    font-size: 70px;
    line-height: 1;
    font-weight: 600;
    color: #fff;
    letter-spacing: -0.25px;
    text-transform: capitalize;

    @media #{$large-mobile} {
        width: 80%;
        font-size: 50px;
        margin-bottom: 10px;
    }
}

.slide-2 {
    background-size: cover;
    background-repeat: no-repeat;

    @media #{$small-mobile} {
        background-position-x: -10rem !important;
    }
}

.slide-2 .hero-slide-content {
    padding-left: 0px;

    @media #{$large-mobile, $small-mobile, $tablet-device, $desktop-device} {
        padding-left: 20px;
    }
}

.slide-2 .hero-title {
    font-weight: 800;
    color: #f9d662;
    font-size: 80px;

    @media #{$large-mobile, $small-mobile} {
        font-size: 50px;
        width: 100%;
    }

    & span {
        font-style: italic;
        color: white;
    }
}

.content-wrapper .left {
    .price-word-text {
        font-size: 48px;
        font-weight: 700;
        color: white;
        margin-top: 30px;

        @media #{$large-mobile, $small-mobile} {
            font-size: 24px;
        }
    }

    .price-text {
        font-size: 140px;
        font-weight: 800;
        font-style: italic;
        background: rgb(252, 240, 194);
        background: linear-gradient(225deg, rgba(248, 219, 102, 1) 64%, rgba(255, 255, 255, 1) 72%, rgba(252, 239, 189, 1) 82%);
        -webkit-background-clip: text;
        color: transparent;

        @media #{$large-mobile, $small-mobile} {
            font-size: 120px;
        }

        .kilo {
            color: white;
            font-size: 50px;
            font-weight: 800;

            @media #{$large-mobile, $small-mobile} {
                font-size: 30px;
            }
        }
    }

    .more-info-text {
        color: white;
        font-style: italic;
        font-size: 24px;
        font-weight: 600;

        @media #{$large-mobile, $small-mobile} {
            font-size: 20px;
        }
    }

    .phone-container .phone-text {
        background-color: #d3e7e7;
        color: #55a4a5;
        font-weight: 600;
        font-size: 18px;
        margin-right: 10px;
        margin-top: 10px;
        text-align: center;
        border-radius: 30px;
        box-shadow: 0px 8px 3px -4px #428182;
        height: fit-content;
        transition: $transition-base;

        &:hover {
            background-color: #ffffff;
            transform: translateY(-2px);
        }

        @media #{$large-mobile, $small-mobile} {
            font-size: 15px;
        }

    }
}

#icon-phone {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50px;

    i {
        position: relative;
        top: 20%;
        left: -6%;
        font-size: 30px;
    }
}

.right {
    position: relative;
}

.result-container {
    padding: 5px 10px;
}

.wrapper-point {
    width: 80%;
    background: rgb(250, 250, 228);
    background: linear-gradient(123deg, rgba(250, 250, 228, 1) 27%, rgba(230, 240, 238, 1) 82%);
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    text-align: center;
    margin: 25px 0px;
    border-radius: 15px;
    box-shadow: -8px 9px 0px -3px #dada1b;

    .point-text {
        color: #1a5152;
    }

    .wrapper-result {
        padding: 10px 0px;
    }

    .result {
        text-align: start;
        font-size: 12px;
        font-style: italic;
        color: #1a5152;
    }
}

#point-1 {
    transform: translate(-12rem, 5rem);

}

#point-2 {
    transform: translate(-7rem, 5rem);
}

#point-3 {
    transform: translateY(5rem);
}

.slide-3 {
    background-size: cover;
    background-repeat: no-repeat;

    @media #{$small-mobile} {
        background-position-x: -10rem !important;
    }
}


.slide-3 .hero-slide-content {
    padding-left: 0px;

    @media #{$large-mobile, $small-mobile, $tablet-device, $desktop-device} {
        padding-left: 20px;
    }
}

.slide-3 .hero-slide-content {
    padding-left: 0px;

    @media #{$large-mobile, $small-mobile, $tablet-device, $desktop-device} {
        padding-left: 20px;
    }
}

.slide-3 .hero-title {
    font-weight: 800;
    color: #478d8e;
    font-size: 80px;
    font-style: italic;

    @media #{$large-mobile, $small-mobile} {
        font-size: 50px;
        width: 100%;
    }

    & span {
        font-weight: 400;
        font-style: italic;
        color: #ff9e00;
    }
}

.slide-3 .container .hero-slide-content .content-wrapper .left {
    .price-word-text {
        font-size: 30px;
        font-weight: 700;
        color: #478d8e;
        margin-bottom: 0;
        margin-top: 30px;

        @media #{$large-mobile, $small-mobile} {
            font-size: 18px;
        }
    }

    .price-text {
        font-size: 140px;
        font-weight: 800;
        font-style: italic;
        color: #ff9e00;
        position: relative;

        @media #{$large-mobile, $small-mobile} {
            font-size: 90px;
        }

        .kilo {
            top: -15px;
            color: white;
            background-color: #54a4a5;
            padding: 15px;
            font-size: 50px;
            font-weight: 800;
            position: absolute;
            border-radius: 60px;
            transform: translateX(-20px);

            @media #{$large-mobile, $small-mobile} {
                font-size: 30px;
            }
        }
    }

    .more-info-text {
        color: #478d8e;
        font-style: italic;
        font-size: 24px;
        font-weight: 600;

        @media #{$large-mobile, $small-mobile} {
            font-size: 20px;
        }
    }

    .phone-container .phone-text {
        background-color: #ffffff;
        color: #55a4a5;
        font-weight: 600;
        font-size: 18px;
        margin-right: 10px;
        margin-top: 10px;
        text-align: center;
        border-radius: 30px;
        box-shadow: 0px 8px 3px -4px rgba(92, 92, 92, 0.5);

        @media #{$large-mobile, $small-mobile} {
            font-size: 15px;
        }
    }

    .phone-text.icons {
        border-radius: 50px;
        padding: 0;
    }

}

.img-util {
    position: absolute;
    width: unset;
    height: auto;
    bottom: -70px;
    left: 40em;
    z-index: 0;

    @media #{$tablet-device, $desktop-device} {
        left: -5em;
        bottom: 0;
        width: 80%;
        transform: scaleX(-1);
    }

    @media #{$large-mobile} {
        left: -10em;
        bottom: 0;
        width: 80%;
        transform: scaleX(-1);
    }

    @media #{$small-mobile} {
        left: -10em;
        bottom: 0;
        width: 130%;
        transform: scaleX(-1);
    }
}

.hero-slide-wrapper {
    z-index: 3;
}

.btn-to {
    color: $white;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;

    &::before {
        width: 0%;
    }

    &:hover {
        color: $white;

        &::before {
            content: "";
            height: 2px;
            width: 20%;
            ;
        }
    }
}
</style>