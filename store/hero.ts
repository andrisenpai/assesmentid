export const useHeroStore = defineStore('heroStore', {
    state : () => {
        return {
            heroList : [] as HeroOneType[],
        }
    },
    actions : {
        addHeros(value : HeroOneType){
            this.heroList.push(value)
        }
    },
    getters : {
        herosList : state => state.heroList
    }
})