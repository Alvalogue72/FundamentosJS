"use strict";

// Credenciales almacenadas
const storedUsername = "usuario";
const storedPassword = "1234";

// Referencias a los elementos del DOM
const submitButton = loginForm.querySelector('input[type="submit"]');
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const loginMessage = document.getElementById("loginMessage");
const userHelp = document.getElementById("userHelp");
const passwordHelp = document.getElementById("passwordHelp");

if (getSessionStorage("loggedIn") === "true") {
    window.location.replace("./menu/index.html") ;
}

// Evento que maneja el formulario
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const valueUsername = inputUsername.value.trim();
    const valuePassword = inputPassword.value.trim();
    
    if (!validateUsername(valueUsername)) {
        userHelp.className = "form-text text-danger d-block";
        return;
    }

    if (!validatePassword(valuePassword)) {
        passwordHelp.className = "form-text text-danger d-block";
        return;
    }

    if (storedUsername === valueUsername && storedPassword === valuePassword) {

        displayMessage("¡Bienvenido! &#128512", "green");
        
        setSessionStorage("loggedIn", "true");

        setTimeout(() => {
            window.location.href = "./menu/index.html";
        }, 2000);

        inputUsername.disabled = true;
        inputPassword.disabled = true;
        submitButton.disabled = true;
        
    } else {
        displayMessage("Credenciales incorrectas, acceso denegado", "red");
    }
});

// Valida el usuario que debe contener al menos 3 caracteres alfanuméricos
function validateUsername(username) {
    const myRegex = /^\w{3,30}$/;
    return myRegex.test(username) && username !== null;
}

// Valida la contraseña que debe contener al menos 4 caracteres
function validatePassword(password) {
    return password.length >= 4;
}

// Muestra mensajes en el login
function displayMessage(message, color) {
    loginMessage.innerHTML = message;
    loginMessage.style.color = color;
    loginMessage.classList.remove("d-none");
}

// Oculta los mensajes de error
function resetError(id) {
    document.getElementById(id + 'Help').className = "d-none";
}

//  Eventos para resetear errores
inputUsername.addEventListener("change", function() {
  resetError('user');
});

inputPassword.addEventListener("change", function() {
  resetError('password');
});