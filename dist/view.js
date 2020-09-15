class Renderer {
    constructor(){
    }

    renderHome(){
        const html = '<span id="menu-button"><i class="fas fa-bars"></i></span>'
        $('#menu-bar').empty().append(html)
        $('#menu-option').css('display', 'none')

        const source = $('#home-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template()
        $('#page-content').empty().append(newHTML)
    }

    renderMenu(){
        const html = '<span id="delete-menu"><i class="fas fa-times"></i></span>'
        $('#menu-bar').empty().append(html)
        $('#menu-option').css('display', 'grid')
    }

    renderDownMenu(){
        const html = '<span id="menu-button"><i class="fas fa-bars"></i></span>'
        $('#menu-bar').empty().append(html)
        $('#menu-option').css('display', 'none')
    }

    renderCalculator(){
        const html = '<span id="menu-button"><i class="fas fa-bars"></i></span>'
        $('#menu-bar').empty().append(html)
        $('#menu-option').css('display', 'none')

        const source = $('#calculatur-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template()
        $('#page-content').empty().append(newHTML)
    }

    renderChat(text, bool){
        if(bool){
            $('#chat').append(`<p class="chat-msg" id="user-msg">${text}</p><br/><br/>`)
        }else{
            $('#chat').append(`<p class="chat-msg" id="domain-msg">${text}</p><br/><br/>`)
        }
    }

    renderQue(res1, res2){
        $('#answers').empty().append(`<div class="answer">${res1}</div><div class="answer">${res2}</div>`)

    }

    renderUserForm(){
        const source = $('#userForm-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template()
        $('#answers').empty().append(newHTML)
    }

    renderDate(){
        const source = $('#date-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template()
        $('#answers').empty().append(newHTML)
    }

    renderThankyou(){
        $('#page-content').empty().append('<div id="msg">Thank you the results will arrive soon</div>')
    }

}