console.log("Hola, ya puedo programar en Node Js 12");

let dias = ["lunes", "martes", "miercoles", "jueves", "viernes","sabado","domingo"];

console.log(dias[0]);

console.log(dias.length);

console.log(dias.slice(-1));

console.log(dias.length -1)

console.log(dias[dias.length -1]);
dias[20] = "algo";
console.log(dias[20]);
console.log(dias);

for (let i = 0; i < dias.length; i++) {
    const element = dias[i];
    console.log(`Dias for: ${element}`);
}

dias.forEach(dia => console.log(`Dias For Each: ${dia}`));

let nombres = Array("Pedro", "Anna", "Arturo", "Sussana");

nombres[nombres.length]= "Victor";
nombres.push("Nia");
nombres.forEach( nombre => console.log(nombre.toUpperCase()));

console.log("Nombres",nombres);

let nombresEmpiezanPorA = nombres.filter((nombre) => nombre.startsWith("A"));

console.log(nombresEmpiezanPorA);

let nombresMayoresA4 = nombres.filter(nombre => nombre.length>4)
console.log(nombresMayoresA4);

let conditional = nombres.filter(nombre =>nombre.length>4 && nombre.toLowerCase().includes("a"));

console.log(conditional);

let transfromado = nombres.map( nombre => nombre.toLocaleUpperCase());
console.log(transfromado);

let transfrormaA = nombres.map( nombre => nombre.replaceAll('a', '@'));
console.log(transfrormaA);

let cambioCaracteres = nombres.filter(a => a.length< 5).map(nombre => nombre.replaceAll("n","N"));
console.log(cambioCaracteres);

const numberArray = [1,2,3,4,5,6,7,8,9,10,11];

let findArray = numberArray.find( number => number >  1);
console.log(findArray);