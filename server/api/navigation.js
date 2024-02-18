export default defineEventHandler( async (event) => {
    const config = useRuntimeConfig()
    const params = getQuery(event)
    const { data } = await $fetch(`${config.public.cmsBaseUrl}/api/navigation?populate=deep,2`, {
        headers : {
            Authorization : `Bearer ${config.apiToken}`
        },
        params : {
            locale : params?.locale
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