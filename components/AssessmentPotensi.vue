<template>
    <div class="container-fluid container-lg">
        <div class="container-fluid container-title mt-5 mb-20">
            <h1 class="product-title">{{ assessmentPotensi.title }}</h1>
            <p>{{ assessmentPotensi.subtitle }}</p>
        </div>

        <div class="container-fluid">
            <div class="mb-20 d-flex ">
                <div class="w-100">
                    <h5 class="label-radio">{{ assessmentPotensi.textCategories }}</h5>
                    
                    <!--radio-->
                    <div class="row filter-wrapper justify-content-lg-between">
                        <div :id="i === 1 ?'second-radio': '' " :class="['input-group-wrapper col-7', i === 1 ?'col-xl-6' : 'col-xl-3']" v-for="(key, i) in assessmentPotensi.filterList">
                            <div class="input-group">
                                <div id="radioBtn" class="btn-group">
                                    <button v-for="(buttonItem, index) in key"  
                                        :class="['btn btn-sm btn-outline',  index === 0 ? 'active' : '' ]" 
                                        :data-toggle="`toogle-${buttonItem.display_text}`" 
                                        :data-group="`toogle-${i}`"
                                        :data-value="buttonItem.value"
                                    >    
                                        {{ buttonItem.display_text }}
                                    </button>
                                </div>
                                <div class="button-step">{{ i + 1 }}</div>
                            </div>
                        </div>
	                </div>
                    <!--end radio-->
                
                </div>
            </div>
            <div id="tableContainer" class="table-responsive-xxl">
                <table id="tableWrapper" class="table table-borderless table-hover">
                    <thead class="table-dark position-relative thead-container">
                        <tr class="bg-light">
                            <th scope="col" 
                                :width="i == 0? '30%': i == 1 ? '11%': i == 2 ? '5%' : i == 3 ? '29%': i == 4 ? '10%' : '15%'"  
                                v-for="(head, i) in assessmentPotensi.tableHead" class="text-center text-nowrap table-head"
                                :class="i === 0 ? 'min-width-column' : ''"
                            >{{ head.text }}</th>
                        </tr>
                    </thead>
                    <tbody class="position-relative">
                        <tr v-for="(value, index) in dataProps" :key="index">
                            <td :data-basis="JSON.stringify(value.attributes.bases.data)" :data-groups="JSON.stringify(value.attributes.groups.data)" class="table-item text-left text-nowrap table-body min-width-column">{{ value.attributes.nama }} <span v-if="index < 10" class="badge rounded bg-warning">Baru</span></td>
                            <td :data-basis="JSON.stringify(value.attributes.bases.data)" :data-groups="JSON.stringify(value.attributes.groups.data)" class="table-item text-center table-body text-nowrap fw-bolder">{{ quantity === '>20 orang' ?  parseInt(value.attributes.harga_20_orang_keatas).toLocaleString('id-ID') : parseInt(value.attributes.harga_dibawah_20_orang).toLocaleString('id-ID') }}</td>
                            <td :data-basis="JSON.stringify(value.attributes.bases.data)" :data-groups="JSON.stringify(value.attributes.groups.data)" class="table-item text-center table-body text-nowrap">{{ value.attributes.termasuk }}</td>
                            <td :data-basis="JSON.stringify(value.attributes.bases.data)" :data-groups="JSON.stringify(value.attributes.groups.data)" class="table-item text-center table-body">{{ value.attributes.hasil }}</td>
                            <td :data-basis="JSON.stringify(value.attributes.bases.data)" :data-groups="JSON.stringify(value.attributes.groups.data)" class="table-item text-center table-body text-nowrap">{{ value.attributes.tidak_termasuk }}</td>
                            <td :data-basis="JSON.stringify(value.attributes.bases.data)" :data-groups="JSON.stringify(value.attributes.groups.data)" class="table-item text-center table-body text-nowrap">{{ value.attributes.proses_laporan }}</td>
                        </tr>
                    </tbody>
            </table>
          </div>

          <div class="button-container">
            <div class="button-wrapper">
                <a :href="config.public.clientCmsBaseUrl + btn.file.data.attributes.url" 
                    class="btn btn-sm btn-primary btn-download" v-for="btn in assessmentPotensi.buttonDownload" 
                    target="_blank"
                    :data-basis="JSON.stringify(btn.bases.data)"
                >
                    {{ btn.display_text  }}
                </a>
            </div>
          </div>

            <div class="additional-container">
                <div class="additional-wrapper">
                    <h3 class="add-on-text">{{ assessmentPotensi.addOnText }}</h3>
                    <div class="row">
                        <div class="col-12 slider-container">
                            <swiper
                                :grid="{rows: 2,
                                            fill: 'row'}"
                                :spaceBetween="5"
                                :scrollbar="{
                                    draggable: true
                                }"
                                :modules="modules"
                                :autoplay="{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                    
                                }"
                                :navigation="swiperOptions.navigation"
                                :breakpoints="{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 5,
                                        slidesPerGroup: 1,
                                        grid: {
                                            rows: 2,
                                            fill: 'row'
                                        }
                                    },
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                        slidesPerGroup: 2,
                                        grid: {
                                            rows: 2,
                                            fill: 'row'
                                        }
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                        slidesPerGroup: 3,
                                        grid: {
                                            rows: 2,
                                            fill: 'row'
                                        }
                                    }
                                }"
                            >
                                <swiper-slide v-if="basis === 'online'" v-for="addition in addOnsOnline" id="" class="addon-card" :data-basis="JSON.stringify(addition.attributes.bases.data)">
                                    <CardPriceShort :productProps="addition" />
                                </swiper-slide>

                                <swiper-slide v-else v-for="addition in addOnsOffline" id="" class="addon-card" :data-basis="JSON.stringify(addition.attributes.bases.data)">
                                    <CardPriceShort :productProps="addition" />
                                </swiper-slide>
                            </swiper>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>  
                    </div>
                </div>
            </div>

            <div v-if=" assessmentPotensi.onlineInformation?.text || assessmentPotensi.offlineInformation?.text" class="information-container mt-50 mb-50">
                <div class="information-wrapper">
                    <h3 class="information-title">{{ assessmentPotensi.otherText }}</h3>
                    <ol class="information-list" data-basis="online">
                        <li v-for="list in assessmentPotensi.onlineInformation?.text">{{ list.text }}</li>
                    </ol>
                    <ol class="information-list" data-basis="offline">
                        <li v-for="list in assessmentPotensi.offlineInformation?.text">{{ list.text }}</li>
                    </ol>
                </div>
            </div>

            <div class="other-container mt-50 mb-50">
                <h3>{{ assessmentPotensi.otherAssessment }}</h3>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="assessment in assessmentPotensi.otherAssessmentList">
                        <div class="card text-white card-has-bg click-col" :style="{backgroundImage : `url(${config.public.clientCmsBaseUrl + assessment.background.data.attributes.url})`}">
                            <img class="card-img" width="100%" height="100%" :src="`${config.public.clientCmsBaseUrl + assessment.background.data.attributes.formats.thumbnail.url}`" alt="">
                            <div class="card-img-overlay d-flex flex-column">
                                <div class="card-body">
                                    <h4 id="otherAssessmentCardTitle" class="card-title mt-0" ><nuxt-link :to="assessment.link" class="text-white assessment-title" >{{ assessment.title  }}</nuxt-link></h4>
                    				<NuxtLink :to="assessment.link" class="btn btn-sm btn-outline">{{ assessmentPotensi.btnProductDescription }}</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            <div class="cta-wrapper">
                <div class="row justify-content-center align-items-center">
                    <div class="col-8 text-wrapper">
                        <h3 class="cta-title">{{ assessmentPotensi.cta?.title }}</h3>
                        <h5>{{ assessmentPotensi.cta?.subtitle }}</h5>
                    </div>
                    <div class="col-8 col-md-4">
                        <a :href="`${assessmentPotensi.cta?.link}`" class="cta-btn" target="_blank"> <i class="icofont-brand-whatsapp"></i> {{ assessmentPotensi.cta?.button }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/grid';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Grid, Pagination, Navigation } from 'swiper'

    export default {  
        props:[
            'dataProps', 
            'groupsProps', 
            'assessmentPotensi',
            'addOnProps',
        ],
        components: {
            Swiper,
            SwiperSlide,
        },
        data(){
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-next',
                    },
                }
            }    
        },
        setup(){
            const quantity = ref('>20 orang')
            const basis = ref('online')
            const groups = ref('instansi')
            const config = useRuntimeConfig()
            
            //untuk sementara 
            const addOnsOnline = ref([])
            const addOnsOffline = ref([])
            
            
            return {
                config, 
                quantity,
                basis,
                groups,
                modules: [Grid, Pagination, Navigation],
                addOnsOnline,
                addOnsOffline,
            }
        },

        mounted(){
            const addOns = document.querySelectorAll('.addon-card')
            addOns.forEach(element => {
                const basesItem = JSON.parse(element.getAttribute('data-basis'))
                const elementBasis = []
                element.classList.add('disapear')
                basesItem?.forEach((element)=> elementBasis.push(element.attributes.value))
                if(elementBasis.includes(this.basis)){
                    element.classList.remove('disapear')
                }
            })

            const other_informations = document.querySelectorAll('.information-list')
            other_informations.forEach(element =>{
                const basis = element.getAttribute('data-basis')
                element.classList.add('disapear')
                if (basis === this.basis) {
                    element.classList.remove('disapear')
                }
            })

            const btn_download = document.querySelectorAll('.btn-download')
            btn_download.forEach(element => {
                const basesItem = JSON.parse(element.getAttribute('data-basis'))
                const elementBasis = []
                element.classList.add('disapear')
                basesItem?.forEach((element)=> elementBasis.push(element.attributes.value))
                if(elementBasis.includes(this.basis)){
                    element.classList.remove('disapear')
                }
            })

            const cardPriceTitle = document.querySelectorAll('.assessment-title')
            cardPriceTitle.forEach(element => {
                var originalString = element.innerHTML;
                var splitWords = originalString.split(" ");
                element.innerHTML = `<span class="display-block">` + splitWords[0] + "</span>" + originalString.substr(originalString.indexOf(" ") + 1);
            })

            const buttons = document.querySelectorAll('.btn-outline');
              buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const value = button.getAttribute('data-value')
                    const dataGroup = button.getAttribute('data-group')
    
                    filterSolution(button.getAttribute('data-toggle'), dataGroup , value);
                    filterTableRow()
                });
              });
            
            this.addOnProps.forEach((element) => {
                element.attributes.bases.data?.forEach((bases)=>{
                    if( bases.attributes.value === 'online'){
                        this.addOnsOnline.push(element)
                    } else if(bases.attributes.value === 'offline') {
                        this.addOnsOffline.push(element)
                    } 
                })
            })
            

            const innerWidth = window.innerWidth
            if(innerWidth < 575){
                const thName = document.querySelectorAll('.table-head')
                thName.forEach((element,i) => {
                    if(i === 0){
                        element.setAttribute('width', '150px')
                    } else if(i === 3 ){
                        element.setAttribute('width', '100px')
                    }
                })
            }

            const filterTableRow = () => {
                const tableRows = document.querySelectorAll('.table-item')
                tableRows.forEach(element => {
                    const basesItem = JSON.parse(element.getAttribute('data-basis'))
                    const groupItems = JSON.parse(element.getAttribute('data-groups'))
                    const elementBasis = []
                    const elementGroup = []

                    element.classList.add('d-none')
                    basesItem?.forEach((value)=> elementBasis.push(value.attributes.value))
                    groupItems?.forEach((value)=> elementGroup.push(value.attributes.value))
                    if(elementBasis.includes(this.basis) && elementGroup.includes(this.groups)){
                        element.classList.remove('d-none')
                    }
                })
            }

            const filterSolution = (solution, group, value) => {
                buttons.forEach(button => {
                    const target = button.getAttribute('data-toggle');
                    const groupElement = button.getAttribute('data-group');
                    if(groupElement === group) {
                        if (target === solution) {
                            button.classList.add('active');
                        } else {
                            button.classList.remove('active');
                        }
                    }

                    if(group == "toogle-2"){
                        this.quantity = value
                    } else if ( group == "toogle-1"){
                        this.groups = value
                    } else if (group == "toogle-0"){
                        const other_informations = document.querySelectorAll('.information-list')
                        const btn_download = document.querySelectorAll('.btn-download')
                        this.basis = value

                        other_informations.forEach(element =>{
                            const basis = element.getAttribute('data-basis')
                            element.classList.add('disapear')
                            if (basis === this.basis) {
                                element.classList.remove('disapear')
                            }
                        })

                        btn_download.forEach(element => {
                            const basesItem = JSON.parse(element.getAttribute('data-basis'))
                            const elementBasis = []
                            element.classList.add('disapear')
                            basesItem?.forEach((element)=> elementBasis.push(element.attributes.value))
                            if(elementBasis.includes(value)){
                                element.classList.remove('disapear')
                            }
                        })
                    }
                });
            };    
            filterTableRow()

        },
    }
</script>

<style lang="scss" scoped>

.slider-container{
    position: relative;
}

.swiper-grid-column>.swiper-wrapper{
    flex-direction: row !important;
    flex-wrap: wrap;
}

.swiper-grid-column .swiper-button-prev,
.swiper-grid-column .swiper-button-next {
    top:25%;
}


.swiper-wrapper {
    align-items: end;
    padding: 0 0 40px 0;
}
.swiper-button-next {
        top: 48% !important;
        border-radius: 50%;
        right: -30px;
        width: 50px;
        height: 50px;
        z-index: 9999 !important;
    }

    .swiper-button-prev {
        top: 48% !important;
        border-radius: 50%;
        width: 50px;
        left: -30px;
        height: 50px;
        z-index: 9999 !important;
    }

.table{
    max-height: 300px!important;
}
.table-body{
    background-color: white;
}

.table-head:first-child,
.table-body:first-child {
    position: sticky;
    left: 0;
    top: 0;
    z-index: 5;
}
.click-col{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.min-width-column {
    min-width: 200px;
    @media #{$large-mobile} {
        min-width: 100px;
    }
}

.thead-container{
    z-index: 2;
}

#tableWrapper{
    margin-bottom: 10px;
}

#tableContainer{
    height: 470px;
    overflow-y: auto;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 12px 10px -10px;
    @media #{$tablet-device, $large-mobile} {
        overflow-x: scroll;
    }
}

#second-radio{
    width: 40%;

    @media #{$large-mobile, $tablet-device, $desktop-device} {
        width: 60%;
        margin: 20px 40px;
    }
}

.disapear {
    display: none;
}

.input-group-wrapper:nth-child(1),
.input-group-wrapper:nth-child(2){
    padding-left: 30px;

    @media #{$large-mobile, $tablet-device, $desktop-device} {
        padding-left: 0;
        margin-left: 40px;
    }
}

@media #{$large-mobile, $tablet-device, $desktop-device} {
    .input-group-wrapper {
        padding-left: 0;
        margin-left: 40px;
    }
}

.input-group{
    position: relative;
    @media #{$large-mobile, $tablet-device, $desktop-device} {

    }

    .button-step{
        position: absolute;
        top: -40px;
        left: -20px;
        background-color: $white;
        border-radius: 50% !important;
        border: 3px solid $primary;
        // padding: 5px;
        height: 1.8em;
        width: 1.8em;
        font-size: 1.3em;
        text-align: center;

        @media #{$large-mobile, $tablet-device, $desktop-device} {
            top: 50%;
            transform: translateY(-50%);
            left: -40px;
        }       

        @media #{$small-mobile} {
            font-size: 17px;
        }
    }
}


.filter-wrapper {
    padding: 40px 0 10px;
}
.container-title{
    .product-title {
        font-weight: 600;
        color: $dark;
        text-transform: uppercase;
        text-decoration: underline;
    }

    p {
        width: 80%;
        @media #{$large-mobile} {
            width: 100%;
        }
    }
}

.active {
    background-color: $primary;
    color: $white;
}

.label-radio {
    font-weight: 600;
    color: $dark;
    margin-bottom: 20px;
}

.btn-outline {
    width: 150px;
    border: 2px solid $primary;

    @media #{$large-mobile} {
        width: 120px;
        // padding-left: 50px;
    }

    @media #{$small-mobile} {
        width: 100px;
        font-size: 13px;
        padding-left: 17px;
    }
}

.button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 50px 0px;

    .button-wrapper {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
        position: relative;

        &::before {
            content: "";
            height: 2px;
            width: 100%;
            position: absolute;
            background-color: $gray-200;
            bottom: -10px;

            @media #{$large-mobile} {
                display: none;
            }
        }


        .btn-download {
            margin: 5px 20px;
            width: 250px;
            background-color: white;
            border: 1px solid $primary2;
            color: $primary2;
            border-radius: 3px;
            @media #{$large-mobile} {
                width: 100%;
            }
        }
    }
}

.additional-container {
    margin: 20px ;
    width: 100%;

    .row {
        width: 100%;
    }
}


.information-title {
    text-transform: uppercase;
    font-weight: 600;
    color: $dark;
}

.information-list {
    padding-left: 16px ;
    color: $gray-600;
}

.other-container{
    & h3 {
        text-transform: uppercase;
        font-weight: 600;
        color: $dark;
        margin-bottom: 20px;
    }
}


.card{
    border: none;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    overflow:hidden;
    border-radius:8px;
    height:300px;
    box-shadow: 0 0 12px 0 rgba(0,0,0,0.2);

    @media (max-width: 768px) {
    min-height:350px;
    }

    @media (max-width: 420px) {
    min-height:300px;
    }

 &.card-has-bg{
 transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  background-size:120%;
  background-repeat:no-repeat;
  background-position: top center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    // -webkit-filter: grayscale(1);
    // -moz-filter: grayscale(100%);
    // -ms-filter: grayscale(100%);
    // -o-filter: grayscale(100%);
    // filter: grayscale(100%);
  }
  &:hover {
    transform: scale(0.98);
    box-shadow: 0 0 5px -2px rgba(0,0,0,0.3);
    background-size:130%;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

    .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        background: rgb(35,79,109);
        // background: linear-gradient(0deg, rgba(4,69,114,0.5) 0%, $primary-two 100%);
    }
  }
}
    .card-body{ 
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

        & h4{
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
            margin: 0px 20px;
        }

        & .btn{
            border: 2px solid white;
            color: white;
            width: fit-content;
        }
    }
    &:hover {
        cursor: pointer;
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        .card-body{
            margin-top:30px;
            transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        }
    }
    .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        background: rgb(35,79,109);
        background: linear-gradient(0deg, rgba(168, 245, 1, 0.3) 0%, rgb(25, 125, 127, 0.8) 100%);
    }
}


.cta-wrapper {
        height: 200px;
        width: 100%;
        background: linear-gradient(100deg, rgba(238,232,87,1) 0%, rgba(84,164,165,1) 75%, rgba(95,177,177,1) 100%);
        margin: 20px 0;    
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 0px;

        @media (max-width: 768px) {
            height: fit-content;
            padding: 40px 0px;
            position: relative;
            justify-content: start;

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
                color: #ededed;
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
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        @media (max-width: 768px) {
            font-size: 15px;
            padding: 12px 30px;
        }

        &:hover,
        &:active {
            background-color: $whatsapp;
            color: $white;
        }
    }

    .table-head {
        position: sticky;
        top: 0;
    }

    .sticky-left {
        position: relative;
        left: 0;
    }

    .add-on-text{
        text-transform: uppercase;
        font-weight: 600;
        color: #000;
        margin-bottom: 20px;
    }   

    

</style>