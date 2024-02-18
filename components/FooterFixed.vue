<template>
    <div class="footer-container">
        <div class="fixed-footer">
            <div class="fixed-footer-item">
                <a :href="data?.attributes?.wa_value" target="_blank">
                    <i id="ic-whatsapp" class="icofont-whatsapp icon-fixed"></i>
                    <span class="icon-fixed-text">{{ data?.attributes?.wa_title }}</span>
                </a>
            </div>
            <div id="ic-telephone" class="fixed-footer-item">
                <a :href="data?.attributes?.telephone_value" target="_blank">
                    <i class="icofont-phone icon-fixed"></i>
                    <span class="icon-fixed-text">{{ data?.attributes?.telephone_title }}</span>
                </a>
            </div>
            <div class="fixed-footer-item">
                <a :href="data?.attributes?.direction_value" target="_blank">
                    <i class="icofont-location-pin"></i>
                    <span class="icon-fixed-text">{{ data?.attributes?.direction_title }}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        setup(){
            const footerStore = useFooterStore()
            return {
                data : footerStore.dataSmall
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer-container {
        position: sticky;
        bottom: 0;
        z-index: 999999;
    }
</style>