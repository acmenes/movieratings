$('#movie-form').submit(function () {
    console.log("it works")
    let $inputs = $('#movie-form :input')
    console.log($inputs)
    $('ul').append('<li>It worked</li>')
})