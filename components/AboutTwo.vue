<template>
    <div class="about-container section-padding-top overflow-hidden">
        <div class="container-fluid about-wrapper">
            <div :class="['history-container', 'row']" v-for="(value, index) in list">
                <div v-if="index % 2 === 0" class="wrapper col-lg-6 mb-10 col-md-12 order-1 order-lg-1 image-wrapper"
                    data-aos="fade-right" data-aos-delay="700">
                    <div class="history-wrapper-2 d-inline-block d-lg-none">
                        <h1 id="title-upper-1" class="title">{{ value.title }}</h1>
                    </div>
                    <div class="history-image mb-3 mb-md-0 row justify-content-center align-items-center h-100">
                        <img class="col-12" :src="value.sideImage" alt="">
                    </div>
                </div>
                <div v-else class="wrapper col-lg-6 mb-10 col-md-12 align-self-center order-2 order-lg-2"
                    data-aos="fade-left" data-aos-delay="700">
                    <div class="history-wrapper-2">
                        <h1 class="title d-none d-lg-inline-block">{{ value.title }}</h1>
                        <div class="history-content">
                            <h4 class="subtitle">{{ value.subtitle }}</h4>
                            <p>{{ value.paragraph }}</p>
                        </div>
                    </div>
                </div>
                <div v-if="index % 2 === 0" class="wrapper col-lg-6 mb-10 col-md-12 align-self-center order-1 order-lg-2"
                    data-aos="fade-left" data-aos-delay="700">
                    <div class="history-wrapper">
                        <h1 class="title d-none d-lg-inline-block">{{ value.title }}</h1>
                        <div class="history-content">
                            <h4 class="subtitle">{{ value.subtitle }}</h4>
                            <p class="history">{{ value.paragraph }}</p>
                        </div>
                    </div>
                </div>
                <div v-else class="wrapper col-lg-6 mb-10 col-md-12 order-1 order-lg-2" data-aos="fade-right"
                    data-aos-delay="700">
                    <div class="history-wrapper-2 d-inline-block d-lg-none">
                        <h1 id="title-upper-2" class="title">{{ value.title }}</h1>
                    </div>
                    <div class="history-image mb-3 mb-md-0 row justify-content-center align-items-center h-100">
                        <img class="col-12" :src="value.sideImage" alt="">
                    </div>
                </div>
            </div>
            <div :class="['history-container', 'row']">
                <div class="wrapper col-lg-12 mb-10 col-md-12 order-1 order-lg-2" data-aos="fade-right"
                    data-aos-delay="700">
                    <div class="history-wrapper-3 d-block mb-5">
                        <h1 id="title-upper-2" class="title">TIM KAMI</h1>
                        <div class="history-wrapper">
                            <div class="history-content">
                                <p class="history text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Sunt rem labore repudiandae eum corporis iusto enim quae perspiciatis facere. Placeat
                                    ipsa quos voluptates aperiam consequatur, voluptatem expedita odit nihil! Mollitia.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus dolorum adipisci,
                                    ratione fugiat voluptatibus, iste sequi asperiores aliquid enim ex, consequatur quidem
                                    repellendus commodi accusamus tenetur placeat quia error fuga?</p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 mb-md-0 justify-content-center align-items-center">
                        <img class="w-100" src="~/assets/images/ourteam.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['list']
};
</script>
<style lang="scss">
.history-wrapper {
    & .title {
        font-size: 40px;
        font-weight: 600;
        font-family: $font-family-base;
        color: $black;
        text-transform: uppercase;
        position: relative;
        margin-bottom: 20px;
        // text-align: center;

        &::after {
            content: "";
            text-align: center;
            height: 2px;
            width: 100%;
            background-color: $primary2;
            position: absolute;
            bottom: -10px;
            left: 0;
            // transform: translate(-50%, -50%);
        }

        @media #{$large-mobile} {
            margin-bottom: 30px;
        }

        @media #{$small-mobile} {
            margin-bottom: 20px;
            font-size: 24px;
        }
    }
}
.history-wrapper-2 {
    & .title {
        font-size: 40px;
        font-weight: 600;
        font-family: $font-family-base;
        color: $black;
        text-transform: uppercase;
        position: relative;
        margin-bottom: 20px;
        // text-align: center;

        &::after {
            content: "";
            text-align: center;
            height: 2px;
            width: 100%;
            background-color: $primary2;
            position: absolute;
            bottom: -10px;
            left: 0;
            // transform: translate(-50%, -50%);
        }

        @media #{$large-mobile} {
            margin-bottom: 30px;
        }

        @media #{$small-mobile} {
            margin-bottom: 20px;
            font-size: 24px;
        }
    }
}
.about-container {
    margin: 0 10px;

    @media #{$extraBig-device} {
        padding-bottom: 100px;
    }

    .about-wrapper {
        @media #{$large-mobile} {
            padding: 0;
        }
    }
}

.history-container {
    width: 100%;
    height: fit-content;
    align-content: center;
    margin: 0 auto 100px auto;
    padding: 0 50px;


    @media #{$tablet-device, $large-mobile} {
        padding: 0;
        margin-bottom: 120px;
    }

    .history-image {
        // padding: 100px;

        // @media #{$desktop-device, $large-mobile} {
        //     padding: 30px;
        // }

        // @media #{$tablet-device} {
        //     padding: 20px;
        // }

        // @media #{$small-mobile} {
        //     margin-bottom: 20px;
        //     padding: 10px;
        // }

        img {
            max-width: 550px;

            @media #{$tablet-device} {
                width: 50%;
            }
        }

        p {
            @media #{$tablet-device, $large-mobile} {
                margin-top: 50px;
            }
        }

    }

    .history-image-2 {
        max-width: 75%;
        margin: 20px auto;
    }
}

.wrapper {
    height: fit-content;
}

#title-upper-1,
#title-upper-2 {
    margin-bottom: 30px;

    @media #{$small-mobile} {
        font-size: 38px;
    }
}</style>