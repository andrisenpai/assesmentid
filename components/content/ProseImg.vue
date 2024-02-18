<template>
    <div class="w-100 d-flex justify-content-center align-items-center mt-4">
        <img :src="refinedSrc" :alt="alt" class="prose-img">
    </div>
</template>

<script setup lang="ts">
    import { withBase } from 'ufo'
    import { useRuntimeConfig, computed } from '#imports'

    const props = defineProps({
        src: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },

        width: {
            type: [String, Number],
            default: undefined
        },
        
        height: {
            type: [String, Number],
            default: undefined
        }
    })

    const refinedSrc = computed(() => {
        let url 
        if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
            url = withBase(props.src, useRuntimeConfig().public.clientCmsBaseUrl)
            return url
        }
        return props.src
    })
</script>

<style lang="scss">
    .prose-img{
        width: 80%;
        aspect-ratio: 10/7;
        max-width: 900px;
        @media #{$desktop-device} {
            width: 80%;
            aspect-ratio: 8/6;
        }
        @media #{$large-mobile} {
            width: 90%;
            aspect-ratio: 16/12;
        }
        @media #{$extra-small-mobile} {
            width: 95%;
            aspect-ratio: 16/12;
        }
    }
</style>