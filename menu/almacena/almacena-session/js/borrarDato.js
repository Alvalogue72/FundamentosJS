function borrarDato(index) {
    const data = JSON.parse(sessionStorage.getItem('crudData')) || [];
    data.splice(index, 1);

    sessionStorage.setItem('crudData', JSON.stringify(data));
    mostrarDatos();
}
