const numeroInput = document.getElementById('numero');
const resultadoSpan = document.getElementById('resultado');

// Asignamos eventos directamente a cada botón
document.getElementById('btn-binario').addEventListener('click', () => convertir(2));
document.getElementById('btn-octal').addEventListener('click', () => convertir(8));
document.getElementById('btn-hexadecimal').addEventListener('click', () => convertir(16));

function convertir(base) {
    const numero = parseInt(numeroInput.value);

    // Validar si la entrada es un número válido
    if (isNaN(numero)) {
        resultadoSpan.textContent = "Introduce un número válido.";
        return;
    }

    // Convertimos el número a la base correspondiente
    let resultado = numero.toString(base);

    // Convertimos a mayúsculas si la base es hexadecimal
    if (base === 16) {
        resultado = resultado.toUpperCase();
    }

    // Mostramos el resultado en el span correspondiente
    resultadoSpan.textContent = resultado;
}
