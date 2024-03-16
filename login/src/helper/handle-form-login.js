"use strict"
const accountEle = document.getElementById("account");
const formLogin = document.getElementById("formLogin");
const passwordEle = document.getElementById("password");
const accountNotice = document.getElementById("accountNotice");
const passwordNotice = document.getElementById("passwordNotice");
window.onload = () => {
    if (localStorage.getItem("token")) {
        console.log("onload will run at here");
        window.open("home-page/home.html", "_self");
    }
}
function handleLogin(event) {
    event.preventDefault()
    const accountInput = accountEle.value;

    let passwordErrorNotice = "";
    passwordNotice.textContent = "";
    const passwordInputValue = passwordEle.value;

    // validate input account
    if (accountInput.trim() == "") {
        accountNotice.className = "block text-[red]";
    } else {
        accountNotice.className = "hidden";
    }

    function noticeErrorPassword(error) {
        passwordNotice.className = "block text-[red]";
        passwordErrorNotice += error;
        passwordNotice.textContent = passwordErrorNotice;
    }
    if (passwordInputValue == "") {
        noticeErrorPassword("Phải điền vào password, ");
        return
    }
    // if there is not error will run axios 
    if (passwordErrorNotice === "" && accountInput.trim().length > 0) {
        try {
            loginDummyData().then((data) => {
                localStorage.setItem("token", data.token)
                console.log(localStorage.getItem("token"));
            }).catch(error => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }
};


formLogin.addEventListener('submit', handleLogin);
