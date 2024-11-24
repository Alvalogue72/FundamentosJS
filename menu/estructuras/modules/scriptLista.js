"use strict";

import { TAREAS, MAX_TAREAS, tareas, tareasDiv } from "../tareas/main.js";
import { generaAleatorioEnteros } from "../modules/aleatorio.js";

// Función para actualizar el estado de las tareas en el DOM
export function actualizarTareas() {
    tareasDiv.innerHTML = ""; // Limpia el contenedor

    if (tareas.vacio()) {
        tareasDiv.innerHTML = "<p>NO HAY MÁS TAREAS QUE HACER</p>";
        return;
    }

    // Mostrar tareas normales
    const tareasLista = document.createElement("div");
    tareas.devolver().forEach((tarea) => {
        const tareaElem = document.createElement("p");
        tareaElem.textContent = `${tarea}`;
        tareasLista.appendChild(tareaElem);
    });
    tareasDiv.appendChild(tareasLista);
}

// Función para añadir una tarea normal
export function anadoTarea() {
    if (tareas.tamano() >= MAX_TAREAS) {
        alert("DEBERÍAS EMPEZAR A HACER LAS TAREAS");
        return;
    }

    const indiceAleatorio = generaAleatorioEnteros(0, TAREAS.length - 1);
    const tareaAleatoria = TAREAS[indiceAleatorio];

    const posicionAleatoria = generaAleatorioEnteros(0, tareas.tamano());
    tareas.enlistar(tareaAleatoria, posicionAleatoria);
    actualizarTareas();
}

// Función para eliminar una tarea normal
export function eliminoTarea() {
    if (tareas.vacio()) {
        alert("NO HAY MÁS TAREAS QUE HACER");
        return;
    }

    const indiceAleatorio = generaAleatorioEnteros(0, tareas.tamano() - 1);
    const eliminada = tareas.desenlistar(indiceAleatorio)[0]; // Extraer el elemento eliminado
    alert(`Tarea eliminada: ${eliminada}`);
    console.log(eliminada);
    console.log(tareas);
    actualizarTareas();
}
