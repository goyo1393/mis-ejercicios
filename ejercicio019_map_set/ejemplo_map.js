let pelicula1 = {
    director: "James Cameron",
    genero: "Drama",
    fecha: 1998,
    duracion: 194
};

let pelicula2 = {
    director: "Frank Darabont",
    genero: "Drama",
    fecha: 1994,
    duracion: 142
};

let pelicula3 = {
    director: "Francis Ford Coppola",
    genero: "Crime",
    fecha: 1972,
    duracion: 175
};

let pelicula4 = {
    director: "Steven Spielberg",
    genero: "Drama",
    fecha: 1998,
    duracion: 169
};

const peliculas = new Map([
    ["Titanic", pelicula1],
    ["The Shawshank Redemption", pelicula2],
    ["The Godfather", pelicula3],
    ["Saving Private Ryan", pelicula4]
]);

for (const element of peliculas) {
    console.log(element[1].genero);
}