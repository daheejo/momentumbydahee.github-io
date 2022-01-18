const maxNum = document.getElementById("maxNum");
const guessNum = document.getElementById("guessNum");
const compare = document.querySelector("#result span:first-child");
const result = document.querySelector("#result span:last-child");
const gameForm = document.getElementById("game");

function playGuess(event) {
  event.preventDefault();
  const randomNum = Math.ceil(Math.random() * parseInt(maxNum.value));
  compare.innerText = `You chose: ${guessNum.value}, the machine chose: ${randomNum}.`;
  if (parseInt(guessNum.value) === randomNum) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

gameForm.addEventListener("submit", playGuess);