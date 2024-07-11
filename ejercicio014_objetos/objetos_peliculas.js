let españa = {
    nombre: "España",
    continente: "Europa"
};

let estadosUnidos = {
    nombre: "Estados Unidos",
    continente: "América"
};

let mexico = {
    nombre: "México",
    continente: "América"
};

let javierBardem = {
    nombre: "Javier Bardem",
    pais: españa
};

let penelopeCruz = {
    nombre: "Penélope Cruz",
    pais: españa
};

let harrisonFord = {
    nombre: "Harrison Ford",
    pais: estadosUnidos
};

let gaelGarciaBernal = {
    nombre: "Gael García Bernal",
    pais: mexico
};

let bradPitt = {
    nombre: "Brad Pitt",
    pais: estadosUnidos
};

let marAdentro = {
    titulo: "Mar Adentro",
    director: "Alejandro Amenábar",
    actores: [javierBardem, penelopeCruz]
};

let starWarsEpisodioIV = {
    titulo: "Star Wars Episodio IV",
    director: "George Lucas",
    actores: [harrisonFord]
};

let babel = {
    titulo: "Babel",
    director: "Alejandro González Iñárritu",
    actores: [gaelGarciaBernal, bradPitt]
};


const catalogos = {
    catalogo: {
        Pais: [españa, estadosUnidos, mexico],
        Actor: [javierBardem, penelopeCruz, harrisonFord, gaelGarciaBernal, bradPitt],
        Peliculas: [marAdentro, starWarsEpisodioIV, babel]
    }
};

let peliculasArray = [babel, starWarsEpisodioIV, marAdentro];

console.log(peliculasArray)

console.log(catalogos);
