
export default defineNuxtPlugin(() => {
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'G-81YMWPZ27R');
})

function gtag(){
    dataLayer.push(arguments);
}
