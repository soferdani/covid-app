class Renderer {
    constructor(){
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

}