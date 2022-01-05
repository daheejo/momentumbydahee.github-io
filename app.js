// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function LoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
    }

loginForm.addEventListener("submit", LoginSubmit);