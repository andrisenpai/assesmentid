<template>
    <div class="news-block">
        <div class="image">
            <nuxt-link :to="`/blog/${blog?.slug}`">
                <img :src="`${blog.imageUrl}`" :alt="blog.title" class="static-image" />
            </nuxt-link>
        </div>
        <div class="lower-content">
            <ul class="info-list">
                <li>{{ blog.publishedDate }}</li>
                <li>{{ blog?.category }}</li>
            </ul>
            <h4 class="title">
                <nuxt-link :to="`/blog/${blog?.slug}`">{{ blog.title }}</nuxt-link>
            </h4>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["blog"],
    };
</script>

<style lang="scss">
    .news-block {
        border: 0.5px solid $gray-200;
    }
</style>
