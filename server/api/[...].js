export default defineEventHandler((event) => {
    console.log("something wrong nih")
    throw createError({statusCode : 500, message : 'something wrong'})
})