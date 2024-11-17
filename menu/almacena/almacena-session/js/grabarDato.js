function grabarDato(name, ciudad, pais) {
        if (name === '' || ciudad === '' || pais === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
    
        const data = JSON.parse(sessionStorage.getItem('crudData')) || [];
        data.push({ name, ciudad, pais });
    
        sessionStorage.setItem('crudData', JSON.stringify(data));
        document.getElementById('name').value = '';
        document.getElementById('ciudad').value = '';
        document.getElementById('pais').value = '';
        mostrarDatos();
}