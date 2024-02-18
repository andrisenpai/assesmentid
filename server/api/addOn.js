export default defineEventHandler( async (event) => {
    const config = useRuntimeConfig()  
    const {filter} = getQuery(event)
    let url = "/api/add-ons?pagination[pageSize]=25" 
    if (filter !== undefined) {
        url = url + `&populate=deep,1&filters[services][id][$eq]=${filter}`
    } else {
        url = url + `&populate=deep,2`
    }

    const { data } = await $fetch(`${config.public.cmsBaseUrl}${url}`, {
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