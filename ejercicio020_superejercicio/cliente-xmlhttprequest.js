function getPokemons (url, port, recurso){
    const client = new XMLHttpRequest();
    client.addEventListener("readystatechange", () => {
        
        const isDone = client.readyState ===4;
        const isOk = client.status ===200;

        if(isDone && isOk){
            showPokemons(client.responseText);
        } else if(isDone && !isOk) {
            handleError(client.status);
        }


    });
    client.open("GET", `${url}:${port}/${recurso}`);
    client.send();
}

function showPokemons(pokemons){
    let pokemonsList = JSON.parse(pokemons);
    pokemonsList.forEach(pokemon => {
        const types = pokemon.tipo.map(type => `<span class="${type.toLowerCase()}">${type}</span>`).join(' ');
        let card = `<div class="card">
            <img src="${pokemon.imagen}">
            <h2>${pokemon.nombre}</h2>
            <p><strong>Región:</strong> ${pokemon.region}</p>
            <p class="descripcion">${pokemon.descripcion}</p>
             <div class="tipo">${types}</div>
            <p><strong>Ubicación:</strong> Latitud: ${pokemon.ubicacion.latitud}, Longitud: ${pokemon.ubicacion.longitud}</p>
        </div>`;
        document.querySelector("#pokemonContainer").innerHTML+= card;
    });
}

function handleError (code) {
    const errorMessage = `
        <div class="error-message">
            Ha ocurrido un error: ${code}. Por favor, intenta de nuevo.
        </div>
    `;
    document.querySelector("#pokemonContainer").innerHTML += errorMessage;
}

getPokemons("http://localhost",5500,"ejercicio020_superejercicio/datos.json");

function filter (pokemonsForFilter) {
    let pokemonsFilters = pokemonsForFilter.filter()
}