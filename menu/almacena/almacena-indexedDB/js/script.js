'use strict';

let datos = [];

let solicitudDB, 
    bd,
    canalBD;

let nombreBD = "DatosPersonajes";

let versionBD = 1;

let tablaBD = "datos";

solicitudDB = indexedDB.open(nombreBD, versionBD); 

solicitudDB.onerror = function (event) {
    console.error(`IndexedDB error: ${event.target.errorCode}`); 
};

solicitudDB.onsuccess = function (event) { 
    console.info('Conexión satisfactoria'); 
    bd = event.target.result; 
};

solicitudDB.onupgradeneeded = function (event) { 
    console.info('Base de datos creada'); 
    bd = event.target.result; 
    let registros = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true }); 
    registros.createIndex("name", "name", { unique: false }); // CREAMOS UN CAMPO 'nombre'
    registros.createIndex("species", "species", { unique: false }); // CREAMOS UN CAMPO 'clave'
    registros.createIndex("image", "image", { unique: false }); // CREAMOS UN CAMPO 'clave'

    registros.oncompleted = function (event) {
        console.info('Almacen de datos creado');
    }
};

mostrarDatos(); // MUESTRO LOS DATOS

// DATOS
const equipo = document.getElementById("name");
const estadio = document.getElementById("species");
const escudo = document.getElementById("image");
const addOne = document.getElementById("add-one");
const addFive = document.getElementById("add-five");

// GUARDAR
const guardar = document.getElementById("save");
guardar.addEventListener("click", function () {
    grabarDato(equipo.value, estadio.value, escudo.value);
});

 // Función para obtener un personaje aleatorio
 async function getRandomCharacter() {
    // Generar un ID aleatorio (ya que la API tiene personajes con ID hasta el 826)
    const randomId = Math.floor(Math.random() * 826) + 1; // ID entre 1 y 826
    const url = `https://rickandmortyapi.com/api/character/${randomId}`;

    try {
        const response = await fetch(url);  // Hacer la solicitud GET
        const data = await response.json();  // Convertir la respuesta a JSON
        
        // Grabar los datos del personaje en IndexedDB
        grabarDato(data.name, data.species, data.image);
    } catch (error) {
        console.error('Error al obtener el personaje:', error);
    }
}

// Eventos para los botones +1 y +5
addOne.addEventListener("click", async () => {
    getRandomCharacter();
});

addFive.addEventListener("click", async () => {
    for (let i = 0; i < 5; i++) {
        await getRandomCharacter();
    }
});

const logoutButton = document.getElementById("logout");
// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 
