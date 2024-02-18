<template>
    <div class="about-banner-image" :style="{backgroundImage: `url(${imageUrl})`}">
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
    }

</style>
