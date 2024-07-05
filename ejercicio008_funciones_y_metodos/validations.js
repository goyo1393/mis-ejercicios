function emailValidation(email, password) {

    emailError.textContent = '';
    passwordError.textContent = '';
    if (email.indexOf("@") >= 0 & email.length > 5 & email.indexOf(".") >= 0) {
        errorMessage("", 'emailError');
        if (password.toLowerCase().indexOf("a") >= 0 | !password.toLowerCase().includes("IBM") | password.length < 6) {
            errorMessage("", 'passwordError');
        } else {
            errorMessage("Error en Password", 'passwordError');
        }
    } else {  
        errorMessage("Error en Email", 'emailError');
    }
}

function errorMessage (message, selector) {
    document.querySelector(`#${selector}`).innerHTML = message;
}