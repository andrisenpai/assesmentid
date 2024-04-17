<template>
    <div class="blog-details-wrapper">
        <div class="blog-detils-image">
            <img class="fit-image" :src="`${cover}`" :style="{ maxHeight: '60vh' }" alt="Project">
        </div>

        <div class="">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12">
                        <!-- Blog Details cntent Start -->
                        <div class="row">
                            <div class="col-md-4">
                                <SidebarContent />
                            </div>
                            <div class="col-md-8">
                                <div class="blog-details-content" data-aos="fade-up" data-aos-delay="300">
                                    <div class="inner-container">

                                        <!-- Page Breadcrumbs Start -->
                                        <ul class="page-breadcrumb">
                                            <li><nuxt-link to="/">{{ navStore.home }}</nuxt-link></li>
                                            <li><nuxt-link to="/products">{{ navStore.product }}</nuxt-link></li>
                                            <li>{{ title }}</li>
                                        </ul>
                                        <!-- Page Breadcrumbs End -->

                                        <!-- Title Start -->
                                        <h1 class="display-4 text-dark fw-bold heading-font mt-4 mb-3">{{ title }}</h1>
                                        <!-- Title End -->

                                        <div class="content-renderer">
                                            <ContentRenderer :value="md" />
                                            <!-- <ContentDoc :v-slot="{md}"/> -->
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Blog Details cntent End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from './Breadcrumb.vue';

export default {
    props: ["md", 'title', 'cover'],
    components: { Breadcrumb },
    setup() {
        const navStore = useNavigationStore()
        return {
            navStore
        }
    }
}
</script>

<style lang="scss" scoped>
.blog-detils-image {
    width: 100%;
    // height: 600px;
    // background-color: aqua;
    background-size: cover;

    @media #{$small-mobile, $large-mobile} {
        background-position-x: -20em;
    }
}

p>img:first-child {
    display: block;
    margin: auto;
}

.inner-container {
    padding-top: 70px;

    @media (max-width: 768px) {
        padding: 20px 10px;
    }
}
</style>