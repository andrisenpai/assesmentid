<template>
    <div class="section-padding-bottom bg-light funfact-wrapper">
        <div class="container">
            <div class="funfact-inner">
                <div class="row mtn-30">
                    <div class="col-sm-4 col-6 mt-30" data-aos="fade-up" v-for="(counter, index) in counterUpContent" :key="index">
                        <div class="single-funfact">
                            <span>{{ counter.endVal }}</span>
                            <h6 class="title" v-html="counter.title"></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counterUpContent: [
                    {
                        endVal: 8000,
                        title: "Partner <br> worldwide"
                    },
                    {
                        endVal: 1250,
                        title: "employees and <br> staffs"
                    },
                    { 
                        endVal: 904,
                        title: "project completed <br> on 60 countries"
                    },
                ]
            }
        },
    };
</script>