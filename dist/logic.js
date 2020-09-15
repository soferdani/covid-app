class APIManager {
    constructor(){
        this.data = []
    }

    async getStats(countryName, from, to){
        if(!from){
            from = Date.now() - 300000000
        }
        if(!to){
            to = Date.now()
        }

        this.data = await $.get(`/stats/${countryName}?from=${from}&to=${to}`)
        

    }

    calculaturQue(text){
        if(text === 'I was exposed to a verified patient'){
            return ['For how long?' , 'More than 15 minutes', 'Less than 15 minutes']
        }
        if(text === 'More than 15 minutes'){
            return ['where?', 'Close space','Open space']
        }
        if(text === 'Less than 15 minutes'){
            return ['Please submit your info for answers', '', '']
        }
        if(text === 'Close space'){
            return ['when?', '', '']
        }
        if(text === 'Open space'){
            return ['Please submit your info for answers', '', '']
        }

        if(text === "I'm not feeling well"){
            return ['Whats your temprature?' , 'More than 38 degrees', 'Less than 38 degrees']
        }
        if(text === 'More than 38 degrees'){
            return ['Please submit your info for answers', '', '']
        }
        if(text === 'Less than 38 degrees'){
            return ['Please submit your info for answers', '', '']
        }

        if(text === "I returned from abroad"){
            return ['when?', '', '']
        }

        if(text === "I'm a verified corona patient"){
            return ['Do you have symptoms?' , 'Yes', 'No']
        }
        if(text === 'Yes'){
            return ['Please submit your info for answers', '', '']
        }
        if(text === 'No'){
            return ['Please submit your info for answers', '', '']
        }

    }
    

    createChart () {
        let ctx = $('#myChart')
    
        let myChart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: this.data[0],
                datasets: [{
                    label: 'Dath',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: this.data[1]
                }]
            },
        
            // Configuration options go here
            options: {}
        });
    }
    

}