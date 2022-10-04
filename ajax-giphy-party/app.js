"use strict";

console.log("Let's get this party started!");


async function getGif(evt) {
  evt.preventDefault();
  const inputVal = $('input').val();
  const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
  const response = await axios.get('http://api.giphy.com/v1/gifs/search',
    { params: { q: inputVal, api_key: apiKey } });


  const gif = response.data.data[0].images.downsized.url;
  showGif(gif);
  console.log('i was clicked');
}

$('#submit-button').on('click', getGif);

function showGif(gifURL) {
  let $image = $('<img></img>');
  $image.attr('src', gifURL);
  $('#gif-container').append($image);
}


$('#delete-button').on('click', deleteGifs);

function deleteGifs() {
  $('#gif-container').empty();
}