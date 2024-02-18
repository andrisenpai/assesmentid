<template>
<div class="container">
    <div class="blog-tab-section">
        <div class="">

            <div class="row justify-content-between justify-content-lg-center align-items-center search-container" data-aos="fade-up" data-aos-delay="300">
                <div class="col-0 col-lg-10 d-none d-lg-inline">
                    <div class="row justify-content-center btn-wrapper">
                        <button id="categoryAll" type="button" data-slug="all" class="col-2 category-event btn-category active">{{ allWord }}</button>
                        <button v-for="x in categories" type="button" class="col-2 btn-category category-event" :data-slug="x?.attributes?.slug">{{ x?.attributes?.title }}</button>
                    </div>
                </div>
                <div class="col-8 col-lg-0 d-lg-none">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle btn-dropdown" type="button" id="dropdownCategory" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ allWord }}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><button class="dropdown-item btn all-btn" data-slug="all">{{ allWord }}</button></li>
                            <li v-for="x in categories">
                                <button class="dropdown-item btn" :data-slug="x?.attributes?.slug">
                                    {{ x?.attributes?.title }}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-1 col-md-1 d-none d-lg-inline category-spacer"></div>
                <div class="col-3 col-md-1 text-center">
                    <button class="btn-search"><i class="icofont-search fs-28"></i></button>
                </div>
                <div class="search-wrapper">
                    <i class="icofont-search fs-28 me-3"></i>
                    <input id="inputSearch" type="text" placeholder="cari artikel" class="search-input">
                    <button class="btn btn-search-filter">{{ searchWord }}</button>
                    <button class="close-btn"><i class="icofont-close"></i></button>
                </div>
            </div>

            <div class="row row-cols-3 box " data-aos="fade-up" data-aos-delay="300">
                <!-- Single blog Start -->
                <template v-for="(blog, index) in articles.articleList" :key="index">
                    <div class="single-blog-wrapper" 
                        :data-slug="blog?.attributes?.article_category?.data?.attributes?.slug"
                        :class="[[index+1 === (dataPage*10)-9 ?'col-lg-12 col-12 col-md-6' : 'col-lg-4 col-md-6 col-12'], 'mt-50']" 
                        :data-page-tag="Math.ceil((index+0.1)/10)"
                        :data-title="blog?.attributes?.title"
                    >
                        <div v-if="index+1 === (dataPage*10)-9" id="wideThumbnail" class="single-blog-wrap-wide" style="">
                            <div class="blog-thumb">
                                <nuxt-link :to="`/blog/${blog?.attributes?.slug}`" class="image">
                                    <img class="fit-image w-100" :src="cmsBaseUrl + blog?.attributes.image_thumbnail_small?.data?.attributes?.url" :alt="blog?.attributes.title">
                                </nuxt-link>
                            </div>
                            <div class="inner-content">
                                <ul class="info-list">
                                    <li>{{ transformDate(blog?.attributes.publishedAt) }}</li>
                                    <li><button  class="category-event">{{ blog?.attributes?.article_category?.data?.attributes?.title }}</button></li>
                                </ul>
                                <h4 class="title">
                                    <nuxt-link :to="`/blog/${blog?.attributes?.slug}`">{{ blog?.attributes?.title }}</nuxt-link>
                                </h4>
                                <p>{{ blog?.attributes?.content }}</p>
                                <nuxt-link :to="`/blog/${blog?.attributes?.slug}`" class="article">
                                    {{ btnProps }} <span class="arrow icofont-rounded-right"></span>
                                </nuxt-link>
                            </div>
                        </div>
                        <div v-else class="single-blog-wrap-custom" style="">
                            <div class="blog-thumb">
                                <nuxt-link :to="`/blog/${blog?.attributes?.slug}`" class="image">
                                    <img class="fit-image w-100" :src="cmsBaseUrl + blog?.attributes.image_thumbnail_small?.data?.attributes?.url" :alt="blog?.attributes.title">
                                </nuxt-link>
                            </div>
                            <div class="inner-content">
                                <ul class="info-list">
                                    <li>{{ transformDate(blog?.attributes.publishedAt) }}</li>
                                    <li><button class="category-event">{{ blog?.attributes?.article_category.data?.attributes.title }}</button></li>
                                </ul>
                                <h4 class="title">
                                    <nuxt-link :to="`/blog/${blog?.attributes?.slug}`">{{blog?.attributes?.title }}</nuxt-link>
                                </h4>
                                <p>{{ blog?.attributes?.content}}</p>
                                <nuxt-link :to="`/blog/${blog?.attributes?.slug}`" class="article">
                                    {{ btnProps }} <span class="arrow icofont-rounded-right"></span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </template>
                <!-- Single blog End -->
            </div>

            <div class="d-none total-page" :data-total-page="totalPage">total page</div>
            <div class="section-padding-bottom">
                <nav id="nav-category" class="pagination-wrapper float-end mt-3 me-2" aria-label="Page navigation example">
                  <ul v-if="totalPage > 1" class="pagination">
                    <li class="page-item">
                      <a id="prevPage" class="page-link" :class="dataPage === 1 ? 'disabled':''" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li v-for="value in totalPage" class="page-item" :class="dataPage == value ? 'active' : ''">
                        <a v-if="value === totalPage" id="lastPage" class="page-link page-number" href="#">...{{ value }}</a>
                        <a :id="value === totalPage? 'lastPageValue' : ''" class="page-link page-number" href="#">{{ value }}</a>
                    </li>
                    <li class="page-item">
                      <a id="nextPage" class="page-link" :class="dataPage === totalPage ? 'disabled':''" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
            </div>

        </div>
    </div>
</div>    
</template>


<script>
    export default {
        props: ['articles', 'btnProps', 'categories', 'allWord', 'searchWord', 'totalPage'],
        data(){
          return {
            dataSlug : '',
            dataInput : '',
            dataPage : 1
          }  
        },
        setup(){
            const config = useRuntimeConfig()
            const cmsBaseUrl = config.public.clientCmsBaseUrl
            const route = useRoute()
            const slug = route.query?.category

            return {
                cmsBaseUrl,
                slug,
            }
        },
        mounted(){
            var wideThumbnail = document.querySelector('#wideThumbnail')
            var inputField = document.querySelector('#inputSearch')
            var innerWidth = window.innerWidth
            var btnSearch = document.querySelector('.btn-search')
            var btnClose = document.querySelector('.close-btn')
            var btnCategory = document.querySelectorAll('.category-event')
            var dropDownCategory = document.querySelector('#dropdownCategory')
            var dropDownItem = document.querySelectorAll('.dropdown-item')

            const route = useRoute()
            const query = route.query?.category
            this.dataInput = ''

            try {
                if(route.query?.page){
                    this.dataPage = parseInt(route.query?.page)
                }

                if(route.query?.category){
                    this.dataInput = route.query?.category
                }
            } catch (error) {
                console.log("error page : ", error)
            }

            inputField.addEventListener("keypress", (e)=> {
                if (e.key === "Enter") {
                    document.querySelector('.btn-search-filter').click()
                }
            })

            if(innerWidth < 992){
                wideThumbnail?.classList?.remove('single-blog-wrap-wide')
                wideThumbnail?.classList?.add('single-blog-wrap-custom')
            } else if ((innerWidth >= 992)){
                wideThumbnail?.classList?.remove('single-blog-wrap-custom')
                wideThumbnail?.classList?.add('single-blog-wrap-wide')
            }

            window.addEventListener('resize', ()=>{
                var wideElement = document.querySelector('#wideThumbnail')
                var width = window.innerWidth
                if(width < 992){
                    wideElement?.classList?.remove('single-blog-wrap-wide')
                    wideElement?.classList?.add('single-blog-wrap-custom')
                } else if ((width >= 992)){
                    wideElement?.classList?.remove('single-blog-wrap-custom')
                    wideElement?.classList?.add('single-blog-wrap-wide')
                }
            })

            this.categories.forEach(element => {
                if (element?.attributes?.slug === query){
                    dropDownCategory.innerHTML = element?.attributes?.title
                    this.dataSlug = element?.attributes?.slug
                }
            })
            
            btnSearch.addEventListener('click', ()=> {
                const searchWrapper = document.querySelector('.search-wrapper')        
                btnSearch.classList.add('hide')
                searchWrapper.classList.add('active')
            })

            btnClose.addEventListener('click', ()=> {
                const searchWrapper = document.querySelector('.search-wrapper')        
                searchWrapper.classList.remove('active')
                btnSearch.classList.remove('hide')
            })


            setCategory(btnCategory, this.dataSlug)

            btnCategory.forEach(element => {
                element.addEventListener('click', ()=> {
                    this.dataSlug = element.getAttribute('data-slug')
                    setCategory(btnCategory, this.dataSlug)                    
                    window.scroll({
                        top: 0,
                        behavior: "smooth",
                    })  
                })
            })

            
            dropDownItem.forEach( element => {
                const elementSlug = element.getAttribute('data-slug')
                element.addEventListener('click', () => {  
                    this.dataSlug = elementSlug
                    this.categories.forEach(category => {
                        if (category?.attributes?.slug === elementSlug){
                            dropDownCategory.innerHTML = category?.attributes?.title
                        }
                    })
                    
                    if(this.dataSlug === 'all' || !this.dataSlug) {
                        dropDownCategory.innerHTML = document.querySelector('.all-btn').innerHTML
                    }

                })
            })

            document.querySelector('.btn-search-filter').addEventListener('click', ()=> {
                this.dataInput = ''
                closeSearch()
            })

            document.querySelector('#nextPage').addEventListener('click', (e)=> {
                this.dataPage += 1
            })

            document.querySelector('#prevPage').addEventListener('click', (e)=> {
                this.dataPage -= 1
            })

            document.querySelectorAll('.page-number').forEach(element => {
                element.addEventListener('click', (e) => {
                    if(element.innerHTML.includes('.')){
                        this.dataPage = this.totalPage
                    } else {
                        this.dataPage = parseInt(element.innerHTML)
                    }
                })
            })

            window.addEventListener('popstate', (e)=> {
                if(this.dataSlug && this.dataSlug !== 'all'){
                    filterArticleByCategory(this.dataSlug)
                } else {
                    filterArticleByPage(this.dataPage)
                }
            });

            inputField.addEventListener('change', (e)=> {
                this.dataPage = 1
                filterByTitle(e.target.value, this.dataSlug)
            })

            filterArticleByPage(this.dataPage)

            function setCategory(button, currentSlug=''){  
                const paginationWrapper = document.querySelector('.pagination-wrapper')
                button.forEach(element => {
                    const dataSlug = element.getAttribute('data-slug')                
                    element.classList.remove('active')
                    if(currentSlug === dataSlug){
                        element.classList.add('active')
                        dropDownCategory.innerHTML = element.innerHTML
                    } 
                })

                if(!currentSlug || currentSlug === "all" ){
                    let allCategory = document.querySelector('#categoryAll')
                    allCategory.classList.add('active')
                    dropDownCategory.innerHTML = document.querySelector('.all-btn').innerHTML
                    paginationWrapper.classList.remove('d-none')
                } else {
                    paginationWrapper.classList.add('d-none')

                }
            }


            function closeSearch(){
                const searchWrapper = document.querySelector('.search-wrapper')        
                searchWrapper.classList.remove('active')
                btnSearch.classList.remove('hide')
            }

            

            function filterArticleByPage(page){
                var singleBlogWrapper = document.querySelectorAll('.single-blog-wrapper')
                var pages = document.querySelectorAll('.page-number')
                const lastPage = document.querySelector('#lastPage')
                const lastPageValue = document.querySelector('#lastPageValue')
                const totalPage = document.querySelector('.total-page').getAttribute('data-total-page')

                singleBlogWrapper.forEach(element => {
                    const pageTag = element.getAttribute('data-page-tag')
                    if(pageTag == page){
                        element.classList.remove('d-none')
                    } else {
                        element.classList.add('d-none')
                    }
                })

                pages.forEach(element => {
                    const elementPage = parseInt(element.innerHTML)
                    const condition = (elementPage === page && elementPage !== totalPage) || elementPage === page + 1 || elementPage === page + 2 
                    
                    if(condition){
                        element.classList.remove('d-none')
                        lastPage.classList.remove('d-none')
                        lastPageValue.classList.add('d-none')
                    } else if (elementPage === page-1){
                        element.classList.remove('d-none')
                        lastPage.classList.remove('d-none')
                        lastPageValue.classList.add('d-none')
                    } else if (elementPage === page-2){
                        element.classList.remove('d-none')
                        lastPage.classList.remove('d-none')
                        lastPageValue.classList.add('d-none')
                    } else {
                        element.classList.add('d-none')
                        lastPage.classList.remove('d-none')
                        lastPageValue.classList.add('d-none')
                    }

                    if(page >= totalPage - 2 ){
                        lastPage.classList.add('d-none')
                        lastPageValue.classList.remove('d-none')
                    }
                })
            }

            function filterArticleByCategory(dataSlug){
                const articles = document.querySelectorAll('.single-blog-wrapper')
                const inputField = document.querySelector('#inputSearch')

                inputField.value = ''
                articles.forEach(element => {
                    const slug = element.getAttribute('data-slug')
                    if(slug === dataSlug){
                        element.classList.remove('d-none')
                    } else if(dataSlug === 'all' || dataSlug === ''){
                        element.classList.remove('d-none')
                    } else {
                        element.classList.add('d-none')
                    }
                })
            }

            function filterByTitle(title, category){
                const articles = document.querySelectorAll('.single-blog-wrapper')
                const paginationWrapper = document.querySelector('.pagination-wrapper')

                if(title){
                    articles.forEach(element => {
                        let titleElement = element.getAttribute('data-title').toLowerCase()
                        let categoryElement = element.getAttribute('data-slug')
                        
                        if(titleElement.includes(title.toLowerCase()) && (categoryElement === category || category === 'all' || !category)){
                            element.classList.remove('d-none')
                        } else {
                            element.classList.add('d-none')
                        }
                    })
                    paginationWrapper.classList.add('d-none')
                } else {
                    filterArticleByPage(1)
                    paginationWrapper.classList.remove('d-none')
                }
            }
        },
        computed: {
            blogData() {
                return this.blogs.slice(0, this.currentItem);
            }
        },
        methods: {
            loadMore() {
                this.currentItem += 3;
            },
        }, 
        watch : {
            dataPage(newValue, oldValue){
                const searchParams = new URLSearchParams(window.location.search);
                searchParams.set('page', newValue);
                window.history.replaceState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
            },
            dataSlug(newValue, oldValue){
                const searchParams = new URLSearchParams(window.location.search);

                // Remove the 'page' parameter separately
                searchParams.delete('page');
                window.history.replaceState({}, '', `${window.location.pathname}?${searchParams.toString()}`);

                searchParams.set('category', newValue);
                window.history.replaceState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
                window.location.href = '#'

            },
        }
    }
</script>

<style lang="scss" scoped>

.page-item .disabled {
    color: $gray-400;
}

.btn-dropdown {
    border-radius: 4px;
    padding: 15px 30px;
}
.dropdown-item.btn {
    font-weight: 400;
}

</style>