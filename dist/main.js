$('#search-button').on('click', function () {
    const cityName = $('#city-input').val()
    handleSearch(cityName, '', '')
    $('#city-input').val('')
})