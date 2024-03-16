const formRegister = document.getElementById("formRegister");
const usernameRegisterEle = document.getElementById("usernameRegister");
const passwordRegisterEle = document.getElementById("passwordRegister");
const passwordRegisterRewriteEle = document.getElementById("passwordRegisterRewrite");
const readPolicyRegisterEle = document.getElementById("readPolicyRegister");
const usernameRegisterErrorEle = document.getElementById("usernameRegisterError");
const passwordRegisterErrorEle = document.getElementById("passwordRegisterError");
const passwordRegisterRewriteErrorEle= document.getElementById("passwordRegisterRewriteError");



function handleSubmitRegister(event) {
    event.preventDefault();

    const space = /\s/.test(passwordRegisterEle.value);
    const hasDigit = /[0-9]/.test(passwordRegisterEle.value);
    const hasAtLeaseUppercase = /[A-Z]/.test(passwordRegisterEle.value);
    const hasAtLeaseSpecialCharacter = /[^0-9A-Za-z]/.test(passwordRegisterEle.value);

    usernameRegisterErrorEle.textContent = "";
    passwordRegisterErrorEle.textContent = "";
    passwordRegisterRewriteErrorEle.textContent="";

    // username không được để trống
    if (usernameRegisterEle.value.trim() === "") {
        usernameRegisterErrorEle.textContent = "Username không  được để trống";
        return
    }
    // password không dc để trống:
    if (passwordRegisterEle.value === "") {
        passwordRegisterErrorEle.textContent = "Bạn phải nhập password";
        return
    }
    // check space in password 
    if (space) {
        passwordRegisterErrorEle.textContent += "PassWord không được chứa khoảng trắng ,";
    }
    // Ít nhất 1 chữ hoa
    if (hasAtLeaseUppercase === false) {
        passwordRegisterErrorEle.textContent += "PassWord phải có ít nhất 1 chữa hoa ,";
    }
    // ít nhất có 1 số 
    if (hasDigit === false) {
        passwordRegisterErrorEle.textContent += "PassWord phải có ít nhất 1 chữa số ,";
    }
    // ít nhất có 1 kí tự đặc biệt 

    if (hasAtLeaseSpecialCharacter === false) {
        passwordRegisterErrorEle.textContent += "PassWord phải có ít nhất 1 Ký tự đăc biệt ,";
    }
    // ít nhất có 6 chữ số 
    if(passwordRegisterEle.value.length<6 ){
        passwordRegisterErrorEle.textContent += "Password phải có từ 6 chữ số trở lên ,";
    }
    // check password and rewrite password same each other
    if (passwordRegisterEle.value!=passwordRegisterRewriteEle.value){
        passwordRegisterRewriteErrorEle.textContent ="Password không khớp"
    }



}
formRegister.onsubmit = (event) => handleSubmitRegister(event)