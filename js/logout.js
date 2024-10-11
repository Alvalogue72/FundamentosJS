 const logout = document.getElementById("logout");

logout.addEventListener("click", function(event) {
    event.preventDefault();

    deleteCookie("loggedIn");
    setTimeout(() => { checkPath();}, 500);
    
}); 

function checkPath() {

    const basicPath = window.location.pathname.split('/');
    const positionDirectory = basicPath.indexOf("FundamentosJS");
    const loginPath = basicPath.slice(0, positionDirectory + 1).join('/') + '/index.html';

    window.location.href = loginPath;
}

if (!(getCookie("loggedIn") === "true")) {
    const basicPath = window.location.pathname.split('/');
    const positionDirectory = basicPath.indexOf("FundamentosJS");
    const loginPath = basicPath.slice(0, positionDirectory + 1).join('/') + '/index.html';

    window.location.href = loginPath;
}