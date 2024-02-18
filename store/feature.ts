export const useFeatureStore = defineStore('featureStore', {
    state : () => {
        return {
            featureList : [] as FeatureType[],
            title : '',
        }
    },
    actions : {
        addFeature(value : FeatureType){
            this.featureList.push(value)
        },
        setTitle(value : string){
            this.title = value
        },
        resetFeature(){
            this.featureList = []
        }
    },
    getters : {
        features : state => state.featureList
    }
})