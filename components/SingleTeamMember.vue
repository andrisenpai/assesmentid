<template>
    <div class="team-block">
        <div class="inner-box">
            <div class="image">
                <img :src="member.imgSrc" :alt="member.name">
                <ul class="social-icons">
                    <li v-for="(social, index) in member.socials" :key="index">
                        <a :href="social.url" :class="social.icon"></a>
                    </li>
                </ul>
            </div>
            <div class="team-content">
                <h4 class="title">{{ member.name }}</h4>
                <h5 class="subtitle">{{ member.position }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['member']
    };
</script>