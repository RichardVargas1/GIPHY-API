// Beginning array of superheros.
var superheros = ['Superman', 'Batman', 'Wonder Woman', 'Iron Man', 'Thor', 'Captain America', 'Aquaman', 'The Flash', 'Spider-Man', 'Black Panther'];

function displaysuperheroInfo(){     

$('#superherosView').empty();     
    var superhero = $(this).attr('data-name');

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + superhero + "&api_key=dc6zaTOxFJmzC&limit=10";
// Ajax call to thw Giphy API. Utilizing a template literal for this line 11.    
$.ajax({url: queryURL, method: 'GET'})
    .done(function(response) {
        var results = response.data;
        for(var i=0; i < results.length; i++){
            if (results[i].rating === "r" || results[i].rating === "pg-13")
            {
            }
            else {
            console.log(response)
            var rating = results[i].rating;
            var p = $('<p>').text( "Rating: " + rating);
            var superheroImage = $('<img>');
            // Attributing the pausing and animation of the gifs pulled from the Giphy-API.
            superheroImage.attr('src', results[i].images.fixed_height_still.url);
            superheroImage.attr('data-still', results[i].images.fixed_height_still.url);
            superheroImage.attr('data-animate', results[i].images.fixed_height.url);
            superheroImage.attr('data-state', 'still');
            superheroImage.addClass('superheroImage');
            
            $('#superherosView').append(p);
            $('#superherosView').append(superheroImage);
            }
        }

    $('.superheroImage').on('click', function(){
        var state = $(this).attr('data-state'); 
        console.log(state);
        // Code orchestraing the pausing and animating of the shown gifs on the HTML.
        if ( state === 'still'){
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }else{
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });
        
    });   
}

function renderButtons(){ 
    // Empties the superhero button, before adding a new one. That way, we will not have any buttons that repeat.
$('#buttonsView').empty();
    // Loops through superhero array.
for (var i = 0; i < superheros.length; i++){
    // Button tag is created here. 
    var a = $('<button>')
    a.addClass('superhero');
    a.addClass("btn");
    a.attr('data-name', superheros[i]);
    a.text(superheros[i]);
    $('#buttonsView').append(a);
    // I was attempting to find a way to insert width between my buttuns here, but I could not find a way. I was thinking of =trying to append calls to my variable superheros, but I was not sure. Not sure how.
}
}

$('#addsuperhero').on('click', function(){ 
    // This line of code gathers the text entered from the textbox.
var superhero = $('#superhero-input').val().trim();
    // Superhero is then pushed to the superhero array.
superheros.push(superhero);

renderButtons();

return false;
})

$(document).on('click', '.superhero', displaysuperheroInfo);

renderButtons();