const generateButton = document.getElementById("generate-matrices");
const randomValuesButton = document.getElementById("random-values");
const operationButtons = document.querySelectorAll(".operation-button");
const logoutButton = document.getElementById("logout");

const randomOperationButton = document.getElementById("random-operation");
const fastOperationButton = document.getElementById("fast-operation");
const slowOperationButton = document.getElementById("slow-operation");
const stopOperationButton = document.getElementById("stop-operation");

let operationInterval = null;
let operationSpeed = 1000; // Velocidad inicial

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMatrix(size, min, max) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = getRandomInt(min, max);
        }
    }
    return matrix;
}

function displayMatrix(matrix, elementId) {
    const table = document.getElementById(elementId);
    table.innerHTML = '';
    matrix.forEach(row => {
        const rowElement = document.createElement('tr');
        row.forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            rowElement.appendChild(cell);
        });
        table.appendChild(rowElement);
    });
}

function generateMatrices() {
    const size = parseInt(document.getElementById('matrix-size').value);
    const min = parseInt(document.getElementById('min-value').value);
    const max = parseInt(document.getElementById('max-value').value);
    
    window.matrixA = generateMatrix(size, min, max);
    window.matrixB = generateMatrix(size, min, max);
    
    displayMatrix(window.matrixA, 'matrixA');
    displayMatrix(window.matrixB, 'matrixB');
}

function addMatrices(matrixA, matrixB) {
    return matrixA.map((row, i) =>
        row.map((val, j) => val + matrixB[i][j])
    );
}

function subtractMatrices(matrixA, matrixB) {
    return matrixA.map((row, i) =>
        row.map((val, j) => val - matrixB[i][j])
    );
}

function multiplyMatrices(matrixA, matrixB) {
    const size = matrixA.length;
    const result = Array.from({ length: size }, () => Array(size).fill(0));
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return result;
}

function operateMatrices(operation) {
    let resultMatrix;
    switch (operation) {
        case 'sum':
            resultMatrix = addMatrices(window.matrixA, window.matrixB);
            break;
        case 'subtract':
            resultMatrix = subtractMatrices(window.matrixA, window.matrixB);
            break;
        case 'multiply':
            resultMatrix = multiplyMatrices(window.matrixA, window.matrixB);
            break;
    }
    displayMatrix(resultMatrix, 'resultMatrix');
}

// Función para establecer valores aleatorios en los campos de entrada
function setRandomValues() {
    document.getElementById('matrix-size').value = getRandomInt(2, 5); // Tamaño entre 2x2 y 5x5
    document.getElementById('min-value').value = getRandomInt(-10, 0); // Valor mínimo entre -10 y 0
    document.getElementById('max-value').value = getRandomInt(1, 10);  // Valor máximo entre 1 y 10
}

// Event listeners
generateButton.addEventListener("click", generateMatrices);
randomValuesButton.addEventListener("click", setRandomValues);

operationButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const operation = event.target.getAttribute("data-operation");
        operateMatrices(operation);
    });
});


// Función para realizar una operación aleatoria y mostrar el resultado
function randomOperation() {
    generateMatrices(); // Generar matrices aleatorias cada vez
    const operations = ['sum', 'subtract', 'multiply'];
    const randomOp = operations[Math.floor(Math.random() * operations.length)];

    let resultMatrix;
    switch (randomOp) {
        case 'sum':
            resultMatrix = addMatrices(window.matrixA, window.matrixB);
            break;
        case 'subtract':
            resultMatrix = subtractMatrices(window.matrixA, window.matrixB);
            break;
        case 'multiply':
            resultMatrix = multiplyMatrices(window.matrixA, window.matrixB);
            break;
    }
    displayMatrix(resultMatrix, 'resultMatrix');
}

// Función para iniciar la operación automática con una velocidad dada
function startAutomaticOperation() {
    stopAutomaticOperation(); // Detener cualquier operación previa
    operationInterval = setInterval(randomOperation, operationSpeed);
}

// Función para detener la operación automática
function stopAutomaticOperation() {
    if (operationInterval) {
        clearInterval(operationInterval);
        operationInterval = null;
    }
}

// Función para ajustar la velocidad de las operaciones automáticas
function adjustSpeed(factor) {
    operationSpeed = Math.max(200, operationSpeed + factor); // Asegura un mínimo de 200 ms
    if (operationInterval) {
        startAutomaticOperation(); // Reiniciar con la nueva velocidad
    }
}

randomOperationButton.addEventListener("click", startAutomaticOperation);
    fastOperationButton.addEventListener("click", () => adjustSpeed(-200)); // Aumentar velocidad
    slowOperationButton.addEventListener("click", () => adjustSpeed(200)); // Disminuir velocidad
    stopOperationButton.addEventListener("click", stopAutomaticOperation);


// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 