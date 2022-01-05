// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
function LoginSubmit(event) {
    event.preventDefault(); //submit 후 새로고침 막기
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    console.log(username);
    greeting.innerText = `Hello ${username}!`; //"Hello " + username +"!";
    greeting.classList.remove(HIDDEN_CLASS);
    }

loginForm.addEventListener("submit", LoginSubmit);
