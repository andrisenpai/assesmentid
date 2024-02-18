<template>
    <NuxtErrorBoundary>
        
        <template #error="{ error }">
            <div class="error404">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="error-image">
                                <img v-if="error.statusCode === 404" class="img-fluid" src="/images/404-new.svg" alt="Not Found Image" :width="700" :height="500">
                                <img v-else class="img-fluid" src="/images/500-error.svg" alt="Not Found Image" :width="700" :height="500">
                            </div>
                            <h1 class="error-404-title text-dark" v-if="error.statusCode === 404">Oops! Page not found!</h1>
                            <h1 class="error-404-title text-dark" v-else>Something went wrong</h1>
                            <div class="error-buttons mt-20">
                                <button @click="goToHome" class="btn btn-primary btn-hover-dark">
                                    <span class="button-text">Kembali ke Beranda</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </template>

        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </NuxtErrorBoundary>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NBF27JG"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
</template>

<script setup lang="js">

    const errorHook = useError()

    const goToHome = () => {
        clearError({redirect : '/'})
        window.location.href = '/'
    }

    onMounted(() => {
        console.error("error catcher: ", errorHook.value)
    })
</script>