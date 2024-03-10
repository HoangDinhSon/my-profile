
const accountEle = document.getElementById("account");
const formLogin = document.getElementById("formLogin");
const passwordEle = document.getElementById("password");
const accountNotice = document.getElementById("accountNotice");
const passwordNotice = document.getElementById("passwordNotice");

function handleLogin(event) {
    event.preventDefault()
    const accountInput = accountEle.value;

    let passwordErrorNotice = "";
    passwordNotice.textContent = "";
    const passwordInputValue = passwordEle.value;
    const hasSpace = passwordInputValue.search(/\s/) == -1;// khoang trắng 
    const hasDigit = /[0-9]/.test(passwordInputValue);
    const hasAtLeaseUppercase = /[A-Z]/.test(passwordInputValue);
    const hasAtLeaseSpecialCharacter = /[^0-9A-Za-z]/.test(passwordInputValue);

    // validate input account
    if (accountInput.trim() == "") {
        accountNotice.className = "block text-[red]";
    } else {
        accountNotice.className = "hidden";
    }
    /*
    validate password and độ mạnh của password
    1.  check khoang trắng use regex 
    */
    function noticeErrorPassword(error) {
        passwordNotice.className = "block text-[red]";
        passwordErrorNotice += error;
        passwordNotice.textContent = passwordErrorNotice;
    }
    if (passwordInputValue == "") {
        noticeErrorPassword("Phải điền vào password, ");
        return
    }

    if (!hasSpace) {
        noticeErrorPassword("Không được chứa khoảng trắng, ");
    }

    if (hasAtLeaseUppercase === false) {
        noticeErrorPassword("Bạn phải nhập ít nhất 1 chữ Hoa, ");
    }

    // password phải lớn hơn hoặc bằng 6 kí tự 
    if (passwordInputValue.length < 6) {
        noticeErrorPassword("Password phải có hơn 6 kí tự, ");
    }
    // check has at least 1 number
    if (hasDigit === false) {
        noticeErrorPassword("Phải có ít nhất 1 số, ");
    }

    // check has at lease xharacter Special
    if (hasAtLeaseSpecialCharacter === false) {
        noticeErrorPassword("Phải có ít nhất 1 kí tự đặc biệt, ");
    }
    // if there is not error will run axios 
    if (passwordErrorNotice === "" && accountInput.trim().length > 0) {
        try {
            loginDummyData()
        } catch (error) {
            console.log(error);
        }

    }
};


formLogin.addEventListener('submit', handleLogin);
