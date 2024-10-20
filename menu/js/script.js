"use strict"

document.getElementById("mini-calculadora").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("mini-calculadora");
});

document.getElementById("cambio-base").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("cambio-base");
});

document.getElementById("mod-texto").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("mod-texto");
});

document.getElementById("mod-texto-api").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("mod-texto-api");
});