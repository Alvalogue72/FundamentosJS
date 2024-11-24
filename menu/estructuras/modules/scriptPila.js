"use strict";

import { PRENDAS, CESTA_COLADA, pilaColada, cestaDiv } from '../colada/main.js';
import { generaAleatorioEnteros } from '../modules/aleatorio.js'; 

// Función para mostrar el estado de la pila en el DOM
export function actualizarCesta() {
    cestaDiv.innerHTML = ""; // Limpia el contenedor
    if (pilaColada.vacio()) {
        cestaDiv.innerHTML = "<p>NO HAY MÁS ROPA QUE LAVAR</p>";
    } else {
        pilaColada.devolver().forEach((prenda) => {
            const prendaElem = document.createElement("p");
            prendaElem.textContent = `${prenda}`;
            cestaDiv.insertBefore(prendaElem, cestaDiv.firstChild);
        });
    }
}

// Función para añadir prendas aleatorias
export function introduzco() {
    if (pilaColada.tamano() >= CESTA_COLADA) {
        alert("DEBERÍAS EMPEZAR A LAVAR LA ROPA");
        return;
    }

    // Generar índice aleatorio y seleccionar una prenda
    const indiceAleatorio = generaAleatorioEnteros(0, PRENDAS.length - 1);
    const prendaAleatoria = PRENDAS[indiceAleatorio];

    pilaColada.apilar(prendaAleatoria);
    actualizarCesta();
}

// Función para retirar prendas
export function obtengo() {
    if (pilaColada.vacio()) {
        alert("NO HAY MÁS ROPA QUE LAVAR");
    } else {
        pilaColada.desapilar();
        actualizarCesta();
    }
}

actualizarCesta();
