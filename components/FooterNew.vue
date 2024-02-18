<template>
    <div id="footer-section" class="container-fluid">
        <div class="footer-wrapper row">
            <div class="footer-item col-md-4 col-12">
                <h3 class="mb-md-3">{{ data.attributes.title }}</h3>
                <p class="mb-md-4">{{ data.attributes.subtitle }}</p>
            </div>
  
            <div id="navigasi" class="footer-item col-md-2 col-6">
                <h4 class="footer-navigation-title">{{ data.attributes.navigation_title }}</h4>
                <ul class="footer-navigation">
                    <li  v-for="list in data.attributes.navigation_list"><NuxtLink :to="list.value"><i class="arrow icofont-rounded-right"></i>{{ list.display_text }}</NuxtLink></li>
                </ul>
            </div>

  
            <div id="product" class="footer-item col-md-3 col-6">
                <h4 class="footer-product-title">{{ data.attributes.product_title }}</h4>
                <ul class="footer-product">
                    <li v-for="list in data.attributes.product_list" ><NuxtLink :to="list.value">{{ list.display_text }}</NuxtLink></li>
                </ul>
            </div>
  
            <div id="contact" class="footer-item col-md-3 col-12">
                <h4>{{data.attributes.contact_title}}</h4>
                <div>{{ data.attributes.address }}</div>
                <div v-for="contact in data.attributes.contact_list">
                   <a class="contact-item" :href="contact.value[0].value" target="_blank"><span>{{ contact.key }} : </span>{{ contact.value[0].display_text }}</a>
                </div>
            </div>
        </div>

        <!-- <div class="copyright-wrapper" :style="{height: '50px'}">
                <span class="copyright-text">Copyright ©  Assessment Indonesia</span>     
        </div> -->
    </div>
</template>

<script>
export default {
    setup () {
        const footerStore = useFooterStore()
        const {data} = footerStore        
        return{
            data
        }
    }
}
</script>
<style lang="scss">
 .contact-item{
    color: #e6e6e6;

    &:hover{
        color: $white;
    }
 }

 .footer-product li {
    @media #{$large-mobile} {
        margin-top: 10px;
    }
 }

@media #{$tablet-device} {        
    #navigasi{
        order: 1;
    }

    #product{
        order: 3;
    }

    #contact{
        order: 2;
    }
}


</style>
