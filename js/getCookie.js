function getCookie(name) {
    if (navigator.cookieEnabled) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            let [cookieName, cookieValue] = cookie.split("=");
            if (decodeURIComponent(cookieName) === name) {
                return decodeURIComponent(cookieValue);
            }
        }
    } else {
        console.error("Las cookies están desactivadas en este navegador.");
    }
    return null;
}