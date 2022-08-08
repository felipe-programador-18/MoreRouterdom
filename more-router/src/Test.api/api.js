export const getApi = async () => {
    try {
        const url = "https://dogbreed-api.q9.com.br"
        const res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log('have error here', error)
    }
}