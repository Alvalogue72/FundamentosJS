"use strict";

import { TAREAS, MAX_TAREAS, tareasPrioritarias, tareasPrioridadDiv } from "../tareas/main.js";
import { generaAleatorioEnteros } from "../modules/aleatorio.js";

// Función para actualizar el estado de las tareas en el DOM
export function actualizarTareasPrioridad() {
    tareasPrioridadDiv.innerHTML = ""; // Limpia el contenedor
    if (tareasPrioritarias.vacio()) {
        tareasPrioridadDiv.innerHTML = "<p>NO HAY MÁS TAREAS QUE HACER</p>";
        return;
    }

    // Mostrar tareas prioritarias
    const tareasPriorLista = document.createElement("div");
    tareasPrioritarias.devolver().forEach((tarea) => {
        const tareaElem = document.createElement("p");
        tareaElem.textContent = `${tarea.tarea} PR: ${tarea.prioridad}`;
        tareasPriorLista.appendChild(tareaElem);
    });
    tareasPrioridadDiv.appendChild(tareasPriorLista);
}

// Función para añadir una tarea con prioridad
export function anadoTareaPrioritaria() {
    if (tareasPrioritarias.tamano() >= MAX_TAREAS) {
        alert("NO PUEDES AGREGAR MÁS TAREAS CON PRIORIDAD");
        return;
    }

    const indiceAleatorio = generaAleatorioEnteros(0, TAREAS.length - 1);
    const tareaAleatoria = TAREAS[indiceAleatorio];
    const prioridad = generaAleatorioEnteros(0, 9);

    const tareaPrioritaria = { tarea: tareaAleatoria, prioridad };
    tareasPrioritarias.enlistar(tareaPrioritaria, tareasPrioritarias.tamano());
    actualizarTareasPrioridad();
}

// Función para eliminar una tarea con prioridad
export function eliminoTareaPrioritaria() {
    if (tareasPrioritarias.vacio()) {
        alert("NO HAY MÁS TAREAS PRIORITARIAS QUE HACER");
        return;
    }

    // Obtener todas las tareas
    const tareas = tareasPrioritarias.devolver();

    // Encontrar la tarea con menor prioridad
    let menorPrioridad = tareas[0].prioridad; // Suponemos que la lista tiene al menos un elemento
    let indexMenorPrioridad = 0;

    for (let i = 1; i < tareas.length; i++) {
        if (tareas[i].prioridad < menorPrioridad) {
            menorPrioridad = tareas[i].prioridad;
            indexMenorPrioridad = i;
        }
    }

    // Eliminar la tarea con menor prioridad
    const eliminadas = tareasPrioritarias.desenlistar(indexMenorPrioridad); // splice devuelve un array
    const eliminada = eliminadas[0]; // Acceder al primer elemento del array eliminado

    // Informar al usuario
    if (eliminada && eliminada.tarea) {
        alert(`Tarea con menor prioridad eliminada: ${eliminada.tarea} (Prioridad: ${eliminada.prioridad})`);
    }

    actualizarTareasPrioridad();
}

