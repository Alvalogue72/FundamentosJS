'use strict';

let datosAcceso = []; // 'array' dónde almaceno los valos de nombre y clave

if (navigator.cookieEnabled == true) { // comprueba que el navegador sea compatible
    const nombre = document.getElementById("name"); // accedo al valor del input para el nombre
    const valor = document.getElementById("value"); // accedo al valor del input para la clave
    const grabar = document.getElementById("save"); // referencio al bóton 'guardar'

    mostrarDatos(); // muestro el contenido de las 'cookies'
    grabar.addEventListener("click", function (evento) { // escucho la pulsación del botón 'guardar'
        grabarDato(nombre.value, valor.value); // grabo una 'cookie'
    });
} else {
    alert("El uso de cookies está desactivado");
}

const logoutButton = document.getElementById("logout");
// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 
