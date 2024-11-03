const numeroInput = document.getElementById('numero');
const resultSpan = document.getElementById('result');


document.getElementById('btn-binario').addEventListener('click', () => convertir(2));
document.getElementById('btn-octal').addEventListener('click', () => convertir(8));
document.getElementById('btn-hexadecimal').addEventListener('click', () => convertir(16));

function convertir(base) {
    const numero = parseInt(numeroInput.value);

    // Validar si es un número válido
    if (isNaN(numero)) {
        resultSpan.textContent = "Introduce un número válido.";
        return;
    }

    // Convertimos el número a la base correspondiente
    let result = numero.toString(base);

    // Convertir a mayúsculas en base hexadecimal
    if (base === 16) {
        result = result.toUpperCase();
    }

    resultSpan.textContent = result;
}

const logoutButton = document.getElementById("logout");

// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 
