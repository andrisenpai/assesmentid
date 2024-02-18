<template #error="{error}">
    <div class="error404">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="error-image">
                        <img v-if="error.statusCode === 404" class="img-fluid" src="/images/404-new.svg" alt="Not Found Image" :width="700" :height="500">
                        <img v-else class="img-fluid" src="/images/500-error.svg" alt="Not Found Image" :width="700" :height="500">
                    </div>
                    <h1 class="error-404-title text-dark" v-if="error.statusCode === 404">Page Not Found</h1>
                    <h1 class="error-404-title text-dark" v-else>Something went wrong</h1>
                    <div class="error-buttons mt-20">
                        <button id="btnHome" class="btn btn-primary btn-hover-dark">
                            <span class="button-text">Kembali ke Beranda</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p class="hide-this-tag"> {{ error.statusMessage }}</p>
</template>

<script>
    export default {
        props: {
            error: {
                type: Object,
                default: () => {},
            },
        },
        setup(){
            useHead({
                title: 'Something Went Wrong | Assessment Indonesia'
            })
        },
        mounted(){
            const buttonBack = document.querySelector('#btnHome')

            buttonBack.addEventListener('click', ()=> {
                clearError({redirect : '/'})
                window.location.href = '/'
            })

        }
    }
</script>

<style lang="scss">
    .error404 {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
    }
    .error-404-title {
        font-weight: 600;
        padding-top: 20px;
        margin-bottom: 30px;
        
        @media #{$extra-small-mobile} {
            font-size: 30px;
        }
    }
</style>