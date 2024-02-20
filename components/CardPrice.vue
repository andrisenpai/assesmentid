<template>
    <div class="section-padding-bottom" data-aos="fade-up" data-aos-delay="600">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <swiper :speed="1000" :loop="false" :navigation="true" :breakpoints="swiperOptions.breakpoints" :pagination="{
                    clickable: true,
                }">
                    <swiper-slide class="card-container my-2 rounded" v-for="product in products">
                        <div :class="['card', product.id == 1 ? 'populer' : '']">
                            <div class="card-body">
                                <h5 id="cardPriceTitle" class="card-price-title text-center mt-3 fw-bolder">{{ product.name
                                }}</h5>
                                <div class="row justify-content-center align-items-center mb-5">
                                    <div class="col">
                                        <p class="text-center">{{ priceWord }}</p>
                                        <h1 class="text-center">{{ product.price }}</h1>
                                    </div>
                                </div>
                                <div class="d-grid">
                                    <nuxt-link :to="`/products/product-${product.id}/${product.id}`"
                                        class="btn btn-block rounded" type="submit">{{ btnWord }}</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { Swiper, SwiperSlide } from "swiper/vue"
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
SwiperCore.use([Navigation, Pagination])

import "swiper/css"

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ["products", "priceWord", "btnWord"],
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
    mounted() {
        const cards = document.querySelectorAll(".card-container .card");
        cards.forEach((element) => {
            element.addEventListener("mouseover", () => {
                cards.forEach(item => {
                    item.classList.remove("populer");
                });
                element.classList.add("populer");
            });
        });

        const cardPriceTitle = document.querySelectorAll('.card-price-title')
        cardPriceTitle.forEach(element => {
            var originalString = element.innerHTML;
            var splitWords = originalString.split(" ");
            element.innerHTML = `<span class="display-block">` + splitWords[0] + "</span>" + originalString.substr(originalString.indexOf(" ") + 1);
        })

    },

}
</script>

<style lang="scss">
.card-price-title {
    height: 100px;
}

.display-block {
    display: block;
}

.card-container {
    margin: 0px;
}
</style>