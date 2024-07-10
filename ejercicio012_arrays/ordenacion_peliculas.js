class Pelicula  {
   constructor (titulo, duracion, genero, clasificacion)
    {
        this.titulo=titulo,
        this.duracion=duracion,
        this.genero=genero,
        this.clasificacion=clasificacion
    }
}

let pelicula1 = new Pelicula("Titanic", 195, "Drama", "1");
let pelicula2 = new Pelicula("The Avengers", 143, "Action", "2");
let pelicula3 = new Pelicula("The Shawshank Redemption", 142, "Drama", "2");
let pelicula4 = new Pelicula("La La Land", 128, "Musical", "3");
let pelicula5 = new Pelicula("Inception", 148, "Sci-Fi", "4");
let pelicula6 = new Pelicula("The Godfather", 175, "Crime", "5");

let peliculas = [];
peliculas.push(pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6);

let filterPelis = peliculas.filter(peli => peli.genero === "Drama").sort((p1,p2)=> (p2.clasificacion - p1.clasificacion));