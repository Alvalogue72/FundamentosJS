function borrarDato(index) {
    const data = JSON.parse(localStorage.getItem('crudData')) || [];
    data.splice(index, 1);

    localStorage.setItem('crudData', JSON.stringify(data));
    mostrarDatos();
}