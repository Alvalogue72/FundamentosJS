"use strict";

import { Lista } from "../classes/Lista.js";
import { actualizarTareas, anadoTarea, eliminoTarea } from "../modules/scriptLista.js";
import { anadoTareaPrioritaria, eliminoTareaPrioritaria, actualizarTareasPrioridad } from "../modules/scriptListaPrioridad.js";

// Constantes y elementos del DOM
export const MAX_TAREAS = 10;
export const tareas = new Lista();
export const tareasPrioritarias = new Lista();

// Lista predefinida de tareas con emoticonos
export const TAREAS = [
    "📖 Leer un libro",
    "🛒 Hacer la compra",
    "🏋️‍♂️ Ir al gimnasio",
    "🍳 Cocinar la cena",
    "🧹 Limpiar la casa",
    "🎮 Jugar videojuegos",
    "✍️ Escribir un diario",
    "💻 Programar",
    "📞 Llamar a un amigo",
];

// Elementos del DOM
export const tareasDiv = document.getElementById("tareasDiv");
export const tareasPrioridadDiv = document.getElementById("tareasPrioridadDiv");

// Enlace de botones del HTML con las funciones correspondientes
document.getElementById("addTask").addEventListener("click", anadoTarea);
document.getElementById("deleteTask").addEventListener("click", eliminoTarea);
document.getElementById("addTaskPriority").addEventListener("click", anadoTareaPrioritaria);
document.getElementById("deleteTaskPriority").addEventListener("click", eliminoTareaPrioritaria);

actualizarTareas();
actualizarTareasPrioridad();

const logoutButton = document.getElementById("logout");
// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 