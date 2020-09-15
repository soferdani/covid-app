class APIManager {
    constructor(){
        this.data = []
    }

    async getStats(countryName){
        const date = {
            from: Date.now() - 30,
            to: Date.now()
        }
       const statsData = await $.get(`/stats/${countryName}`, date)
    }
    

    
}