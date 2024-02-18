
export const useFooterStore = defineStore('footerStore', {
    state : () : any => {
        return {
            data : {},
            dataSmall : {}
        }
    },
    getters : {
        getAllState : state => state,
        getData : state => state.data
    }

})