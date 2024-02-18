export const useAboutStore = defineStore('aboutStore', {
    state : () => {
        return {
            title: '',
            subtitle:'',
            paragraph: '',
            sideImage: '',
            sideImage2:'',
            bannerTitle : '',
            bannerImage : '',
            aboutList : [] as AboutOneType[]
        }
    },
    actions : {
        addAboutList(value : AboutOneType){
            this.aboutList.push(value)
        }
    },
    getters : {
        abouts : state => state.aboutList,
        getAllAbout : state => state
    }

})