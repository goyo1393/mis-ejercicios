const options = {
    method: "GET"
};

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const pokemons = fetch(apiUrl, options);

pokemons
    .then(response => response.text())
    .then(data => {
        showPokemons(data);
    });

function showPokemons(pokemons) {
    let pokemonsList = JSON.parse(pokemons).results.map(detail => {
        let pokemonNumber = detail.url.slice(-4, -1).replace(/\D/g, '');
        pokemonNumber = pokemonNumber.padStart(3, '0');
        let image = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemonNumber}.png`;
        detail = {
            ...detail,
            image,
            id: pokemonNumber
        };
        return detail;
    });
    console.log(pokemonsList);
    pokemonsList.forEach(pokemon => {
        let card = `<div class="card">
           <img src="${pokemon.image}">
            <h2>${pokemon.name}</h2>
            <h2 class="pokemonId">#${pokemon.id}</h2>
        </div>`;
        document.querySelector("#pokemonContainer").innerHTML += card;
    });
}

function handleError(code) {
    const errorMessage = `
        <div class="error-message">
            Ha ocurrido un error: ${code}. Por favor, intenta de nuevo.
        </div>
    `;
    document.querySelector("#pokemonContainer").innerHTML += errorMessage;
}