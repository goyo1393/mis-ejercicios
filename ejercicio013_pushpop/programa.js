let cola = [];
const creationDelay  = 3000;
const consumDelay = 5000;
let contador= 0;
const crearTarea = () => {
    console.log("Creando tarea ... ");
    cola.push(`Tarea ${contador++}`);
    mostrarCola();
}

const mostrarCola = () => {
    let textoHTML ="";
    cola.map(tarea => {
        textoHTML+= `<div class="tarea">${tarea}</div>`;
    })
    document.querySelector("body").innerHTML=textoHTML;
}

const consumirTarea = () => {
    let tarea = cola.shift();
    console.log(`Realizando la tarea ${tarea}`)
    mostrarCola();
}

setInterval(crearTarea, creationDelay);
setInterval(consumirTarea, consumDelay);