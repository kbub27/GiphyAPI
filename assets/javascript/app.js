$(document).ready(function () {
    // GIPHY API URL LINK SAVED TO A VARIABLE
    var giphyURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=M4QerXA1BTog7T6M4tVp4T87xtAk8rXK&limit=10";
    // ARRAY OF STRINGS BASED ON THE THEME OF SPORTS
    var sports = ['Basketball','Football','Soccer'];
    // CREATE A FUNCTION TO LOOP THROUGH ARRAY AND CREATE A BUTTON FOR EACH ELEMENT IN THE ARRAY
    function makeBtn() {
        $('.btns').empty();
        for (let i = 0; i < sports.length; i++) {
            $('.btns').append('<button class="btn btn-warning">' + sports[i] + '</button>' );
        }
    }



    makeBtn();
})