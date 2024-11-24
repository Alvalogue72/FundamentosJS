import { Cola } from '../classes/Cola.js'; 
import { llega, atiendo } from '../modules/scriptCola.js'; 

export const AFORO_TALLER = 10; // Límite de coches en el taller
export const taller = new Cola(); // Instancia de la cola para gestionar los coches
export const VEHICULOS = [
    "Coche 🚗", 
    "Camión 🚚", 
    "Furgoneta 🚐", 
    "Motocicleta 🏍️", 
    "Bicicleta 🚲", 
    "Autobús 🚌", 
    "Camión de carga 🚛", 
    "Tren 🚆", 
    "Avión ✈️", 
    "Barco 🚢",
    "Taxi 🚖", 
    "Camioneta 🚙", 
    "Monopatín 🛹", 
    "Tractor 🚜", 
    "Helicóptero 🚁", 
    "Tranvía 🚋",];

// Elementos del DOM
export const tallerDiv = document.getElementById("tallerDiv");
const outVehicleButton = document.getElementById("outVehicle");
const inVehicleButton = document.getElementById("inVehicle");

// Event Listeners
inVehicleButton.addEventListener("click", llega);
outVehicleButton.addEventListener("click", atiendo);

const logoutButton = document.getElementById("logout");
// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 