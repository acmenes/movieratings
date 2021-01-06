const removeButton = document.querySelectorAll("button")
const movieItem = document.querySelectorAll("li")

$('#movie-form').submit(function (e) {
    e.preventDefault();
    console.log("it works")
    let $inputs = $('#movie-form :input')
    console.log($inputs)
    $('ul').append('<li class="list-group-item">It worked</li> <button type="button" class="btn btn-danger btn-sm">x</button')
    // $('li').append('<button type="button" class="btn btn-danger btn-sm">x</button')
})

$('btn btn-danger ').submit(function (e) {
    e.preventDefault();
    console.log("it works")
})