// Función para actualizar el resultado en el DOM
function updateResult(value) {
    const resultValueElement = document.getElementById("resultValue");
    resultValueElement.textContent = value;
}

// Función para obtener el valor de los operandos
function getOperands() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
}

// Función para calcular el factorial
function factorial(n) {
    if (n < 0) return "NaN"; // El factorial no está definido para números negativos
    return (n === 0 || n === 1)? 1 : n * factorial(n - 1);
}

// Evento para la suma
document.getElementById("btn-add").addEventListener("click", function() {
    const { num1, num2 } = getOperands();
    const result = num1 + num2;
    updateResult(result);
});

// Evento para la resta
document.getElementById("btn-sub").addEventListener("click", function() {
    const { num1, num2 } = getOperands();
    const result = num1 - num2;
    updateResult(result);
});

// Evento para la multiplicación
document.getElementById("btn-mul").addEventListener("click", function() {
    const { num1, num2 } = getOperands();
    const result = num1 * num2;
    updateResult(result);
});

// Evento para la división
document.getElementById("btn-div").addEventListener("click", function() {
    const { num1, num2 } = getOperands();
    if (num2 === 0) {
        updateResult("Error: División por cero");
    } else {
        const result = num1 / num2;
        updateResult(result);
    }
});

// Evento para la parte entera (parte antes del punto decimal) del primer número
document.getElementById("btn-int").addEventListener("click", function() {
    const { num1 } = getOperands();
    const result = Math.trunc(num1); // Devuelve solo la parte entera
    updateResult(result);
});

// Evento para la parte decimal (parte después del punto decimal) del primer número
document.getElementById("btn-dec").addEventListener("click", function() {
    const { num1 } = getOperands();
    const decimalPart = num1 - Math.trunc(num1);
    const result = decimalPart.toFixed(2); // Mantiene 2 decimales para mayor precisión
    updateResult(result);
});

// Evento para el factorial del primer número
document.getElementById("btn-fact1").addEventListener("click", function() {
    const { num1 } = getOperands();
    const result = factorial(num1);
    updateResult(result);
});
