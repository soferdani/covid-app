const display = new Renderer
const module = new APIManager

const loadPage = async function(){
    display.renderHome()
    const countryName = await module.getCurrentCountry()
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

loadPage()




