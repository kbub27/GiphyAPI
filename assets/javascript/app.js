$(document).ready(function () {

    // ARRAY OF STRINGS BASED ON THE THEME OF SPORTS
    var sports = ['Basketball', 'Football', 'Soccer', 'Lacrosse', 'Cricket'];
    var amnt = 10;

    //FUNCTION TO RETURN THE AMOUNT OF GIFS DISPLAYED ON PAGE
    $(document).on('click', '.returnAmnt', function () {
        amnt = $(this).text();
        console.log(amnt);
    })
    // CREATE A FUNCTION TO LOOP THROUGH ARRAY AND CREATE A BUTTON FOR EACH ELEMENT IN THE ARRAY
    function makeBtns() {
        $('.btns').empty();
        for (let i = 0; i < sports.length; i++) {
            $('.btns').append('<button class="btn btn-warning">' + sports[i] + '</button>');
        }
    };

    // CLICK FUNCTION TO GRAB THE VALUE FROM THE SEARCH AND MAKE A BUTTON FROM THAT VALUE
    $('.submit').click(function () {
        var searchVal = $('.form-control').val();
        sports.push(searchVal);
        makeBtns();
    });

    //CREATE ON CLICK FUNTION TO PULL GIFS
    $(document).on('click', '.btn', function () {
        $('.gifs').empty();
        var btnVal = $(this).text();
        var giphyURL = 'https://api.giphy.com/v1/gifs/search?q=' + btnVal + '&api_key=M4QerXA1BTog7T6M4tVp4T87xtAk8rXK&limit=' + amnt;
        $.ajax({
            url: giphyURL,
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
                console.log(response.data[i]);
                var imgDiv = $('<div class="image">');
                imgDiv.append('<img src="' + response.data[i].images.fixed_height_small_still.url + '" data-still="' + response.data[i].images.fixed_height_small_still.url + '" data-animate="' + response.data[i].images.fixed_height_small.url + '" data-state="still">');
                imgDiv.append('<p>' + response.data[i].rating + '</p>');
                $(".gifs").append(imgDiv)

            }
        })
    });
    // CREATE ON ON CLICK TO ANIMATE OR DE-ANIMATE THE GIFS
    $(document).on('click', 'img', function () {
        var state = $(this).attr('data-state');
        var animate = $(this).attr('data-animate');
        var still = $(this).attr('data-still');

        if (state === 'still') {
            $(this).attr('src', animate);
            $(this).attr('data-state', 'animate');
        } else if (state === 'animate') {
            $(this).attr('src', still);
            $(this).attr('data-state', 'still');
        }
    })

    makeBtns();
})