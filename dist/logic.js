class APIManager {
    constructor(){
        this.data = []
    }

    async getStats(countryName, from, to){
        if(!from){
            from = Date.now() - 30
        }
        if(!to){
            to = Date.now()
        }
       const statsData = await $.get(`/stats/${countryName}?from=${from}&to=${to}`)
    }
    
}