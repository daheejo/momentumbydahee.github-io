// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function LoginBtnClick() {
    const username = loginInput.value;
    if (username ==="") {
        alert("Write your name");
    } else if (username.length > 15) {
        alert("Name is too long");
    }
}
loginButton.addEventListener("click", LoginBtnClick)