$('document').ready( function(event) {
  var poetryAPI = 'https://g-poetrydb.herokuapp.com/title/Ozymandias/lines.json'
  var xhr = $.getJSON(poetryAPI, {Content: "application-JSON"})
  xhr.done(function (data) {
    var lines = data[0].lines;
    for (let line of lines) {
      $('.poem').append(line + "<br>");
    }
    var imgURL = 'https://api.unsplash.com/photos/random/?client_id=0a0686fa3adebb7d96c937efed27f10c59eb3e4c8e347db112f15542ec88a598'
    var xhr2 = $.getJSON(imgURL)
    xhr2.done(function(imgData) {
      var image = $('<img />', {
        src: imgData.urls.regular
      });
      $('.img').append(image);
    })
  })
})
