'use strict';

function mostrarDatos() {
    console.log("Mostrando datos desde sessionStorage...");
    const cuerpo = document.getElementById("cuerpo");

    // Obtener los datos de sessionStorage
    const data = JSON.parse(sessionStorage.getItem('crudData')) || [];

    // Limpiar el contenido existente de la tabla
    while (cuerpo.firstChild) {
        cuerpo.removeChild(cuerpo.firstChild);
    }

    // Si no hay datos, mostrar un mensajes
    if (data.length === 0) {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }

    // Generar las filas para cada elemento
    data.forEach((item, index) => {
        let linea = document.createElement("tr"), 
            campoNombre = document.createElement("td"), 
            campoCiudad = document.createElement("td"), 
            campoPais = document.createElement("td"), 
            campoBorrar = document.createElement("td"), // Celda para el botón 'borrar'
            campoActualizar = document.createElement("td"), // Celda para el botón 'actualizar'

            botonBorrar = document.createElement("button"), // Botón para borrar
            botonActualizar = document.createElement("button"); // Botón para actualizar

        // DATOS
        campoNombre.textContent = item.name; // Escribo el nombre en la celda
        campoCiudad.textContent = item.ciudad; // Escribo la ciudad en la celda
        campoPais.textContent = item.pais; // Escribo el pais en la celda

        // BOTÓN BORRAR
        botonBorrar.classList.add("btns", "button-delete");
        botonBorrar.innerHTML = '<i class="fas fa-trash-alt"></i>';
        botonBorrar.addEventListener('click', function () {
            borrarDato(index); // Elimina el dato en la posición específica
        });

        // BOTÓN ACTUALIZAR
        botonActualizar.classList.add("btns", "button-update");
        botonActualizar.innerHTML = '<i class="fas fa-edit"></i>';
        botonActualizar.addEventListener('click', function () {
            // Cargar los valores en los inputs para editar
            document.getElementById("name").value = item.name;
            document.getElementById("ciudad").value = item.ciudad;
            document.getElementById("pais").value = item.pais;
            borrarDato(index); // Elimina el dato actual para poder actualizarlo
        });

        // DOM
        campoBorrar.appendChild(botonBorrar); 
        campoActualizar.appendChild(botonActualizar); 

        linea.appendChild(campoNombre); 
        linea.appendChild(campoCiudad); 
        linea.appendChild(campoPais);
        linea.appendChild(campoBorrar); 
        linea.appendChild(campoActualizar); 

        cuerpo.appendChild(linea); // Agrego la fila al cuerpo de la tabla
    });
}
