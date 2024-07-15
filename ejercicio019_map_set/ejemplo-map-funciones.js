function sumar (s1,s2) {
    return s1+s2;
}

let resultado = sumar(3,4);
console.log(resultado);

let restar = (r1, r2) => r1 -  r2;

let facturar = () => console.log("Facturando ...");

let reclamar = () => console.log("Reclamar  ...");

let archivar = () => console.log("Archivando ...");

let flujoTrabajo = new Map([
    ["Facturar",facturar()],
    ["Reclamar", reclamar()],
    ["Archivar",archivar()]
]);

flujoTrabajo.get("Facturar");
flujoTrabajo.get("Reclamar");
flujoTrabajo.get("Archivar");