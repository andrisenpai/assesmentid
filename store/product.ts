export const useProductStore = defineStore('productStore', {
    state : () => {
        return {
            products : [] as ProductIndexType[],
            sectionTitle : '',
            sectionSubtitle : '',
            basis : 'online',
            groups : 'instansi',
            quantity : '>20 orang',
            assessmentPotensi : {},
        }
    },
    actions : {
        addProduct(value : ProductIndexType){
            this.products.push(value)
        },
        setValue(key : any,value : string){
            switch (key) {
                case 'sectionTitle':
                    this.sectionTitle = value
                    break;
                case 'sectionSubtitle':
                    this.sectionSubtitle = value
                    break
                default:
                    console.error('no case matched');
                    break;
            }
        },
        setAssessmentPotensi(value:any){
            this.assessmentPotensi = value
        },
        setBasis(value :any){
            this.basis = value
        },
        setGroups(value:any){
            this.groups = value
        }
    },
    getters : {
        productList : state => state.products,
        getBasis : state => state.basis,
        getGroups : state => state.groups
    },
})