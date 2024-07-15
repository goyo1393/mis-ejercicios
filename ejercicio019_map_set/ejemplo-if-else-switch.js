let edad = 17;
let estadoCivil = "Soltero";
let idiomas = ["Espanol", "Ingles", "Frances", "Chino"];
let permisoConducir = true;
let movilidadGeografica = true;

if ((edad > 18) && (estadoCivil === "Soltero") && (idiomas.includes("Ingles") && (permisoConducir) && movilidadGeografica)) {
    console.log("Cumple")
} else {
    console.log("No cumple");
}

//****************************** 
// Variante
// *****************************
let esMayor = edad > 18;
let esSoltero = estadoCivil === "Soltero";
let sabeIngles = idiomas.includes("Ingles");

if (esMayor && esSoltero && sabeIngles && permisoConducir && movilidadGeografica) {
    console.log("Adelante");
} else {
    console.log("No paso ");
}


//**************************
// Switch 
//**************************

letEdadPersona = 76;
let tipoContrato = 2;

if (tipoContrato == 1) {
    console.log("Tipo 1!");
} else if (tipoContrato == 2) {
    console.log("Tipo 2!");
} else if (tipoContrato == 3) {
    console.log("Tipo 3!");
} else {
    console.log("No se que tipo de contrato es")
}

switch (tipoContrato) {
    case 1:
        console.log("Tipo 1 !!!!");
        break;
    case 2:
        console.log("Tipo 2 !!!!");
        break;
    case 3:
        console.log("Tipo 3 !!!!");
        break;
    case 4:
        console.log("Tipo 4 !!!!");
        break;
    case 5:
        console.log("Tipo 5 !!!!");
        break;
    default:
        console.log("EL contrato no esta definido");
}

