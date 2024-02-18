export default defineEventHandler( async (event) => {
    const config = useRuntimeConfig()
    const { data } = await $fetch(`${config.public.cmsBaseUrl}/api/blog-list-page`, {
        headers : {
            Authorization : `Bearer ${config.apiToken}`
        }
    }).catch((err) => {
        console.log("response error : ", err.response?.status)
        throw createError({
            statusCode: err.response?.status, 
            statusMessage: err.response?.statusText, 
            message : err.response?.statusText,
        })
    })
    return data
})