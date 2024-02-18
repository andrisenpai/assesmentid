<template>
    <Head>
      <Title>Contact | Assessment Indonesia</Title>
    </Head>
    <NuxtErrorBoundary>
    <div class="main-container">
        <TheHeaderTwo />
        <OffCanvasMobileMenu />

        <!-- Contact Map Start -->
        <div>
            <div class="title-container" :style="{backgroundImage: `url(${background})`}">
                <div class="wrapper"></div>
                <h1>{{ title }}</h1>
            </div>
            <div class="section-container">
                <div id="mapContainer" class="contact-section">
                    <!--Google Map Area Start-->
                    <div class="google-map-area w-100" v-html="iframe"></div>
                    <!--Google Map Area Start-->
                </div>
                <!-- Contact Map End -->

                <!-- Contact Page Section Start -->
                <div class="contact-section contact-content-wrapper">
                    <div class="">
                        <!-- Contact Info Boxed Start -->
                        <div class="contact-info-boxed bg-light" data-aos="fade-up" data-aos-delay="300">
                            <div class="row">
                                <div class="col-12 mb-50">
                                    <div class="inner-info">
                                        <span class="call">{{ telephone.title }}:<br><a :href="`tel:${telephone.value}`">{{ telephone.display }}</a></span>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="inner-content">
                                        <h1 class="title">{{ city }}, <span>{{ province }}</span></h1>
                                        <span id="address" class="text">{{ address }} </span>
                                        <span class="email" v-for="(contact, index) in contacts">
                                            {{ contact.key }} : <br>  <a :href="index < 1?'mailto:'+ `${value.value}` :  'https://api.whatsapp.com/send?phone=' + `${value.value}`" v-for="(value, i) in contact.value" class="contact-link" v-html="getContactText(value, i)"></a>
                                        </span>
                                        <ul class="location-list">
                                            <li><span>{{ work.title }}:</span>{{ work.display }}</li>
                                            <li><a :href="link" class="map-button" target="_blank">{{ direction }}</a></li>
                                        </ul>
                                        <div class="icon-building">
                                            <img  src="/images/icon/half-building.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!-- Contact Info Boxed End -->
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Contact Page Section End -->
        <FooterNew/>
        <FooterSimple/>
    </div>
    </NuxtErrorBoundary>
</template>

<script lang="js">
import Aos from 'aos'

    export default defineComponent({
        async setup(){
            const {language} = useNavigationStore()
            const config = useRuntimeConfig()

            const [
                {data},
                {data : contactItem},
            ] = await Promise.all([
                useFetch('/api/footer', {
                    params: {locale : `${language}`}
                }),
                useFetch('/api/contactPage')
            ])

            if(!data.value || !contactItem.value){
                throw createError({statusCode: 500, message: "something went wrong"})
            }
            
            const title = contactItem.value.attributes?.title
            const link = contactItem.value.attributes?.link
            const direction = contactItem.value.attributes?.button
            const background = config.public.clientCmsBaseUrl + contactItem.value.attributes?.background.data.attributes.url
            const province = contactItem.value.attributes?.provinsi
            const city = contactItem.value.attributes?.kota
            const address = contactItem.value.attributes?.address
            const iframe = contactItem.value.attributes?.google_map_iframe
            const telephone = {
                title : contactItem.value.attributes?.phone.key,
                display : contactItem.value.attributes?.phone.value[0].display_text,
                value : contactItem.value.attributes?.phone.value[0].value
            }
            const work = {
                title : contactItem.value.attributes?.work_hour.key,
                display : contactItem.value.attributes?.work_hour.value[0].display_text,
                value : contactItem.value.attributes?.work_hour.value[0].value
            }            
            const formTitle = contactItem.value.attributes?.question_title
            const formSubtitle = contactItem.value.attributes?.question_subtitle
            const contacts = contactItem.value.attributes?.contact

            const footers = {
                address : data.value.attributes?.address,
                copyright : data.value.attributes?.copyright,
                email_1 : data.value.attributes?.email_1,
                email_2 : data.value.attributes?.email_2,
                facebook : data.value.attributes?.facebook,
                instagram : data.value.attributes?.instagram,
                no_telepon : data.value.attributes?.no_telepon,
                twitter : data.value.attributes?.twitter,
                wa_1 : data.value.attributes?.wa_1,
                wa_2 : data.value.attributes?.wa_2,
            }
            
            return {
                footers,
                province,
                city,
                address,
                iframe,
                telephone,
                work,
                formTitle,
                formSubtitle,
                contacts,
                title,
                link,
                direction,
                direction,
                background
            }
        },
        mounted() {
            Aos.init()
            const address = document.getElementById('address');
            address.innerHTML = address.innerHTML.replace(/\n/g, '<br>');   

            window.scroll({
                top: 0,
                behavior: "smooth",
            })
        },
        methods : {
            getContactText(value, i){
                return value.display_text + (i === 0 ? '<br>' : '');
            }
        },
    })

</script>

<style lang="scss">
    .icon-building{
        position: absolute;
        right: -63px;
        bottom: -20px;

        img {
            width : 30rem; 
            height : 30rem;

            @media #{$laptop-device} {
                width : 25rem; 
                height : 25rem;
            }

            @media #{$desktop-device} {
                width: 10rem;
                height: 10rem;
            }

            @media #{$tablet-device, $large-mobile, $small-mobile} {
                display: none;
            }
        }
    }
</style>