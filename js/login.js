"use strict"

const defaultUsername = "usuario";
const defaultPassword = "1234";

function requestCredentials() {
    
    const username = prompt("Ingrese su nombre de usuario, por favor.", "usuario") ;
    
    if (!validateUsername(username)) {

        alert("El nombre de usuario debe tener al menos 3 caracteres alfanuméricos.");
        tryAgain();
    
    }  else {

        const password = prompt("Ingrese su contraseña, por favor.", "1234");
        
        if (password === null) {
            alert("Acceso cancelado");
            tryAgain();
        } else {
            authenticate(username, password);
        } 
    }
    

}

// Valida el usuario que debe contener al menos 3 caracteres alfanuméricos
function validateUsername(username) {
    const myRegex = /^\w{3,}$/;
    return myRegex.test(username) && username !== null;
}

// Autentica las credenciales y muestra el contenido oculto
function authenticate(username, password) {
    if (username === defaultUsername && password === defaultPassword) {
        alert("Bienvenido " + username);
        document.getElementById("mainContent").className = "container my-5 d-flex justify-content-center flex-wrap gap-4";
    } else {
        alert("Usuario o contraseña incorrectos.");
        tryAgain();
    }
}

// Pregunta si se desea intentar de nuevo
function tryAgain() {
    const tryAgain = confirm("¿Desea intentarlo de nuevo?") ;
    if (tryAgain) {
        location.reload() ;
    } else {
        alert("Acceso denegado")
    }
}

// Inicio de solicitud de credenciales
requestCredentials();
