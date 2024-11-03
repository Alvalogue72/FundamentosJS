const mainContent = document.getElementById("mainContent");

function loadExercise(exercise) {

    switch (exercise) {
        case 'mini-calculadora':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">Mini-Calculadora</h5>
                    <h6 class="card-subtitle mb-2"><i>Number</i></h6>
                    <p class="card-text fs-8">Mini-Calculadora que opera con dos números introducidos por el usuario.</p>
                    <div class="text-center">
                        <a href="./number/mini-calculadora/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'cambio-base':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">Conversor de Bases</h5>
                    <h6 class="card-subtitle mb-2"><i>Number</i></h6>
                    <p class="card-text fs-8">Convierte un número decimal ingresado por el usuario a una de las bases elegidas.</p>
                    <div class="text-center">
                        <a href="./number/cambio-base/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'mod-texto':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">Modificar Texto</h5>
                    <h6 class="card-subtitle mb-2"><i>String</i></h6>
                    <p class="card-text fs-8">Transforma el texto en una de las formas elegidas, incluye también un generador aleatorio, con aumento y disminución de velocidad.</p>
                    <div class="text-center">
                        <a href="./string/mod-texto/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'mod-texto-api':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">Modificar Texto - API</h5>
                    <h6 class="card-subtitle mb-2"><i>String</i></h6>
                    <p class="card-text fs-8">Transforma el texto generado desde una api de base de datos de deportes en una de las formas elegidas, incluye también un generador aleatorio, con aumento y disminución de velocidad.</p>
                    <div class="text-center">
                        <a href="./string/mod-texto-api/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'ope-matrices':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">Operaciones con Matrices</h5>
                    <h6 class="card-subtitle mb-2"><i>Arrays</i></h6>
                    <p class="card-text fs-8">Realiza operaciones básicas con matrices cuadradas generadas aleatoriamente. Se incluyen suma, resta y multiplicación de matrices. Además, el programa permitirá realizar pruebas automáticas repetidas.</p>
                    <div class="text-center">
                        <a href="./arrays/ope-matrices/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
                default:
    };
};


            