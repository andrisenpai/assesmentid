<template>
    <div id="orderSection" class="bg-white section-container">
        <div class="container-fluid section-wrapper" data-aos="fade-up" data-aos-delay="500">
            <div class="section-text mb-50">
                <h2 class="title mb-20" data-aos="fade-up text-center" data-aos-delay="500">{{ title }}</h2>
                <p class="subtitle-order text-center">{{ subtitle }}</p>
            </div>
            <div class="row justify-content-md-between justify-content-center align-items center">
                <div class="card-wrapper col-12 col-md-6 col-lg-6 col-xl-4 mb-30" v-for="orderItem in orders" :key="x">
                    <CardImage :order="orderItem"/>
                </div>
            </div>
        </div>
    </div>    
</template>

<script lang="js">
    export default {
        props: ["orders", 'title', 'subtitle']
    }
</script>

<style lang="scss" scoped>
#orderSection{
    margin-top: 80px;
    @media #{$large-mobile} {
        margin: 40px 0px;
    }
}
.section-container{
    display: flex;
    justify-content: center;
    align-items: center;
    
    // @media } {
        
    // }
}

.title{
    color: $dark;
    font-weight: 600;
    position: relative;
    margin-bottom: 40px;
    text-align: center;
    &::after {
        content: "";
        height: 2px;
        width: 75px;
        background-color: $dark;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}

.subtitle-order {
    color: $gray-600;
    font-weight: 400;
}

.card-wrapper{
    height: fit-content;
    padding: 0px 30px;
    @media #{$large-mobile} {
        margin: 10px 10px;
    }
}

</style>