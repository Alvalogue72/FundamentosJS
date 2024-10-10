"use strict"

document.getElementById("mini-calculadora").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("mini-calculadora");
});

document.getElementById("cambio-base").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("cambio-base");
});