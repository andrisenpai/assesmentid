<template>
    <div class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12" data-aos="fade-up" data-aos-delay="300">
                    <div class="breadcrumb-wrapper">
                        <div class="bread-title">
                            <h1 class="title">{{ pageTitle }}</h1>
                        </div>

                        <ul class="post-meta breadcrumb">
                            <li class="breadcrumb-item">
                                {{ description }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["description", "pageTitle"],
        
    };
</script>
