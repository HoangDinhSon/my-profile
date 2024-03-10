/**
 * purpose : use change UI Login and Register
 * 1. make switch use class hidden 
 * 2. when clicm btn SwitchRegister change block contemparary hidden
 * */
const btnSwitchLogin = document.getElementById("btnSwitchLogin");
const btnSwitchRegister = document.getElementById("btnSwitchRegister");
const UIRegisterForm = document.getElementById("UIRegisterForm");
const UILoginForm = document.getElementById("UILoginForm");
const changeSignInUI = document.getElementById("changeSignInUI");
const switchToRegister = document.querySelectorAll(".btnSwitchRegister");


btnSwitchLogin.addEventListener("click", () => {
    UIRegisterForm.className = "hidden"
    UILoginForm.className = "block"
})

changeSignInUI.addEventListener("click", () => {
    UIRegisterForm.className = "hidden"
    UILoginForm.className = "block"
})
switchToRegister.forEach((ele) => {
    ele.onclick = () => {
        UIRegisterForm.className = "block"
        UILoginForm.className = "hidden"
    }
})


