"use strict";

import { Pila } from '../classes/Pila.js';
import { introduzco, obtengo } from '../modules/scriptPila.js'; 


export const CESTA_COLADA = 10; // Límite de la cesta de colada
export const pilaColada = new Pila(); // Instancia de Pila
export const PRENDAS = ["👕 Camiseta", "👖 Pantalón", "👗 Vestido", "🧦 Calcetines", "👔 Camisa", "🩳 Shorts", "🩲 Ropa Interior", "🧥 Abrigo", "🧤 Guantes", "🎽 Chaleco"];

// Selección de elementos del DOM
export const cestaDiv = document.getElementById("cesta");
const introducirPrendaBtn = document.getElementById("introducirPrenda");
const sacarPrendaBtn = document.getElementById("sacarPrenda");

// Event listeners para los botones
introducirPrendaBtn.addEventListener("click", introduzco);
sacarPrendaBtn.addEventListener("click", obtengo);

const logoutButton = document.getElementById("logout");
// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 