export default defineEventHandler( async (event) => {
    const config = useRuntimeConfig()
    
    const { data } = await $fetch(`${config.public.cmsBaseUrl}/api/contact-page?populate=deep`, {
        headers : {
            Authorization : `Bearer ${config.apiToken}`
        }
    }).catch((err) => {
        console.log("status code : ", err.response?.status)
        console.log("status message : ", err.response?.statusText)
        console.log("url : ", err.response?.url)
        throw createError({
            statusCode: err.response?.status, 
            statusMessage: err.response?.statusText, 
            message : err.response?.statusText,
        })
    })

    return data
})