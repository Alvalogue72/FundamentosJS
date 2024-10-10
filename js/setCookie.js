"use strict"

function setCookie(name, value, minute) {

    if (navigator.cookieEnabled) {

        const date = new Date();
        const expirationTime = date.getTime() + minute * 60 * 1000;
        date.setTime(expirationTime);
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";path=/;SameSite=Strict;Secure";
        
    } else {
        console.error("Las cookies están desactivadas en este navegador.")
    }
    
}