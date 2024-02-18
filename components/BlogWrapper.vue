<template>
    <div class="blog-tab-section">
        <div class="container">
            <div class="row row-cols-1 box mtn-50">
                <!-- Single blog Start -->
                <div class="col mt-50" :class="blog?.category" v-for="(blog, index) in blogData" :key="index">
                    <div class="single-blog-wrap">
                        <div class="blog-thumb">
                            <nuxt-link to="/blog/1" class="image">
                                <img class="fit-image" :src="blog.imgSrc" :alt="blog.title">
                            </nuxt-link>
                        </div>
                        <div class="inner-content">
                            <ul class="info-list">
                                <li>{{ blog.date }}</li>
                                <li>{{ blog?.category }}</li>
                            </ul>
                            <h4 class="title">
                                <nuxt-link to="/blog/1">{{ blog.title }}</nuxt-link>
                            </h4>
                            <p>{{ blog.desc }}</p>
                            <nuxt-link to="/blog/1" class="article">
                                full article <span class="arrow icofont-rounded-right"></span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- Single blog End -->
            </div>

            <div class="row section-padding-bottom">
                <div class="col-12">
                    <div class="load-more text-center mt-50">
                        <a href="javascript:void(0)" @click="loadMore" v-if="currentItem < blogs.length">...Load more...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                currentItem: 4
            }
        },
        computed: {
            blogData() {
                return this.blogs.slice(0, this.currentItem);
            }
        },
        methods: {
            loadMore() {
                this.currentItem += 3;
            }
        }
    }
</script>
