<template>
    <div class="gallery-container container-fluid">
<!-- 
        <div class="section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-12" data-aos="fade-up" data-aos-delay="300">
                        <div class="breadcrumb-wrapper">
                            <div class="bread-title">
                                <h1 class="title">{{ galleryProps.attributes.page_title }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="row g-1 g-lg-2 w-100 section-padding-bottom justify-content-center align-items-center">
            <div v-for="photo in galleryProps.attributes.album" class="photo-container">
                <div class="photo-wrapper" :style="{backgroundImage: `url('${config.public.clientCmsBaseUrl + photo.image.data.attributes.url}')`}">
                    <span>{{ photo.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()
    defineProps(["galleryProps"])
</script>

<style lang="scss" scoped>
.gallery-container {
    padding: 0 50px;

    @media #{$small-mobile} {
    padding: 0 10px;
        
    }

}
.photo-container {
    height: fit-content;
    width: 33.3333%;
    height: 300px;

    @media #{$tablet-device, $large-mobile} {
        width: 50%;
    }

    @media #{$small-mobile} {
        width: 100%;
    }

    .photo-wrapper{
        height: 100%;
        background-color: transparent;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        transition: $transition-base;

        &::before{
            content: "";
            position: absolute;
            height: 0px;
            width: 100%;
            bottom: 0;
            background-color: rgba($color: #000000, $alpha: 0.4);
            transition: $transition-base;
        }

        & span {
            font-size: 20px;
            font-weight: 600;
            color: $white;
            position: absolute;
            bottom: 0;
            padding: 0 0 20px 20px;
            height: auto;
            width: 60%;
            opacity: 0;
            transition: $transition-base;
        }

        &:hover{
            background-size: 1.1;
            &::before{
                height: 100%;
            }

            & span {
                opacity: 1;
            }
        }
    }
}


</style>