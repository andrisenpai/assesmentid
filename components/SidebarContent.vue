<template>
    <div class="sidebar">
        <div class="menu-title">
            Pilihan Produk Kami
        </div>
        <div class="menu-item">
            <ul>
                <li v-for="(item, index) in sidebaritem"><nuxt-link :to="item.url">{{ item.title }}<span class="badge bg-warning ms-2" v-show="index > 1">Baru</span></nuxt-link></li>
            </ul>

        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            sidebaritem: [
                {
                    title: 'Assesment Potensi',
                    url: '/product/assesment-potensi',
                }, {
                    title: 'Faxtor Cognitive Ability Test',
                    url: '/product/',
                }, {
                    title: 'Indonesia Critical Thinking Skills Test',
                    url: '/'
                }, {
                    title: 'Padjadjaran Interest Inventory',
                    url: '/'
                }, {
                    title: 'Mini Stress Determinants Questionnaire 16',
                    url: '/'
                }, {
                    title: 'Mini Stress Determinants Questionnaire 18',
                    url: '/'
                }, {
                    title: 'Occupational Personality Traits Inventory',
                    url: '/'
                }, {
                    title: 'Test Batique',
                    url: '/'
                }
            ]
        }
    },
}
</script>
<style lang="scss">
.sidebar {
    border-right: 5px solid lightgray;
    &::after {
        border: 1px solid black;
    }

    .menu-title {
        font-weight: 600 !important;
        font-size: 21px !important;
    }

    .menu-item {
        display: block;
        ul {
            display: block;
            li {
                display: block;
                a {
                    display: block;
                    color: $primary2;
                    transition: .5s;
                    padding: 20px;
                    &:hover{
                        color: white;
                        transition: .5s;
                        background-color: $primary2;
                    }
                }
            }
        }

    }
}
</style>