// khi nhan login phai validate 
/*
- email khong dc de trong, phai co thong6 bao2
- pass word phai co so va chu cai 

lay du lieu 
validate 
neu  thanh cong thi gui len server 
neu khong thanh cong thi hien thong bao 
*/
const accountEle = document.getElementById("account");
const btnLogin = document.getElementById("btnLogin");
const formLogin = document.getElementById("formLogin");
const passwordEle = document.getElementById("password");
const accountNotice = document.getElementById("accountNotice");
const passwordNotice = document.getElementById("passwordNotice");
function handleLogin(event) {
    event.preventDefault()
    const accountInput = accountEle.value;

    const passwordErrorNotice = "";
    const passwordInputValue = passwordEle.value;
    const hasSpace = passwordInputValue.search(/\s/) == -1;// khoang trắng 
    console.log(hasSpace);
    const hasAtLeaseUppercase = passwordInputValue.search(/[A-Z]/) == -1;

    // validate input account
    if (accountInput.trim() == "") {
        accountNotice.className = "block text-[red]";

    }
    /*
    validate password and độ mạnh của password
    1.  check khoang trắng use regex 
    */
    if (passwordInputValue == "") {
        passwordNotice.className = "block text-[red]";
        passwordNotice.textContent = passwordErrorNotice + "phải điền vào password - ";
    }

    if (!hasSpace) {
        passwordNotice.className = "block text-[red]";
        passwordNotice.textContent = passwordErrorNotice + "không được chứa khoảng trắng - ";
    }
    if (hasAtLeaseUppercase) {
        passwordNotice.className = "block text-[red]";
        passwordNotice.textContent = passwordErrorNotice + "Bạn phải nhập ít nhất 1 chữ Hoa - ";
    }
    console.log(passwordErrorNotice);



    // console.log(result);
    console.log(passwordEle.value);
};

formLogin.addEventListener('submit', handleLogin);
