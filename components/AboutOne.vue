<template>
    <div class="container-fluid">
        <div class="wrapper-fluid section-padding-top section-padding-bottom row justify-content-center align-items-center">
            <div class="container-fluid about-one-container">
                <div class="row">
                    <div class="col-lg-6 mb-20 col-md-12 align-self-center d-block d-lg-none" data-aos="fade-up"
                        data-aos-delay="500">
                        <div class="history-wrapper">
                            <h1 class="about-title text-dark" :style="{ marginBottom: 0 }">{{ about.title }}</h1>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-20 col-md-12 history-image-wrapper" data-aos="fade-up" data-aos-delay="500">
                        <div class="history-image">
                            <img class="rounded side-image-1 d-none d-lg-block shadow" :src="`${about.sideImage}`" alt="">
                            <img class="rounded side-image-2 shadow" :src="`${about.sideImage2}`" alt="">
                        </div>
                    </div>
                    <div class="history-text-container col-lg-6 mb-20 col-md-12 align-self-center" data-aos="fade-up"
                        data-aos-delay="500">
                        <div class="history-wrapper">
                            <h1 class="about-title text-dark d-none d-lg-block">{{ about.title }}</h1>
                            <div class="history-content">
                                <h4 class="about-subtitle">{{ about.subtitle }}</h4>
                                <p id="about-paragraph" class="about-paragraph">{{ about.paragraph }}</p>
                            </div>
                            <nuxt-link to="/about" class="link-green">LIHAT PROFIL KAMI <svg width="24" height="25" viewBox="0 0 24 25"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.9101 21.1695C8.7201 21.1695 8.5301 21.0995 8.3801 20.9495C8.0901 20.6595 8.0901 20.1795 8.3801 19.8895L14.9001 13.3695C15.3801 12.8895 15.3801 12.1095 14.9001 11.6295L8.3801 5.10953C8.0901 4.81953 8.0901 4.33953 8.3801 4.04953C8.6701 3.75953 9.1501 3.75953 9.4401 4.04953L15.9601 10.5695C16.4701 11.0795 16.7601 11.7695 16.7601 12.4995C16.7601 13.2295 16.4801 13.9195 15.9601 14.4295L9.4401 20.9495C9.2901 21.0895 9.1001 21.1695 8.9101 21.1695Z"
                                        fill="#197D7F" />
                                </svg>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="js">
export default {
    props: [
        "about",
    ],
};
</script>

<style lang="scss">
.history-text-container {
    padding-right: 40px;
    padding-left: 40px;
    @media #{$large-mobile} {
        padding: 0px 10px;
    }
}

.wrapper-fluid {
    padding: 50px 40px;

    @media #{$large-mobile} {
        padding: 50px 20px;
    }
}

.about-one-container {
    height: 90vh;

    @media #{$lg-down} {
        height: fit-content;
    }

    & .row {
        height: 100%;
    }
}

.history-image-wrapper {
    @media #{$tablet-device} {
        height: 400px;
    }
}

.history-image {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;

    @media #{$lg-down} {
        justify-content: center;
    }

    & .side-image-1,
    & .side-image-2 {
        width: 500px;
        transition: $transition-base;

        @media #{$extraBig-device} {
            width: 500px;
        }

        @media #{$desktop-device} {
            width: 450px;
        }

        // &:hover{
        //     transform: scale(1.1);
        // }
    }

    & .side-image-1 {
        position: absolute;
        top: 70px;
        left: 150px;

        @media #{$laptop-device, } {
            left: 0px;
        }

        @media #{$desktop-device, $tablet-device, $large-mobile} {
            left: -10px;
        }

        // &:hover {
        //     z-index: 3;
        // }
    }

    & .side-image-2 {
        position: absolute;
        right: 50px;
        top: 160px;

        @media #{$laptop-device, } {
            right: 0px;
        }

        @media #{$desktop-device, $tablet-device, $large-mobile} {
            right: -10px;
        }

        @media #{$lg-down} {
            position: static;
            width: 100%;
            max-width: 450px;
            margin: 30px auto;
        }
    }
}

.about-title {
    font-size: 40px;
    font-weight: 600;
    font-family: $font-family-base;
    color: $white;
    text-transform: uppercase;
    position: relative;
    margin-bottom: 20px;

    &::after {
        content: "";
        height: 2px;
        width: 35%;
        background-color: $primary2;
        position: absolute;
        bottom: -10px;
        left: 0;
    }
}

.about-subtitle {
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    line-height: 1.8;
    color: $black;
}

#about-paragraph {
    color: $black;
    margin-bottom: 20px;
}

@media #{$laptop-device, $large-mobile} {
    .about-title {
        font-size: 30px;
    }

    .about-subtitle {
        font-size: 22px;

    }

    #about-paragraph {}
}</style>