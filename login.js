const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const userName = document.querySelector("#login-title");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function userLoginEvent(userValue){
    userName.classList.remove(HIDDEN_CLASSNAME);
    userName.innerHTML = `Hello! ${userValue}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        loginInput.classList.add(HIDDEN_CLASSNAME);
        const userValue = loginInput.value;
        localStorage.setItem(USERNAME_KEY, userValue);
        userLoginEvent(userValue);
    })
}else{
    userLoginEvent(savedUsername);
}

