"use strict";

$("form").on("submit", postJokes);

let count = 0;
// let countDiv;

async function getJokes() {
  const searchInput = $("input").val();
  const config = { params: { 'limit': 10, 'term': searchInput }, headers: { 'Accept': "application/json" } };
  const response = await axios.get("https://icanhazdadjoke.com/search", config);
  return response.data.results; //returns a promise
}

async function postJokes(evt) {
  evt.preventDefault();
  const jokes = await getJokes();
  $("#joke-container").empty();
  for (const jokeObj of jokes) {
    const { joke } = jokeObj;
    const countDiv = $("<div>").append(count);
    const eachJoke = $("<div>").append(joke, countDiv);
    const voteUpButton = $("<button>Vote Up </button>").attr("onclick", "countUp()");
    const voteDownButton = $("<button>Vote Down </button>").attr("onclick", "countDown()");
    eachJoke.append(voteDownButton, voteUpButton);
    // eachJoke.append(countDiv);
    $("#joke-container").append(eachJoke);
  }
}

function countUp() {
  count++;
  updateCount();
}

function countDown() {
  count--;
  updateCount();
}

function updateCount() {
  countDiv.text(count);
}
// postJokes();