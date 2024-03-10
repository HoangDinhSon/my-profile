/**
 * 
 * 1. make object have English and Viet Namese 
 * 2. get các elemnt need change 
 * 3. check value of option 
 * 4. make ui have choosen 
 * */
const ENGLISH = {
    log_in: "Log in",
}
const VIETNAM = {
    log_in: "Đăng nhập"
}
const headerLogin = document.getElementById("headerLogin");
const languageChosen = document.getElementById("language");
console.log("languageChosen: ", languageChosen.value);

function changeLanguage() {
    switch (languageChosen.value) {
        case "ENGLISH":
            headerLogin.textContent = ENGLISH.log_in
            return;
        case "VIETNAM":
            headerLogin.textContent = VIETNAM.log_in
            return;
        default:
            console.log("ONLY run when not english and vietnam");
            break;
    }
}
languageChosen.addEventListener("change",changeLanguage)


