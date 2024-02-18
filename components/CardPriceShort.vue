<template>
    <section class="pricing-section">
        <div class="price-card featured">
            <p class="price"><span>{{ parseInt(productProps.attributes.price).toLocaleString('id-ID') }}</span></p>
            <h2>{{ productProps?.attributes.title }}</h2>
            <p>{{ productProps?.attributes.subtitle }}</p>
        </div>
    </section>
</template>

<script lang="js">
    export default {
        props:["productProps"],
    }
</script>

<style lang="scss">

.price-card {
    background: #ffffff;
    padding: 1px 35px;
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    max-width: 500px;
    min-width: 200px;
    height: 300px;
    margin: 0 auto 30px auto;
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
    font-size: 20px;
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
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    transition: $transition-base;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    }
}
.price-card:hover .btn {
    background: #0cc652;
    border-color: #0cc652;
}
p.price span {
    display: inline-block;
    padding: 45px 15px 10px;
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