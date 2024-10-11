"use strict";

function deleteCookie(name) {
    let expirationDate = new Date(0);
    document.cookie = encodeURIComponent(name) + "=; expires=" + expirationDate.toUTCString() + "; path=/; SameSite=Strict; Secure";
}

