class APIManager {
    constructor(){
        this.data = []
        this.status = ''
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

    async saveUser(name, email, date, status){
        const res = await $.post('/saveUser', {name, email, date, status})
        console.log(res);
    }

    calculaturQue(text){
        if(text === 'I was exposed to a verified patient'){
            return ['For how long?' , 'More than 15 minutes', 'Less than 15 minutes']
        }
        if(text === 'More than 15 minutes'){
            return ['where?', 'Close space','Open space']
        }
        if(text === 'Less than 15 minutes'){
            this.status = ""
            return ['Please submit your info for answers', '', '']
        }
        if(text === 'Close space'){
            this.status = "exposed"
            return ['Please submit your info and date of exposer for answers', '', '']
        }
        if(text === 'Open space'){
            this.status = ""
            return ['Please submit your info for answers', '', '']
        }

        if(text === "I'm not feeling well"){
            return ['Whats your temprature?' , 'More than 38 degrees', 'Less than 38 degrees']
        }
        if(text === 'More than 38 degrees'){
            this.status = "symptoms"
            return ['Please submit your info for answers', '', '']
        }
        if(text === 'Less than 38 degrees'){
            this.status = ""
            return ['Please submit your info for answers', '', '']
        }

        if(text === "I returned from abroad"){
            this.status = "abroad"
            return ['Please submit your info and date of exposer for answers', '', '']
        }

        if(text === "I'm a verified corona patient"){
            return ['Do you have symptoms?' , 'Yes', 'No']
        }
        if(text === 'Yes'){
            this.status = "sick with symptoms"
            return ['Please submit your info for answers', '', '']
        }
        if(text === 'No'){
            this.status = "sick with out symptoms"
            return ['Please submit your info for answers', '', '']
        }

    }
    

    createChart () {
        let ctx = $('#myChart')
    
        let myChart = new Chart(ctx, {
            type: 'line',
        
            data: {
                labels: this.data[0],
                datasets: [{
                    label: 'Death',
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: this.data[1]
                },{
                    label: 'Active',
                    fill: false,
                    backgroundColor: 'rgb(25, 181, 254)',
                    borderColor: 'rgb(41, 128, 185)',
                    data: this.data[2]
                }]
            },

            options: {}
        });
    }

    async getLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(resolve, reject)
            }
        })
    }

    async getCurrentCity() {
        let position = await this.getLocation()
        console.log(position);
        // const lat = position.coords.latitude
        // const long = position.coords.longitude
        // await this.getStats('', lat, long)
    }
    
    async getUsersInfoFromDB () { //still need to test this part 
        let dbData = await $.get(`getUsers`)
        
    }

    
    // async sendMail(){
    //     const res = await $.post('/sendMail', {name, email, date, status})
    //     console.log(res);
    // }
}

