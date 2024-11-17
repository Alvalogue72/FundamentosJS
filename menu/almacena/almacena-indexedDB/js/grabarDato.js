'use strict';

function grabarDato(name, species, image) {
    console.log("Grabando datos...");
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        canalBD.put({ name, species, image });
    };
    document.getElementById('name').value = '';
    document.getElementById('species').value = '';
    document.getElementById('image').value = '';
    mostrarDatos();
}