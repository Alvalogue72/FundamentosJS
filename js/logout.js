/* const logout = document.getElementById("logout");

logout.addEventListener("click", function(event) {
    event.preventDefault();

    deleteCookie("loggedIn");
    setTimeout(() => { checkPath();}, 500);
    
}); */

const logout = document.getElementById("logout");

logout.addEventListener("click", function(event) {
  event.preventDefault();

  deleteCookie("loggedIn");

  const urlParams = new URLSearchParams(window.location.search);
  const baseUrl = window.location.origin;
  const queryParams = urlParams.toString();

  // Redirigir al index.html con los mismos parámetros
  window.location.href = `${baseUrl}?${queryParams}`;
});

/* function checkPath() {
  
  const rutaActual = window.location.pathname;

  console.log(rutaActual)
   
  const partesRuta = rutaActual.split('/');
  
    // Eliminar el último elemento del array (nombre del archivo)
    partesRuta.pop();
  const levelsup = partesRuta.length;
  
    // Unir las partes restantes para obtener el directorio pad
  
   // Construir la ruta completa hacia el archivo index.html en el directorio raíz
    const rutaHome = '../'.repeat(levelsup - 1) + 'index.html';

    console.log(rutaHome);
    
    window.location.href = rutaHome;

} */