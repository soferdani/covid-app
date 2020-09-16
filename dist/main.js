const display = new Renderer
const module = new APIManager

const loadPage = async function(){
    display.renderHome()
    const countryName = await module.getCurrentCountry()
    module.countryName = countryName
    await module.getStats(countryName, '', '')
    module.createChart()
}

$('#menu-bar').on('click', '#menu-button', function () {
    display.renderMenu()
})

$('#menu-bar').on('click', '#delete-menu', function () {
    display.renderDownMenu()
})

$('#search-button').on('click', async function () {
    const countryName = $('#country-input').val()
    module.countryName = countryName
    await module.getStats(countryName, '', '')
    module.createChart()
    $('#country-input').val('')
})

$('#home').on('click', function () {
    display.renderHome()
    loadPage()
})

$('#covid-calculator').on('click', function () {
    display.renderCalculator()
})

$('#page-content').on('click', '.answer', function () {
    const text = $(this).text()
    const next = module.calculaturQue(text)
    display.renderChat(text, "user-msg")
    setTimeout(function(){ 
        display.renderChat(next[0], 'domain-msg')
        if (next[0] === 'Please submit your info for answers') {
            display.renderUserForm()
        } else {
            if (next[0] === 'Please submit your info and date of exposer for answers') {
                display.renderDate()
            } else {
                display.renderQue(next[1], next[2])
            }
        }
    }, 700)
})

$('#page-content').on('click', '.submit-user', function () {
    const name = $(this).closest('div').find('.name-input').val()
    const email = $(this).closest('div').find('.mail-input').val()
    const date = $(this).closest('div').find('.date-input').val()
    const status = module.status
    module.saveUser(name, email, date, status)
    display.renderThankyou()
})

$( "#page-content" ).change('#start', async function() {
    let from = $('#start option:selected').text()
    let to = $('#end option:selected').text()
    from = new Date(from).toISOString().substring(0, 10)
    to = new Date(to).toISOString().substring(0, 10)
    await module.getStats(module.countryName, from, to)
    module.createChart()
  });

loadPage()
