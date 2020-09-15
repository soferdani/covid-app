class Renderer {
    constructor(){
    }

    renderMenu(){
        const html = '<span id="delete-menu"><i class="fas fa-times"></i></span>'
        $('#menu-bar').empty().append(html)
        // const source = $('#menu-template').html()
        // const template = Handlebars.compile(source)
        const newHTML = "<div>hello</div>"
        $('#page-content').empty().append(newHTML)
    }
}