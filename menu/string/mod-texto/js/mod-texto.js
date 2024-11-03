const textarea = document.getElementById("inputText");
const btnUpperAll = document.getElementById("btnUpperAll");
const btnLowerAll = document.getElementById("btnLowerAll");
const btnUpperFirstLetter = document.getElementById("btnUpperFirstLetter");
const btnUpperLastLetter = document.getElementById("btnUpperLastLetter");
const btnLowerFirstLetter = document.getElementById("btnLowerFirstLetter");
const btnLowerLastLetter = document.getElementById("btnLowerLastLetter");
const btnUpperVocals = document.getElementById("btnUpperVocals");
const btnLowerVocals = document.getElementById("btnLowerVocals");
const btnUpperConsonant = document.getElementById("btnUpperConsonant");
const btnLowerConsonant = document.getElementById("btnLowerConsonant");
const btnRandom = document.getElementById("btnRandom");
const btnStop = document.getElementById("btnStop");
const btnFast = document.getElementById("btnFast");
const btnSlow = document.getElementById("btnSlow");

// Funciones de modificación de texto
function toUpperAll() {
    textarea.value = textarea.value.toUpperCase();
}

function toLowerAll() {
    textarea.value = textarea.value.toLowerCase();
}

function capitalizeFirstLetter() {
    textarea.value = textarea.value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function capitalizeLastLetter() {
    textarea.value = textarea.value
        .split(' ')
        .map(word => word.slice(0, -1) + word.charAt(word.length - 1).toUpperCase())
        .join(' ');
}

function lowerFirstLetter() {
    textarea.value = textarea.value
        .split(' ')
        .map(word => word.charAt(0).toLowerCase() + word.slice(1))
        .join(' ');
}

function lowerLastLetter() {
    textarea.value = textarea.value
        .split(' ')
        .map(word => word.slice(0, -1) + word.charAt(word.length - 1).toLowerCase())
        .join(' ');
}

function upperVocals() {
    textarea.value = textarea.value.replace(/[aeiouáéíóú]/g, (vocal) => vocal.toUpperCase());
}

function lowerVocals() {
    textarea.value = textarea.value.replace(/[AEIOUÁÉÍÓÚ]/g, (vocal) => vocal.toLowerCase());
}

function upperConsonants() {
    textarea.value = textarea.value.replace(/[^aeiouáéíóú\s]/gi, (cons) => cons.toUpperCase());
}

function lowerConsonants() {
    textarea.value = textarea.value.replace(/[^aeiouáéíóú\s]/gi, (cons) => cons.toLowerCase());
}

function getRandomFunction() {
    const functions = [
        toUpperAll,
        toLowerAll,
        capitalizeFirstLetter,
        capitalizeLastLetter,
        lowerFirstLetter,
        lowerLastLetter,
        upperVocals,
        lowerVocals,
        upperConsonants,
        lowerConsonants
    ];

    const randomIndex = Math.floor(Math.random() * functions.length);
    return functions[randomIndex];
}

let intervalId = null; // Variable para almacenar el identificador del intervalo
let intervalTime = 500; // Tiempo inicial del intervalo (500ms)
let isRunning = false;

function randomFuction() {
    if (isRunning) return; // Evitar que se inicien múltiples intervalos simultáneamente
    isRunning = true;
    intervalId = setInterval(() => {
        const randomFunc = getRandomFunction();
        randomFunc(); // Ejecuta una función aleatoria
    }, intervalTime); // Usar el tiempo actual del intervalo
}

function stopRandomFunction() {
    clearInterval(intervalId); // Detener el intervalo
    isRunning = false; // Marcar que no está corriendo
}

function increaseSpeed() {
    if (intervalTime > 100) { // Limitar la velocidad para que no sea demasiado rápida
        intervalTime -= 100; // Reducir el intervalo (más rápido)
        restartRandomFunction(); // Reiniciar el intervalo con la nueva velocidad
    }
}

function decreaseSpeed() {
    intervalTime += 100; // Aumentar el intervalo (más lento)
    restartRandomFunction(); // Reiniciar el intervalo con la nueva velocidad
}

function restartRandomFunction() {
    if (isRunning) {
        stopRandomFunction(); // Detener el intervalo si ya está corriendo
        randomFuction(); // Reiniciar el intervalo con el nuevo tiempo
    }
}
// Asignar los eventos a los botones
btnUpperAll.addEventListener("click", toUpperAll);
btnLowerAll.addEventListener("click", toLowerAll);
btnUpperFirstLetter.addEventListener("click", capitalizeFirstLetter);
btnUpperLastLetter.addEventListener("click", capitalizeLastLetter);
btnLowerFirstLetter.addEventListener("click", lowerFirstLetter);
btnLowerLastLetter.addEventListener("click", lowerLastLetter);
btnUpperVocals.addEventListener("click", upperVocals);
btnLowerVocals.addEventListener("click", lowerVocals);
btnUpperConsonant.addEventListener("click", upperConsonants);
btnLowerConsonant.addEventListener("click", lowerConsonants);
btnRandom.addEventListener("click", randomFuction);
btnStop.addEventListener("click", stopRandomFunction);
btnFast.addEventListener("click", increaseSpeed);
btnSlow.addEventListener("click", decreaseSpeed);

const logoutButton = document.getElementById("logout");

// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 
