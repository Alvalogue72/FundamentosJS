'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "Los datos almacenados son: <br />";
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD);
        canalBD.getAll().onsuccess = function (event) {
            let registros = event.target.result;
            console.log(registros);
            for (let registro of registros) {
                let linea = document.createElement("tr"), 
                    campoNombre = document.createElement("td"), 
                    campoEspecie = document.createElement("td"),
                    campoImagen = document.createElement("td"), 
                    campoBorrar = document.createElement("td"),
                    campoActualizar = document.createElement("td"), 
                    
                    botonBorrar = document.createElement("button"), // Botón para borrar
                    botonActualizar = document.createElement("button"); // Botón para actualizar
                
                campoNombre.innerHTML = registro.name; // escribo el nombre contenido en el array
                campoEspecie.innerHTML = registro.species; // escribo la especie contenida en el array

                // Mostrar la imagen del personaje
                let img = document.createElement("img");
                img.src = registro.image; // asignar la URL de la imagen
                img.alt = registro.name; // asignar el nombre como alt
                img.width = 50; // tamaño de la imagen (ajustable)

                campoImagen.appendChild(img); // agregar la imagen en la celda
                
                // BOTÓN BORRAR
                botonBorrar.classList.add("btns", "button-delete");
                botonBorrar.innerHTML = '<i class="fas fa-trash-alt"></i>';
                botonBorrar.addEventListener('click', function () { 
                    borrarDato(registro.id); 
                });

                 // BOTÓN ACTUALIZAR
                botonActualizar.classList.add("btns", "button-update");
                botonActualizar.innerHTML = '<i class="fas fa-edit"></i>';
                botonActualizar.addEventListener('click', function () {
                    // Cargar los valores en los inputs para editar
                    document.getElementById("name").value = registro.name;
                    document.getElementById("species").value = registro.species;
                    document.getElementById("image").value = registro.image;
                    borrarDato(registro.id); // Elimina el dato actual para poder actualizarlo
                });

                // DOM
                campoBorrar.appendChild(botonBorrar); 
                campoActualizar.appendChild(botonActualizar); 

                linea.appendChild(campoNombre); 
                linea.appendChild(campoEspecie);
                linea.appendChild(campoImagen); 
                linea.appendChild(campoBorrar); 
                linea.appendChild(campoActualizar); 

                cuerpo.appendChild(linea); 
            }
        }
    };
}