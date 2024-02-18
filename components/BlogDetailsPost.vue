<template>
    <div class="blog-details-wrapper">
        <div class="blog-detils-image">
            <img class="fit-image" :src="cover" :style="{maxHeight : '60vh'}" alt="Project">
        </div>

        <div class="section-padding-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-8 col-lg-10 offset-xl-2 offset-lg-1">
                        <!-- Blog Details cntent Start -->
                        <div class="blog-details-content" data-aos="fade-up" data-aos-delay="300">
                            <div class="inner-container">

                                <!-- Page Breadcrumbs Start -->
                                <ul class="page-breadcrumb">
                                    <li><nuxt-link to="/">Home</nuxt-link></li>
                                    <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                                    <li>{{ title }}</li>
                                </ul>
                                <!-- Page Breadcrumbs End -->

                                <!-- Title Start -->
                                <h1 id="articleTitle" class="title">{{ title }}</h1>
                                <!-- Title End -->

                                <!-- Info List Start -->
                                <ul class="info-list date-category">
                                    <li>{{ publishedAt }}</li>
                                    <li>{{ category }}</li>
                                </ul>
                                <!-- Info List End -->

                                <div class="content-renderer">
                                    <ContentRenderer :value="md"/>
                                    <!-- <ContentDoc :v-slot="{md}"/> -->
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

<script lang="js">
    export default {
        props:["md", "title", "publishedAt", "cover", "category"]
    };
</script>

<style lang="scss">
#articleTitle{
    margin-top: 40px;
    margin-bottom: 10px;
}

.date-category{
    margin-bottom: 50px;
}

</style>