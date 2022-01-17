const max = document.getElementById("max");
const guessing = document.getElementById("guessing");
const compare = document.querySelector("#result span fisrt-child");
const result = document.querySelector("#result span last-child");

function playGuess(event) {
  event.preventDefault();
  const randomNum = Math.random()*max.length
  compare.innerText = `You chose: ${guessing}, the machine chose: ${randomNum}.`
  if (guessing === randomNum) {
    result.innerText = "You won!"
  } else {
    result.innerText = "You lost!"
  }

guessing.addEventListener("submit", playGuess);