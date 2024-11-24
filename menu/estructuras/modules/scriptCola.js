"use strict";

import { VEHICULOS, AFORO_TALLER, taller, tallerDiv } from '../taller/main.js';
import { generaAleatorioEnteros } from '../modules/aleatorio.js'; 

// Función para mostrar el estado del taller en el DOM
export function actualizarTaller() {
    tallerDiv.innerHTML = ""; // Limpia el contenedor
    if (taller.vacio()) {
        tallerDiv.innerHTML = "<p>NO HAY MÁS VEHÍCULOS EN LA LISTA DE ESPERA</p>";
    } else {
        taller.devolver().forEach((vehiculo, index) => {
            console.log(taller);
            const vehiculoElem = document.createElement("p");
            vehiculoElem.textContent = `${vehiculo}`;
            tallerDiv.appendChild(vehiculoElem);
        });
    }
}

// Función para añadir vehículos aleatorios
export function llega() {
    if (taller.tamano() >= AFORO_TALLER) {
        alert("DEBERÍAS EMPEZAR A REPARAR LOS VEHÍCULOS");
        return;
    }

    // Generar índice aleatorio y seleccionar un vehículo
    const indiceAleatorio = generaAleatorioEnteros(0, VEHICULOS.length - 1);
    const vehiculoAleatorio = VEHICULOS[indiceAleatorio];

    taller.encolar(vehiculoAleatorio);
    actualizarTaller();
}

// Función para atender vehículos
export function atiendo() {
    if (taller.vacio()) {
        alert("NO HAY MÁS VEHÍCULOS QUE REPARAR");
    } else {
        taller.desencolar();
        if (!taller.vacio()) {
        taller.ojear();
        }
        actualizarTaller();
    }
}

// Inicializar el estado del taller
actualizarTaller();
