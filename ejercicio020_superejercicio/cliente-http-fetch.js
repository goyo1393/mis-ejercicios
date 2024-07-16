const options = {
    method: "GET"
  };
  
const pokemons = fetch("https://pokeapi.co/api/v2/pokemon/",options);

pokemons
.then(response => response.text())
.then(data => {
   //console.log(JSON.parse(data).results)
    showPokemons(data);
});

function showPokemons(pokemons){
    let pokemonsList = JSON.parse(pokemons).results.map( detail => {
        console.log(detail.url.at(-2));
        let image = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${detail.url.at(-2)}.png`;
        detail = {
            ...detail,
            image
        };
        console.log(detail);
    });
    console.log(pokemonsList.results)
    pokemonsList.forEach(pokemon => {
        let card = `<div class="card">
            <img src="${pokemon.url}">
            <h2>${pokemon.name}</h2>
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