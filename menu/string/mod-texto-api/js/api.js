"use strict";

const resultadoDiv = document.getElementById('resultado');
const boton = document.getElementById('btnApi'); 
const teamInput = document.getElementById('team');
const inputText = document.getElementById('inputText');

boton.addEventListener('click', function () {
    const team = teamInput.value.trim(); 
    if (team) {
        fetchJSONData(team);
    } else {
        resultadoDiv.textContent = "Por favor, introduce el nombre de un equipo.";
    }
});

async function fetchJSONData(team) {
    try {
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${team}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        
        // Verifica si el equipo existe en la respuesta
        if (data.teams) {
            const teamInfo = data.teams[0];
            mostrarEquipo(teamInfo);
        } else {
            resultadoDiv.textContent = "No se encontró el equipo.";
        }
        
    } catch (error) {
        resultadoDiv.textContent = "Hubo un error al obtener los datos.";
        console.error("Unable to fetch data:", error);
    }
}

// Función para mostrar la información del equipo
function mostrarEquipo(team) {
    inputText.value = team.strDescriptionES || "Descripción no disponible.";
    resultadoDiv.innerHTML = `
        <div class="my-3">
            <h2>${team.strTeam}</h2>
            <img src="${team.strBadge}" alt="Escudo del equipo" width="100">
        </div>  
    `;
}

const logoutButton = document.getElementById("logout");

// Evento para cerrar sesión
logoutButton.addEventListener("click", function(event) {

    event.preventDefault();
    deleteIndexedDB("usuario");
    setTimeout(() => { window.location.href = "../../../index.html";}, 500);

}); 
