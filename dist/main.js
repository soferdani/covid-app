const { create } = require("handlebars")

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
    }else{
        display.renderQue(next[1], next[2])
    }
    display.renderChat(text, next[0])
})

loadPage()

console.log(moment(Date.now());

let ctx = $('#myChart')
// let ct = $('#page-content')
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
