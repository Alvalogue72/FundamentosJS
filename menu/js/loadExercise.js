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
        case 'almacena-cookies':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">CRUD con Cookies</h5>
                    <h6 class="card-subtitle mb-2"><i>Almacenamiento</i></h6>
                    <p class="card-text fs-8">Crud con Cookies para guardar datos clave/valor en una tabla. Además de poder actualizar y borrar estos datos.</p>
                    <div class="text-center">
                        <a href="./almacena/almacena-cookies/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'almacena-session':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">CRUD con SessionStorage</h5>
                    <h6 class="card-subtitle mb-2"><i>Almacenamiento</i></h6>
                    <p class="card-text fs-8">Crud con SessionStorage para guardar datos en una tabla. Además de poder eliminar y actualizar estos datos.</p>
                    <div class="text-center">
                        <a href="./almacena/almacena-session/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'almacena-local':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">CRUD con LocalStorage</h5>
                    <h6 class="card-subtitle mb-2"><i>Almacenamiento</i></h6>
                    <p class="card-text fs-8">Crud con LocalStorage para guardar datos en una tabla. Además de poder eliminar y actualizar estos datos.</p>
                    <div class="text-center">
                        <a href="./almacena/almacena-local/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'almacena-indexedDB':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">CRUD con IndexedDB</h5>
                    <h6 class="card-subtitle mb-2"><i>Almacenamiento</i></h6>
                    <p class="card-text fs-8">Crud con IndexedDB para almacenar datos en una tabla y poder tanto actualizarlos como eliminarlos. Además de tener la posibilidad de generar datos traídos desde una api.</p>
                    <div class="text-center">
                        <a href="./almacena/almacena-indexedDB/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'colada':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">Colada con Pila</h5>
                    <h6 class="card-subtitle mb-2"><i>Estructuras</i></h6>
                    <p class="card-text fs-8">Cesta de colada utilizando una Pila siguiendo la lógica Last In, First Out. Pulsar en los botones para agregar y eliminar prendas.</p>
                    <div class="text-center">
                        <a href="./estructuras/colada/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'taller':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">Taller con Cola</h5>
                    <h6 class="card-subtitle mb-2"><i>Estructuras</i></h6>
                    <p class="card-text fs-8">Espera de un taller utilizando una Cola sigueindo la lógica First In, First Out. Pulsar en los botones para recibir y atender vehículos.</p>
                    <div class="text-center">
                        <a href="./estructuras/taller/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
        case 'tareas':
            mainContent.innerHTML = `<div class="w-18rem zoom2 bg-blur p-3 border rounded">
                  <div class="card-body">
                    <h5 class="card-title">Tareas con Lista</h5>
                    <h6 class="card-subtitle mb-2"><i>Estructuras</i></h6>
                    <p class="card-text fs-8">Lista de tareas con botones añadir y eliminar aleatoriamente una tarea. Y lista de tareas con prioridades eliminadas por dicho orden.</p>
                    <div class="text-center">
                        <a href="./estructuras/tareas/index.html" class="text-decoration-none button d-inline-block">Solución</a>
                    </div>
                  </div>
                </div>`
                break;
                default:
    };
};


            