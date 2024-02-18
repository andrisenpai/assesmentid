export default defineEventHandler( async (event) => {
    const config = useRuntimeConfig()
    const path = event.path
    const { data : articleList, meta } = await $fetch(`${config.public.cmsBaseUrl}${path}`, {
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

    const data = {
        articleList : articleList,
        metaData : meta,
    } 
    return data
})