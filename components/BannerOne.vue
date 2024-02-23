<template>
    <div class="about-banner-image" :style="{ backgroundImage: `url(${imageUrl})` }">
        <div class="background"></div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="content" data-aos="fade-up" data-aos-delay="500">
                        <h1 class="title">{{ title }}</h1>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'title']
}

</script>

<style lang="scss">
.about-banner-image {
    .background {
        background: rgb(9, 121, 120);
        background: -moz-linear-gradient(180deg, rgba(9, 121, 120, 0) 0%, rgba(1, 144, 173, 1) 90%);
        background: -webkit-linear-gradient(180deg, rgba(9, 121, 120, 0) 0%, rgba(1, 144, 173, 1) 90%);
        background: linear-gradient(180deg, rgba(9, 121, 120, 0) 0%, rgba(1, 144, 173, 1) 90%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#097978", endColorstr="#0190ad", GradientType=1);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0%;
    }
}
</style>
