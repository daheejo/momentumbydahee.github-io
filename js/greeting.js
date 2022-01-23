// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const afterLogin = document.getElementById("after-login")

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
 
function LoginSubmit(event) {
    event.preventDefault(); //submit 후 새로고침 막기
    loginForm.classList.add(HIDDEN_CLASS);
    const usernameTyped = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameTyped); //local storage 저장
    showGreetings(usernameTyped);
}

function showGreetings(username) {
    // const username = localStorage.getItem(USERNAME_KEY);
    afterLogin.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${username}!`; //"Hello " + username +"!";
    greeting.classList.remove(HIDDEN_CLASS);
}

function loadName() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if (savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASS);
        loginForm.addEventListener("submit", LoginSubmit);
    } else {
        showGreetings(savedUsername);
    }
}

function init() {
    loadName();
}

init();