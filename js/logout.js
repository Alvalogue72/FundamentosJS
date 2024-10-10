 const logout = document.getElementById("logout");

logout.addEventListener("click", function(event) {
    event.preventDefault();

    deleteCookie("loggedIn");
    setTimeout(() => { redirigirAHome();}, 500);
    
}); 

/* function redirigirAHome() {
  // Obtener la ruta actual del archivo HTML
  const rutaActual = window.location.origin + window.location.pathname;

  // Dividir la ruta por '/' para obtener un array de directorios
  const partesRuta = rutaActual.split('/');

  // Eliminar el último elemento del array (nombre del archivo)
  partesRuta.pop();

  // Unir las partes restantes para obtener el directorio padre
  const directorioPadre = partesRuta.join('/');



  // Construir la ruta completa hacia el archivo index.html en el directorio raíz
  const rutaHome = directorioPadre.split('/');

const enga = rutaHome.indexOf("");

const vamo = rutaHome.slice(0, enga + 2);

const ultimo = vamo.join('/') + '/index.html';

  // Redirigir a la página de inicio
  window.location.href = ultimo;
} */

function redirigirAHome() {
  // Redirigir directamente a la página de inicio en el directorio raíz
  window.location.href = window.location.origin + '/index.html';
}

