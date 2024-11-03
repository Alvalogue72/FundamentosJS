"use strict";

async function deleteIndexedDB(name) {

    if (!db) {
        await openDatabase();
    }

    const transaction = db.transaction(['miAlmacen'], 'readwrite');
    const almacen = transaction.objectStore('miAlmacen');
    const request = almacen.delete(name);

    request.onsuccess = function() {
        console.log(`IndexedDB: Eliminada la clave ${name}`);
    };

    request.onerror = function(event) {
        console.error('IndexedDB: Error al eliminar el dato', event);
    };
}