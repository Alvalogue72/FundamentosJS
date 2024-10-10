const logout = document.getElementById("logout");

logout.addEventListener("click", function(event) {
    event.preventDefault();

    deleteCookie("loggedIn");
    setTimeout(() => { checkPath();}, 500);
    
});

function checkPath() {
  
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

}