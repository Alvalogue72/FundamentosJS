// Función para obtener el valor de los operandos
function getOperands() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
}

// Función para calcular el factorial
function factorial(n) {
    if (n < 0) return "NaN";
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

// Evento para la parte entera
document.getElementById("btn-int").addEventListener("click", function() {
    const { num1 } = getOperands();
    const result = Math.trunc(num1);
    updateResult(result);
});

// Evento para la parte decimal
document.getElementById("btn-dec").addEventListener("click", function() {
    const { num1 } = getOperands();
    let result = parseFloat("0." + num1.toString().split(".")[1]);
    updateResult(result);
});

// Evento para el factorial del primer número
document.getElementById("btn-fact1").addEventListener("click", function() {
    const { num1 } = getOperands();
    const result = factorial(num1);
    updateResult(result);
});

function updateResult(value) {
    const resultValueElement = document.getElementById("resultValue");
    resultValueElement.textContent = value;
}

const logoutButton = document.getElementById("logout");

// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 