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

document.getElementById("ope-matrices").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("ope-matrices");
});

document.getElementById("almacena-cookies").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("almacena-cookies");
});

document.getElementById("almacena-session").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("almacena-session");
});

document.getElementById("almacena-local").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("almacena-local");
});

document.getElementById("almacena-indexedDB").addEventListener("click", function (event) {
    event.preventDefault();
    loadExercise("almacena-indexedDB");
});