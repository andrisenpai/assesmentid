<template>
    <div class="header section-fluid border-bottom header-black" :class="{'is-sticky': isSticky}">
        <div class="header-wrapper">
            <div class="header-sticky">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-4 col-9">
                            <!-- Header Logo Start -->
                            <div class="row align-items-center">
                                <NuxtLink to="/" key="home">
                                    <div class="row align-items-center pt-1">
                                        <div class="col-2 col-md-4 text-end">
                                            <div class="header-logo">
                                                <img class="mb-2 pt-2" src="/images/logo/logo-assessment.png" alt="Header Logo">
                                            </div>
                                        </div>
                                        <span class="fw-bolder col-9 col-md-8 ps-md-0 ">ASSESSMENT INDONESIA</span>
                                    </div>
                                </NuxtLink>
                            </div>
                            <!-- Header Logo End -->
                        </div>

                        <div class="col-lg-8 col-md-6 d-none d-md-block">
                            <div class="main-menu-language-wrapper">
                                <Navigation />

                                <!-- localization -->
                                <!-- <div class="language-white d-md-none d-lg-flex me-md-3">
                                    <a class="lang-item active">id</a>
                                    <a class="lang-item ">en</a>
                                </div> -->
                                <!-- endlocalization -->

                            </div>
                        </div>

                        <div class="col-lg-2 col-md-2 col-3">
                            <!-- Mobile Menu Hamburger Start -->
                            <div class="mobile-menu-toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <button class="toggle d-lg-none">
                                    <i class="icon-top"></i>
                                    <i class="icon-middle"></i>
                                    <i class="icon-bottom"></i>
                                </button>
                            </div>
                            <!-- Mobile Menu Hamburger End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
        },

        data() {
            return {
                isSticky: false,
            }
        },

        setup(){
            const navStore = useNavigationStore()
            return {
                navStore
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })

            const langItem = document.querySelectorAll(".lang-item");
            langItem.forEach((link) => {
                link.classList.remove("active");
                if(this.navStore.language.includes(link.innerHTML)){
                    link.classList.add("active");
                }
            });

            const links = document.querySelectorAll(".language-white a");
            // Add an event listener to each link
            links.forEach((link) => {
                link.addEventListener("click", (event) => {
                    let langValue 
                    event.preventDefault();                    
                    if(link.innerHTML == 'en'){
                        langValue = 'en'
                    } else {
                        langValue = 'id-ID'
                    }
                    links.forEach((link) => {
                        link.classList.remove("active");
                    });
                    link.classList.add("active");
                    this.navStore.setLanguage(langValue)
                    window.location.reload()
                });
            });
        },

        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            changeLanguage(value){
                this.navStore.setLanguage(value)
                location.reload()
            }
        },
    };
</script>