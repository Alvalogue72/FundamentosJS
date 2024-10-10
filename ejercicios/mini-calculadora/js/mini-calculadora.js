function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result = 0;

    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            result = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Error (División por 0)';
            break;
        case 'int':
            result = `Parte entera de ${num1}: ${Math.trunc(num1)}`;
            break;
        case 'dec':
            result = `Parte decimal de ${num1}: ${(num1 % 1).toFixed(2)}`;
            break;
        case 'fact1':
            result = `Factorial de ${num1}: ${factorial(Math.abs(Math.floor(num1)))}`;
            break;
        default:
            result = '--';
    }

    document.getElementById('resultValue').textContent = result;
}

// Función para calcular el factorial
function factorial(n) {
    if (n < 0) return 'No definido';
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}