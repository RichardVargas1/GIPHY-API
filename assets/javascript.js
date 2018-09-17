

function getData() {

    var input = $("#searchText").val()

    //javascript, jQuery
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=GTBBb6azu2SsBkQXEGs0WxNauL3D6UaS&limit=23");
    // Promise.
    xhr.done(function (response) {
        console.log("success got data", response);
        var topics = response.data

        for (i in topics) {
            $('.body').append("<img src='" + topics[i].images.original.url + "' style='height:350px; width:350px;'/>")
        }
    });
}