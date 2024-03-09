<template>
    <div class="container-fluid container-lg px-20">
        <div class="container-fluid container-title mt-5 mb-20">
            <h1 class="product-title">{{ serviceProps.attributes?.title }}</h1>
            <p class="product-subtitle">{{ serviceProps.attributes?.subtitle }}</p>
        </div>

        <div class="container-fluid">
            <div class="mb-20 row align-items-center" :class="[lengthPrice === 1? 'justify-content-center' : 'justify-content-between']">
                <div id="imagePriceWrapper" v-if="lengthPrice === 1" class="col-6 d-none d-lg-flex" :style="{backgroundImage: `url(${config.public.clientCmsBaseUrl + serviceProps.attributes?.img_support.data.attributes?.url})`}">
                    <!-- <img id="imagePrice" src="https://picsum.photos/id/267/1920/1080" alt=""> -->
                </div>
                <div v-for="product in serviceProps.attributes?.reguler_price" :class="[lengthPrice === 1? 'col-12 col-lg-6 col-xl-4' : 'col-md-4']">
                    <CardPriceLong
                     :id="product.id"
                     :title="product.title"
                     :subtitle="product.subtitle"
                     :price="product"
                     :price-ext="''"
                    />
    			</div>
            </div>

            <div class="button-container">
                <div class="button-wrapper">
                    <a v-for="button in  serviceProps.attributes?.button_link" :href="config.public.clientCmsBaseUrl + button.file.data.attributes?.url" 
                        class="btn btn-sm btn-primary btn-download" 
                        target="_blank">
                        {{ button.display_text }}
                    </a>
                </div>
            </div>


            <div class="additional-container">
                <div class="additional-wrapper">
                    <h3 class="add-on-text">{{ serviceProps.attributes?.addon_section_title }}</h3>
                    <div class="row">
                        <div v-if="addOnProps.length  > 6" class="col-12 slider-container">
                            <swiper
                                :grid="{rows: 2,}"
                                :spaceBetween="5"
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
                                        spaceBetween: 5,
                                        slidesPerGroup: 1,
                                        grid: {
                                            rows: 2,
                                            fill: 'row'
                                        }
                                    },
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                        slidesPerGroup: 2,
                                        grid: {
                                            rows: 2,
                                            fill: 'row'
                                        }
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                        slidesPerGroup: 3,
                                        grid: {
                                            rows: 2,
                                            fill: 'row'
                                        }
                                    }
                                }"
                            >
                                <swiper-slide v-for="addition in addOnProps">
                                    <CardPriceShort :productProps="addition" />
                                </swiper-slide>
                            </swiper>
                        </div>
            
                        <div v-else v-for="addition in addOnProps" class="col-xl-4 col-lg-4 col-md-8 col-12 my-10">
                            <CardPriceShort :productProps="addition"/>
                        </div>
                    
                    
                    </div>  
                </div>
            </div>

            <div class="information-container mt-50 mb-50">
                <div v-if="serviceProps.attributes?.ohter_information_list" class="information-wrapper">
                    <h3 class="information-title">{{ serviceProps.attributes?.information_text }}</h3>
                    <ol class="information-list">
                        <li v-for="list in serviceProps.attributes?.ohter_information_list">{{ list.text }}</li>
                    </ol>
                </div>
            </div>


            <div class="other-container mt-50 mb-50">
                <h3>{{ serviceProps.attributes?.other_service }}</h3>
                <div class="row">
                    <div v-for="assesment in serviceProps.attributes?.other_service_list" class="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div class="card text-white card-has-bg click-col" :style="{backgroundImage : `url(${config.public.clientCmsBaseUrl + assesment.background.data.attributes?.url})`}">
                            <img class="card-img d-none" width="100%" height="100%" :src="`${config.public.clientCmsBaseUrl + assesment.background.data.attributes?.url}`" alt="">
                            <div class="card-img-overlay d-flex flex-column">
                                <div class="card-body">
                                    <h4 class="card-title mt-0 assessment-title" >{{ assesment.title }}</h4>
                    				<NuxtLink :to="assesment.link" class="btn btn-sm btn-outline">{{ assesment.display_button }}</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            
            <div class="cta-wrapper">
                <div class="row justify-content-center align-items-center">
                    <div class="col-8 text-wrapper">
                        <h3 class="cta-title">{{ serviceProps.attributes?.cta_title }}</h3>
                        <h5>{{ serviceProps.attributes?.cta_subtitle }}</h5>
                    </div>
                    <div class="col-8 col-md-4">
                        <a :href="serviceProps.attributes?.cta_button.value" class="cta-btn" target="_blank"> <i class="icofont-brand-whatsapp"></i>{{ serviceProps.attributes?.cta_button.display_text  }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/grid';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Grid, Pagination, Navigation } from 'swiper'

    export default {
        props: ['serviceProps', 'idProps', 'addOnProps'],
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
        setup(){
            const lengthPrice = ref(0)
            const config = useRuntimeConfig()
            return{
                config,
                lengthPrice,
                modules: [Grid, Pagination, Navigation],
            }
        }, 
        mounted(){
            const lengthPrice =  this.serviceProps.attributes?.reguler_price
            this.lengthPrice = lengthPrice.length      

            const cardPriceTitle = document.querySelectorAll('.assessment-title')
            cardPriceTitle.forEach(element => {
                var originalString = element.innerHTML;
                var splitWords = originalString.split(" ");
                element.innerHTML = `<span class="display-block">` + splitWords[0] + "</span>" + originalString.substr(originalString.indexOf(" ") + 1);
            })
        }
    }
</script>

<style lang="scss" scoped>

#imagePriceWrapper{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    margin-bottom: 30px;
}

.information-title{
    font-size: 28px;
    color: $dark;
    text-transform: uppercase;
    font-weight: 600;
}

.information-list {
    padding-left: 15px;
}

.container-title{
    margin-bottom: 60px;
    @media #{$large-mobile} {
        margin-bottom: 30px;
    }

    .product-title {
        font-weight: 600;
        color: $dark;
        text-transform: uppercase;
        text-decoration: underline;
    }

    .product-subtitle {
        width: 80%;
        @media #{$large-mobile} {
            width: 100%;
        }
    }
}

.active {
    background-color: $primary;
    color: $white;
}

.label-radio {
    font-weight: 600;
    color: $dark;
    margin-bottom: 20px;
}

.btn-outline {
    width: 120px;
    border: 2px solid $primary;
}

.button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 50px 0px;

    .button-wrapper {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
        position: relative;

        &::before {
            content: "";
            height: 2px;
            width: 100%;
            position: absolute;
            background-color: $gray-200;
            bottom: -10px;

            @media #{$large-mobile} {
                display: none;
            }
        }


        .btn-download {
            margin: 5px 20px;
            width: 250px;
            border-radius: 4px;

            @media #{$large-mobile} {
                width: 100%;
            }
        }
    }
}

.additional-container {
    flex-wrap: wrap;
}

.other-container{
    & h3 {
        text-transform: uppercase;
        font-weight: 600;
        color: $dark;
        margin-bottom: 20px;
    }
}


.card{
    border: none;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    overflow:hidden;
    border-radius:8px;
    height:300px;
    box-shadow: 0 0 12px 0 rgba(0,0,0,0.2);

    @media (max-width: 768px) {
    min-height:350px;
    }

    @media (max-width: 420px) {
    min-height:300px;
    }

 &.card-has-bg{
 transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  background-size:120%;
  background-repeat:no-repeat;
  background-position: top center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    // -webkit-filter: grayscale(1);
    // -moz-filter: grayscale(100%);
    // -ms-filter: grayscale(100%);
    // -o-filter: grayscale(100%);
    // filter: grayscale(100%);
  }
  &:hover {
    transform: scale(0.98);
    box-shadow: 0 0 5px -2px rgba(0,0,0,0.3);
    background-size:130%;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

    .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        background: rgb(35,79,109);
        // background: linear-gradient(0deg, rgba(4,69,114,0.5) 0%, $primary-two 100%);
    }
  }
}
    .card-body{ 
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

        & h4{
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
            margin: 0px 20px;
        }

        & .btn{
            border: 2px solid white;
            color: white;
            width: fit-content;
        }
    }
    &:hover {
        cursor: pointer;
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        .card-body{
            margin-top:30px;
            transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        }
    }
    .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        background: rgb(35,79,109);
        background: linear-gradient(0deg, rgba(168, 245, 1, 0.3) 0%, rgb(25, 125, 127, 0.8) 100%);
    }
}


.cta-wrapper {
        height: 200px;
        width: 100%;
        background: linear-gradient(100deg, rgba(238,232,87,1) 0%, rgba(84,164,165,1) 75%, rgba(95,177,177,1) 100%);
        margin: 20px 0;    
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 0px;

        @media (max-width: 768px) {
            height: fit-content;
            padding: 40px 0px;
            position: relative;
            justify-content: start;

        }

        & > div {
            width: 50%;

            @media (max-width: 768px) {
                width: 90%;
            }
        }

        & .text-wrapper {
            margin-bottom: 20px;
            & .cta-title{
                font-weight: 600;
                color: #fff;
            }

            & h5 {
                color: #ededed;
            }
        }
        
    }

    .cta-btn {
        font-size: 18px;
        font-weight: 600;
        line-height: 1;
        font-family: "Poppins", sans-serif;
        justify-content: center;
        padding: 13px 50px;
        cursor: pointer;
        white-space: nowrap;
        border-radius: 0;
        outline: none;
        border: 0;
        background-color: $white;
        border-radius: 0.25rem;
        color: $whatsapp;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


        @media (max-width: 768px) {
            font-size: 15px;
            padding: 12px 30px;
        }

        i {
            margin-right: 10px;
        }

        &:hover,
        &:active {
            background-color: $whatsapp;
            color: $white;
        }
    }

    .add-on-text{
        text-transform: uppercase;
        font-weight: 600;
        color: #000;
        margin-bottom: 20px;
    }

</style>