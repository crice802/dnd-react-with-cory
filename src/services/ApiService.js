const baseUrl = "https://www.dnd5eapi.co"

class ApiService {

    async getClassList() {
        const res = await fetch(`${baseUrl}/api/classes`)
        return res.json()
    }

    async getDetails(apiUrl) {
        const res = await fetch(`${baseUrl}${apiUrl}`)
        return res.json()
    }

}

export default new ApiService();