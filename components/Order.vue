<template>
    <div id="orderSection" class="bg-white section-container">
        <div class="container-fluid section-wrapper" data-aos="fade-up" data-aos-delay="500">
            <div class="section-text mb-50">
                <h2 class="title mb-20" data-aos="fade-up text-center" data-aos-delay="500">{{ title }}</h2>
                <p class="subtitle-order text-center">{{ subtitle }}</p>
            </div>
            <div class="row justify-content-md-between justify-content-center align-items center">
                <div class="card-wrapper col-12 col-md-6 col-lg-6 col-xl-4 mb-30" v-for="(orderItem, index) in orders"
                    :key="x">
                    <CardImage :order="orderItem" :number="index" />
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" v-for="(orderItem, index) in orders" :key="x" :id="`ModalInformation${index}`" tabindex="-1"
        :aria-labelledby="`ModalInformationLabel${index}`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" :id="`ModalInformationLabel${index}`">{{ orderItem.title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Silahkan pilih salah satu admin yang tersedia dibawah ini untuk {{ orderItem.title }} yang anda butuhkan.
                </div>
                <div class="row pb-4 mt-2">
                    <div class="col-md-6 text-center">
                        <div class="admin-contact">
                            <a :href="orderItem.link" target="_blank">
                                <img src="/images/icon/social/whatsapp.svg" alt=""><span>Hubungi Admin 1</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 text-center">
                        <div class="admin-contact">
                            <a :href="orderItem.link" target="_blank">
                                <img src="/images/icon/social/whatsapp.svg" alt=""><span>Hubungi Admin 2</span>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button> -->

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
#orderSection {
    margin-top: 80px;

    @media #{$large-mobile} {
        margin: 40px 0px;
    }
}

.admin-contact {
    img {
        margin-right: 10px;
    }
    a{
        padding: 15px;
        width: 100%;
        &:hover{
            border-radius: 10px;
            background-color: $primarylight;
        }
    }
    span {

        color: $primary2;
    }
}

.section-container {
    display: flex;
    justify-content: center;
    align-items: center;

    // @media } {

    // }
}

.modal-header {
    h1 {
        color: $primary2;
        font-size: 30px !important;
    }

    border: 0;
}

.title {
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
        transform: translate(-50%, -50%);
    }
}

.subtitle-order {
    color: $gray-600;
    font-weight: 400;
}

.card-wrapper {
    height: fit-content;
    padding: 0px 30px;

    @media #{$large-mobile} {
        margin: 10px 10px;
    }
}</style>