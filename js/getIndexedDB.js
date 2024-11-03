async function getIndexedDB(name) {
    if (!db) {
        await openDatabase();
    }
    
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['miAlmacen'], 'readonly');
        const store = transaction.objectStore('miAlmacen');
        const request = store.get(name);

        request.onsuccess = function(event) {
            if (request.result) {
                console.log(`IndexedDB: Objeto recuperado`, request.result);
                const value = decodeURIComponent(request.result.valor);
                console.log(`IndexedDB: Recuperado ${name}=${value}`);
                resolve(value);
            } else {
                console.log(`IndexedDB: No se encontró el valor para ${name}`);
                resolve(null);
            }
        };

        request.onerror = function(event) {
            console.error('IndexedDB: Error al obtener el dato', event);
            reject(event);
        };
    });
}
