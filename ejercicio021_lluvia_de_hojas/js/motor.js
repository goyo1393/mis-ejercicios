const ratio = 0.016;
const velocidad = 1;
let y = -100;
let x = 200;

setInterval(() => {
    y += velocidad;
    x += velocidad;
    document.querySelector(`#pokemonRain`).style.top = `${y}px`;
    document.querySelector(`#pokemonRain`).style.left = `${x}px`;
    if (y > window.innerHeight) {
        y = -100;
        x = Math.random() * window.innerWidth;
    }
}, ratio);

document.querySelector("#bCerrar").addEventListener("click", () => {
    document.querySelector("footer").style.bottom = "-100px";
    document.querySelector("footer").style.opacity = "0";
})