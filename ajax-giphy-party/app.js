"use strict";

console.log("Let's get this party started!");

/** getGif: stays on the same page, upon being invoked. Takes the value from
 * the search input and the api key to send a GET request to giphy API. It
 * stores the URL for the gif and passes to the showGif function.
 */
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

/**
 * showGif: intakes the gifURL and adds the URL as a source to a new image that
 * is appended to the gif container.
 */
function showGif(gifURL) {
  let $image = $('<img></img>');
  $image.attr('src', gifURL);
  $('#gif-container').append($image);
}


$('#delete-button').on('click', deleteGifs);

/**
 * deleteGifs: empties the gif container
 */
function deleteGifs() {
  $('#gif-container').empty();
}