export const useNavigationStore = defineStore('navigationStore', {
    state : () : any => {
        return {
            language :  'id-ID',
            loading : false,
            home: '',
            about: '',
            product: '',
            productChild : [] as any[],
            blog: '',
            blogChild : [] as any[],
            contact : '',
            onlineTest : '',
            page : 1,
            totalArticle : 0,
            orderTitle : '',
            orderSubtitle : '',
            orders : [],
        }
    },
    actions : {
        setLanguage(value : "id-ID" | "en"){
            this.language = value
        },
        addOrders(value : any){
            this.orders.push(value)
        },
        resetOrders(){
            this.orders = []
        }, 
        setOrderTitle(value : any){
            this.orderTitle = value
        },
        setOrderSubtitle(value : any){
            this.orderSubtitle = value
        },
        setLoading(value : boolean){
            this.loading = value
        }
    },
    getters: {
        getAllState : state => state,
    },
})