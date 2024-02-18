export const useArticleStore = defineStore('articleStore', {
    state : () => {
        return {
            articles : [] as ArticleThumbnailType[],
            title : '',
            subtitle : ''
        }
    },
    actions : {
        addArticle(value : ArticleThumbnailType){
            this.articles.push(value)
        },
        setTitle(value : string){
            this.title = value
        },
        setSubtitle(value : string){
            this.subtitle = value
        }
    },
    getters : {
        articleList : state => state.articles
    }
})