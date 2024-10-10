const mainContent = document.getElementById("mainContent");

function loadExercise(exercise) {

    switch (exercise) {
        case 'mini-calculadora':
            mainContent.innerHTML = `<div class="card w-18rem zoom2">
                  <div class="card-body">
                    <h5 class="card-title">Mini-Calculadora</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">Descripción del ejercicio 01</p>
                    <div class="text-center">
                        <a href="./mini-calculadora/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'cambio-base':
            mainContent.innerHTML = `<div class="card w-18rem zoom2">
                  <div class="card-body">
                    <h5 class="card-title">Cambio de base</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">Descripción del ejercicio 02</p>
                    <div class="text-center">
                        <a href="./ejercicios/ejer02/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
                default:
    };
};


            