import AOS from "aos"
import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== "undefined") {
        nuxtApp.AOS = AOS.init({once: true, offset: 10 }) // eslint-disable-line new-cap
    }
})