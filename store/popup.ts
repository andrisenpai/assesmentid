export const usePopUp = defineStore('popupStore', {
    state : () : any => {
        return {
           popup: true
        }
    },
    actions : {
        closePopUp(){
            this.popup = false
        }
    },
    getters: {
        getAllState : state => state,
    },
})