const display = new Renderer
const api = new APIManager

$('#menu-button').on('click', function () {
    display.renderMenu()
})


$('#search-button').on('click', function () {
    console.log("hello");
})