"use strict";

function eraseCookie(name) {
    if (navigator.cookieEnabled) {
        document.cookie = `${encodeURIComponent(name)}=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; Secure;`;
    } else {
        console.error("Las cookies están desactivadas en este navegador.");
    }
}

function deleteCookie(name) {
    // Crear una fecha en el pasado para que la cookie expire
    let expirationDate = new Date(0); // Fecha de 1970 (pasado)

    // Generar la cookie de eliminación con los parámetros necesarios
    document.cookie = encodeURIComponent(name) + "=; expires=" + expirationDate.toUTCString() + "; path=/; SameSite=Strict; Secure";

    console.log(`Cookie '${name}' eliminada.`); // Confirmación en consola
}

