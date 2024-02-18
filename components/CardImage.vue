<template>
    <div class="row justify-content-center align-items-center">
        <div class="col p-0">
            <div class="card-ls">
                <div class="card-ls-img">
                    <img :src="`${order.src}`" />
                </div>
                <div class="text-wrapper">
                    <h4 class="card-ls-title">{{ order.title }}</h4>
                    <p class="text-center small">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam officia porro voluptatem minima similique rerum quasi, magni in ab rem nulla, libero explicabo. Rem accusamus eaque dolore consequuntur ab illo.</p>
                    <a class="card-ls-link" :href="`${order.link}`" target="_blank">{{ order.text }}</a>    
                </div>
                
            </div>
        </div>
    </div>
</template>

<script lang="js">
    export default {
        props: ["order"]
    }
</script>

<style lang="scss" scoped>


.card-ls {
    height: fit-content;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    width: 100%;
    max-width: 400px;
    padding:0px 0px 20px 0px;
    transition: $transition-base;
    margin: 0 auto;


    &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    }

    &-img {
        width: 100%;
        height: fit-content;       
        img {
            max-height: 100%;
            max-width: 100%;
            width: 100%;
        }
    }

    .text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 10px auto;

        .card-ls-title {
            width: 100%;
            font-weight: 600;
            font-size: 18px;
            text-align : center;
            color: $primary;
        }

        .card-ls-link {
            width: fit-content;
            padding: 5px 20px;
            background-color: $primary;
            color: white;
            border-radius: 5px;

            &:hover {
                color: $primary;
                background-color: $primarylight;
            }
        }
    }

}

</style>