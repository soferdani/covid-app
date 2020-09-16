class Renderer {
    constructor(){
    }

    renderMenu(){
        const html = '<span id="delete-menu"><i class="fas fa-times"></i></span>'
        $('#menu-bar').empty().append(html)
        $('#menu-option').css('display', 'grid')
    }

    renderOfMenu(){
        const html = '<span id="menu-button"><i class="fas fa-bars"></i></span>'
        $('#menu-bar').empty().append(html)
        $('#menu-option').css('display', 'none')
    }


    renderPage(name){
        this.renderOfMenu()
        const source = $(`#${name}-template`).html()
        const template = Handlebars.compile(source)
        const newHTML = template()
        $('#page-content').empty().append(newHTML)
    }

    renderChat(text, id){
        $('#chat').append(`<p class="chat-msg" id=${id}>${text}</p><br/><br/>`)
    }

    renderQue(res1, res2){
        $('#answers').empty().append(`<div class="answer">${res1}</div><div class="answer">${res2}</div>`)

    }

    renderUserForm(date){
        const source = $('#userForm-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({date})
        $('#answers').empty().append(newHTML)
    }

    renderThankyou(){
        $('#page-content').empty().append('<div id="msg">Thank you the results will arrive soon</div>')
    }
    
    addOption(){
        for(let i = new Date('01/22/2020').getTime(); i <= Date.now(); i+= 86500000){
        $('#start').append(`<option value="${i}">${moment(i).format('L')}</option>`)
        $('#end').append(`<option value="${i}" selected="selected">${moment(i).format('L')}</option>`)
        }
    }

    renderEror(){//not working yet
        $('#myChart').append('<div id="eror">Please try diffrent country name</div>')
    }

    renderStats(worldstats){
        // const {TotalConfirmed} = this.worldStats
        // const {TotalDeaths} = this.worldStats
        // const {TotalRecovered} = this.worldStats
        // const total = TotalRecovered + TotalDeaths + TotalConfirmed
        const source = $(`#world-stats-template`).html()
        const template = Handlebars.compile(source)
        const newHTML = template(worldstats)
        $('#world-stats').empty().append(newHTML)
    }
}