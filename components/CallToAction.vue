<template>
  <div class="container">
    <div v-if="template == 1" class="cta row justify-content-between align-items-center mx-auto shadow rounded">
        <div class="col-md-6 col-12">
            <div class="cta-map shadow-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.616558344449!2d106.787337!3d-6.1820461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6f6ba726d69%3A0x6bf1fdc9645a734d!2s7%2C%20Jl.%20Tanjung%20Duren%20Timur%206%20No.2%2C%20RT.7%2FRW.3%2C%20Tj.%20Duren%20Sel.%2C%20Kec.%20Grogol%20petamburan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011470!5e0!3m2!1sen!2sid!4v1679100101337!5m2!1sen!2sid" width="100%" height="600px" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map"></iframe>
            </div>
        </div>
        <div class="col-md-6 col-12">
            <div class="row gap-3 align-items-center justify-content-center h-50">
                <div class="col-12">
                    <div class="d-grid">
                        <button class="btn btn-primary btn-hover-lighten-primary" type="button"><span class="txt">Whatsapp</span></button>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-grid">
                        <button class="btn btn-primary btn-hover-lighten-primary" type="button"><span class="txt">Harga</span></button>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-grid">
                        <button class="btn btn-primary btn-hover-lighten-primary" type="button"><span class="txt">Assessment Lainnya</span></button>
                    </div>
                </div>
            </div>
        </div>                                                                        
    </div>
    <div v-else class="cta-wrapper">
        <div class="row justify-content-center align-items-center">
            <div class="col-8 text-wrapper">
                <h3 class="cta-title">{{ ctaProps.title }}</h3>
                <h5>{{ ctaProps.subtitle }}</h5>
            </div>
            <div class="col-8 col-md-4">
                <NuxtLink :to="`${currentUrl}/${idProps}`" class="cta-btn">{{ ctaProps.btnText }}</NuxtLink>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:["idProps", "ctaProps"],
    data() {
        return{
            template : 2
        }
    },
    setup(){
        const currentUrl = useRoute().fullPath
        
        return {
            currentUrl
        }
    }
}
</script>

<style lang="scss" scoped>

    .cta {
        width: 100%;
        padding: 2em;
        margin-bottom: 3em;
        margin-top: 3em;
        height: fit-content;
        background-color: $body-bg;

        & .cta-map {
            width: 100%;
            height: 300px;
            background-color: $dark;
            overflow: hidden;
            position: relative;

            & .map {
              position: absolute;
              top: -160px;
            }
        }
    }

    .cta-wrapper {
        height: 200px;
        width: 100%;
        // background-color: $black;
        background-image: linear-gradient(100deg, rgba(238,232,87,1) 0%, rgba(84,164,165,1) 75%, rgba(95,177,177,1) 100%);
        margin: 20px 0;    
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 0px;

        @media (max-width: 768px) {
            height: fit-content;
            padding: 40px 0px;
        }

        & > div {
            width: 50%;

            @media (max-width: 768px) {
                width: 90%;
            }
        }

        & .text-wrapper {
            margin-bottom: 20px;
            & .cta-title{
                font-weight: 600;
                color: #fff;
            }

            & h5 {
                color: #fff;
            }
        }
        
    }

    

    .cta-btn {
        font-size: 18px;
        font-weight: 600;
        line-height: 1;
        font-family: "Poppins", sans-serif;
        justify-content: center;
        padding: 13px 50px;
        cursor: pointer;
        white-space: nowrap;
        border-radius: 0;
        outline: none;
        border: 0;
        background-color: $white;
        border-radius: 0.25rem;
        color: $whatsapp;

        @media (max-width: 768px) {
            font-size: 15px;
            padding: 12px 50px;
        }

        &:hover,
        &:active {
            background-color: $whatsapp;
            color: $white;
        }
    }

</style>