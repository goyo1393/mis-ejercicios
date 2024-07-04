function emailValidation(email, password) {
    if (email.indexOf("@") >= 0 & email.length > 5 & email.indexOf(".") >= 0) {
        if (password.toLowerCase().indexOf("a") >= 0 | password.toLowerCase().includes("IBM") != true | password.length > 6) {
            alert("Error en password")
        } else {
            alert("Correcto");
        }
    } else {
        alert("Error en email");
    }
}