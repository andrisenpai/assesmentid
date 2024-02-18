<template>
    <div class="popup-mobile-menu popup-mobile-visiable" id="offcanvas-menu">
        <div class="mobile-menu-overlay" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></div>
        <div class="inner custom-scrollbar">
            <div class="mobile-header border-bottom">
                <div class="logo">
                    <nuxt-link to="/">
                        <div class="row align-items-center p-1">
                            <div class="col-5 d-block text-end">
                                <div class="me-1">
                                    <img class="mb-2 pt-2" style="height: 100%; width: 100%;" src="/images/logo/logo-assessment.png" alt="Header Logo">
                                </div>
                            </div>
                            <span class="h5 col-7 ps-md-0" style="font-weight: 500;">ASSESSMENT INDONESIA</span>
                        </div>
                    </nuxt-link>
                </div>
                <button class="mobile-close-btn" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></button>
            </div>
            <div class="menu-content">
                <MobileNavigation />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            MobileNavigation: () => import('@/components/MobileNavigation'),
        },
        
        methods: {
            // offcanvas menu close
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            }
        }
    };
</script>