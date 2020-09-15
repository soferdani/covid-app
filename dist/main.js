

const display = new Renderer
const module = new APIManager

const loadPage = function(){
    display.renderHome()
}

$('#menu-bar').on('click', '#menu-button', function () {
    display.renderMenu()
})

$('#menu-bar').on('click', '#delete-menu', function () {
    display.renderDownMenu()
})

$('#search-button').on('click', async function () {
    const countryName = $('#country-input').val()
    await module.getStats(countryName, '', '')
    module.createChart(module.data)
})

$('#home').on('click', function () {
    display.renderHome()
})

$('#covid-calculator').on('click', function () {
    display.renderCalculator()
})

$('#page-content').on('click', '.answer', function () {
    const text = $(this).text()
    const next = module.calculaturQue(text)
    if(next[0] === 'Please submit your info for answers'){
        display.renderUserForm()
    }else{if(next[0] === 'Please submit your info and date of exposer for answers'){
        display.renderDate()
    }else{
        display.renderQue(next[1], next[2])
    }
    }
    display.renderChat(text, next[0])
})

$('#page-content').on('click', '.submit-user', function () {
    const name = $(this).closest('div').find('.name-input').val()
    const email = $(this).closest('div').find('.mail-input').val()
    const date = $(this).closest('div').find('.date-input').val()
    module.saveUser(name, email, date)
    display.renderThankyou()
})

loadPage()


const createChart = async function () {
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


