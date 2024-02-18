<template>
    <section class="pricing-section">
        <div class="price-card featured">
            <h2>{{ title }}</h2>
            <p>{{ subtitle }}</p>
            <!-- <h2>{{ priceExt.feature_1 }}</h2> -->
            <div :id="`price-container-${id}`" v-if="priceExt">
                <div class="choice-wrapper">
                    <span id="choiceOne" :class="`choice-${id} active`">{{   priceExt.price_1.title}}</span>
                    <div class="separator"></div>
                    <span id="choiceTwo" :class="`choice-${id}`">{{   priceExt.price_2.title }}</span>
                </div>
                <div  :class="[`price-wrapper wrapper-${0}`]">
                    <p class="price"><span>{{ parseInt(priceExt.price_1.number).toLocaleString('id-ID') }}</span></p>
                    <ul class="pricing-offers">
                        <li v-for="feature in priceExt.feature_1"><i class="icofont-check-alt"></i>{{ feature.text }}</li>
                    </ul>
                </div>
                <div :class="[`price-wrapper wrapper-${1}`, 'd-none']">
                    <p class="price"><span>{{ parseInt(priceExt.price_2.number).toLocaleString('id-ID') }}</span></p>
                    <ul class="pricing-offers">
                        <li v-for="feature in priceExt?.feature_2"><i class="icofont-check-alt"></i>{{ feature.text }}</li>
                    </ul>
                </div>
            </div>
            <div v-else> 
                <p class="price"><span>{{ parseInt(price.price).toLocaleString('id-ID') }}</span></p>
                <ul class="pricing-offers">
                    <li v-for="feature in price.features"><i class="icofont-check-alt"></i>{{ feature.text }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="js">
    export default {
        props:["title", "subtitle", "priceExt", "price", "id"],
        data(){
            return{
                kompetensi : false
            }
        },
        mounted(){
            const links = document.querySelectorAll('.choice-wrapper span')
            links.forEach((link) => {
                link.addEventListener('click', (event) =>{
                    event.preventDefault()
                    const choices = document.querySelectorAll(`.${link.className}`)
                    const grandParentId = link.parentNode.parentNode.id
                    const priceWrappers = document.querySelectorAll(`#${grandParentId} .price-wrapper`)
                    choices.forEach((choice, i) => {
                        choice.classList.remove('active')
                        priceWrappers[i].classList.add('d-none')
                    })
                    link.classList.add('active')
                    if(link.id === "choiceOne"){
                        priceWrappers[0].classList.remove('d-none')
                    } else {
                        priceWrappers[1].classList.remove('d-none')
                    }
                })
            })


        }
    }
</script>

<style lang="scss" scoped>

.price-card {
    background: #ffffff;
    padding: 40px 35px;
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    max-width: 500px;
    min-width: 200px;
    margin: 0 auto 30px auto;
    height: 500px;
}
.price-card:before {
    position: absolute;
    content: "";
    top: 0;
    right: -35px;
    width: 88px;
    height: 88px;
    background: $carrot-orange;
    opacity: 0.2;
    border-radius: 8px;
    transform: rotate(45deg);
}
.price-card:after {
    position: absolute;
    content: "";
    top: 30px;
    right: -35px;
    width: 88px;
    height: 88px;
    background: $carrot-orange;
    opacity: 0.2;
    border-radius: 8px;
    transform: rotate(45deg);
}
.price-card h2 {
    font-size: 26px;
    font-weight: 600;
}
.price-card .btn {
    font-size: 11px;
    border-radius: 100px;
    padding: 0 25px;
    border: 0;
    color: #fff;
    float: right;
}
.price-card .btn.btn-primary {
    border: 0 !important;
}
.price-card.featured {
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    transition: $transition-base;

    &:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
}
.price-card:hover .btn {
    background: #0cc652;
    border-color: #0cc652;
}

.choice-wrapper{
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    align-self: center;
    justify-content: space-around;

    & span {
        font-size: 1em;
        color: $gray-400;
        text-align: center;
        cursor: pointer;
        position: relative;

        &:hover {
            color: $carrot-orange;
        }
    }

    & .active{
        font-weight: 600;
        color: $carrot-orange;
    }

    .separator{
        width: 1px;
        background-color: $dark;

    }
}
p.price span {
    display: inline-block;
    padding: 45px 15px 20px;
    padding-right: 0;
    font-size: 50px;
    font-weight: 600;
    color: $carrot-orange;
    position: relative;
}
p.price span:before {
    position: absolute;
    content: "Rp";
    font-size: 16px;
    top: 25px;
    font-weight: 300;
    left: 0;
}
.pricing-offers {
    padding: 0 0 10px;
}
.pricing-offers li {
    padding: 0 0 16px;
    line-height: 18px;
    display: flex;
    flex-direction: row;

    & i {
        margin-right: 10px;
    }
}
ul li {
    list-style-type: none;
}
.btn.btn-mid {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
}

</style>