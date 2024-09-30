"use strict"

const defaultUsername = "jota";
const defaultPassword = "dejame";

const username = prompt("Ingrese su nombre de usuario, por favor.") ;

const myRegex = /^\w{3,}$/;

if (!myRegex.test(username) || username === null) {

    alert("El nombre de usuario debe tener al menos 3 caracteres alfanuméricos.");
    tryAgain();

} else {  

    const password = prompt("Ingrese su contraseña, por favor.");

    if (password === null) {
        alert("Acceso cancelado");
        tryAgain();

    } else {
        if (username === defaultUsername && password === defaultPassword) {
            alert("Bienvenido " + username);
            document.getElementById("mainContent").className = "container d-flex justify-content-center flex-wrap gap-4";
        } else {
            alert("Usuario o contraseña incorrectos.");
            tryAgain();
        }
    }
}

function tryAgain() {

    const tryAgain = confirm("¿Desea intentarlo de nuevo?") ;

    if (tryAgain) {
        location.reload() ;
    } else {
        alert("Acceso denegado")
    }

}
