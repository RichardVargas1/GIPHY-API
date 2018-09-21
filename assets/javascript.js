// Event listener for all button elements
$("button").on("click", function() {
    
var topics = $(this).attr("data-topics");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=GTBBb6azu2SsBkQXEGs0WxNauL3D6UaS&limit=10";
// Making my AJAX call.
$.ajax({
    url: queryURL,
    method: "GET"
})
    // After the data comes back from the API
    .then(function(response) {
        console.log(queryURL);
        // Storing an array of results in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var heroDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var heroImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            heroImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            heroDiv.append(p);
            heroDiv.append(heroImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#displayGifs").prepend(animalDiv);
          }
    });
});