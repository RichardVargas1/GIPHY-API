// Event listener for any buttons shown on the page.
$("button").on("click", function() {
    
var topics = $(this).attr("data-topics");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=GTBBb6azu2SsBkQXEGs0WxNauL3D6UaS&limit=10";
// Making my AJAX call.
$.ajax({
    url: queryURL,
    method: "GET"
})
    // After the data comes back from the GIPHY API.
    .then(function(response) {
        console.log(queryURL);
        // stored arrayed results.
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            // div tag.
            var heroDiv = $("<div>");

            // Paragraph tag wil be utilized to space out gifs.
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag in this variable.
            var heroImage = $("<img>");
            // Setting the src attribute of the images to properties pulled from the URL.
            heroImage.attr("src", results[i].images.fixed_height.url);

            // heroDiv will be appended to the paragraph and image tabs.
            heroDiv.append(p);
            heroDiv.append(heroImage);

            // My heroDiv will be prepended to my HTML page.
            // Shown in the displayGifs div.
            $("#displayGifs").prepend(heroDiv);
          }
    });
});

// I utilized the dynamics-elements assignment to help contine this homework assignment.
// It helped start off with the jQuery aspect.