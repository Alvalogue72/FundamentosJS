'use strict';

let datosAcceso = []; // 'array' dónde almaceno los valos de nombre y clave

if (window.sessionStorage) {
    const nombre = document.getElementById("name");
    const ciudad = document.getElementById("ciudad"); 
    const pais = document.getElementById("pais"); 
    const grabar = document.getElementById("save"); 

    mostrarDatos(); // nada más cargar la página muestro el contenido de 'sessionStorage'
    grabar.addEventListener("click", function (evento) { // escucho la pulsación del botón 'guardar'
        grabarDato(nombre.value, ciudad.value, pais.value);
    });
} else {
    alert("El navegador no soporta sessionStorage");
}

const logoutButton = document.getElementById("logout");
// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 

