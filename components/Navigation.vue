<template>
     <nav class="main-menu" :class="addClassName">
        <ul>
            <li class="has-children">
                <NuxtLink to="/"  data-link="parent" key="home">{{ navStore.home }}</NuxtLink>
            </li>
            <li class="has-children">
                <NuxtLink to="/about" key="about" data-link="parent">{{ navStore.about }}</NuxtLink>
            </li>
            <li class="has-children">
                <NuxtLink to="/products" data-link="parent" key="product">{{ navStore.product }}</NuxtLink>
                <ul class="submenu">
                    <li>
                        <NuxtLink to="/products" key="product">{{ navStore.productChild[0]?.text }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products/price" key="product">{{ navStore.productChild[1]?.text }}</NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <NuxtLink to="/blog" key="blog" data-link="parent">{{ navStore.blog }}</NuxtLink>
                <ul class="submenu">
                    <li>
                        <NuxtLink to="/blog" key="blog">{{ navStore.blogChild[0]?.text }}</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog/gallery" key="blog">{{ navStore.blogChild[1]?.text }}</NuxtLink>
                    </li>
                </ul>
            </li>
            <li>
                <NuxtLink to="/contact" key="contact" data-link="parent">{{ navStore.contact }}</NuxtLink>
            </li>
            <li>
                <a href="https://smileconsultingindonesia.com/psi/m/" target="_blank">{{ navStore.onlineTest }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ["addClassName"],
        setup(){
            const config = useRuntimeConfig()
            const navStore = useNavigationStore()

            return {
                config,
                navStore
            }
        }
    }
</script>

<style lang="scss">
    .router-link-active, 
    .router-link-exact-active{
        color: $primary;

        &::before{
            left: 0;
            right: auto;
            width: 100%;
            transition: 0.3s;
        }
    }

    [data-link="parent"] {
        &::before {
            background-color: $primary;
        }
    }

    .submenu {
        z-index: 99;
    }

</style>