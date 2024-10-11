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
                        <a href="./mini-calculadora/index.html" class="text-decoration-none button d-inline-block">Solución</a>
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
                        <a href="./cambio-base/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
                default:
    };
};


            