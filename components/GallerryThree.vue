<template>
    <div class="gallery-container container-fluid" data-aos="fade-up" data-aos-delay="300">
        <div class="row">
            <div class="col">
                <a href="javascript:void(0)" @click="showGallery1()"
                    :class="gallery1 == true ? 'chooseGallery active' : 'chooseGallery'">test 1</a>
            </div>
            <div class="col">
                <a href="javascript:void(0)" @click="showGallery2()"
                    :class="gallery2 == true ? 'chooseGallery active' : 'chooseGallery'">test 2</a>
            </div>
        </div>
        <div v-if="gallery1 == true"
            class="row g-1 g-lg-2 w-100 section-padding-bottom justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
            <div v-for="photo in galleryProps.attributes.album" class="photo-container">
                <a href="javascript:void(0)"
                    @click="showImage(config.public.clientCmsBaseUrl + photo.image.data.attributes.url)">
                    <div class="photo-wrapper"
                        :style="{ backgroundImage: `url('${config.public.clientCmsBaseUrl + photo.image.data.attributes.url}')` }">
                        <span>{{ photo.title }}</span>
                    </div>
                </a>
            </div>
        </div>
        <div v-if="gallery2 == true"
            class="row g-1 g-lg-2 w-100 section-padding-bottom justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
            <div v-for="(photo, index) in dataImage" class="photo-container" v-show="index < showPagemax">
                <a href="javascript:void(0)"
                    @click="showImage('/images/404-new.svg')">
                    {{ index }}
                    <div class="photo-wrapper"
                        :style="{ backgroundImage: `url('/images/404-new.svg')` }">
                        <span>Sample Image Gallery</span>
                    </div>
                </a>
            </div>

            <!-- <div class="pagination center">
                <div class="pagination">
                    <a href="javascript:void(0)" v-for="(page, index) in paginationTot">{{(index+1)}}</a>
                </div>
                
            </div> -->
        </div>
    </div>
    <div v-if="isImageShowing == true" class="modalImage">
        <div class="contentImage">
            <button @click="closeImage()" type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            <img :src="urlImage" class="img-fluid">
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
defineProps(["galleryProps"])
let isImageShowing = ref(false)
let urlImage = ref()
let gallery1 = ref(true)
let gallery2 = ref(false)
//pagination
let dataImage = ref(12)
let showPagemin = ref(0)
let showPagemax = ref(6)
let paginationTot = dataImage.value / showPage.value
function next(){

}
function previous(){

}
function showImage(url) {
    isImageShowing.value = true
    urlImage.value = url
}
function closeImage() {
    isImageShowing.value = false
}
function showGallery1() {
    if (gallery2.value == true) {
        gallery1.value == true ? gallery1.value = false : gallery1.value = true
        gallery1.value = true
        gallery2.value = false
    }
}
function showGallery2() {
    if (gallery1.value == true) {
        gallery2.value == true ? gallery2.value = false : gallery2.value = true
        gallery2.value = true
        gallery1.value = false
    }
}
</script>

<style lang="scss" scoped>
.pagination{
    margin: 20px 0px;
    a{
        margin: 10px;
    }
}
.gallery-container {
    padding: 0 50px;

    @media #{$small-mobile} {
        padding: 0 10px;

    }

}

.chooseGallery {
    background-color: white;
    padding: 50px 10px;
    display: block;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 600;
    margin: 5px 0px;
    &.active {
        background-color: $primary2;
        color: white;
        text-transform: capitalize;
    }
}

.modalImage {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba($color: #000000, $alpha: 0.4);
    transition: 1s;

    .contentImage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60vw;

        button {
            position: absolute;
            right: 20px;
            top: 10px;
            font-size: 14px;
            background-color: whitesmoke;
            opacity: 1;
            padding: 15px;
            border-radius: 50%;
        }
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

    .photo-wrapper {
        height: 100%;
        background-color: transparent;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        transition: $transition-base;

        &::before {
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

        &:hover {
            background-size: 1.1;

            &::before {
                height: 100%;
            }

            & span {
                opacity: 1;
            }
        }
    }
}
</style>