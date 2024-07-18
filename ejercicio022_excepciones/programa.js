function sumar(s1, s2) {
    // Que reciba dos argumentos 
    if (!s1 || !s2) {
        throw new Error("Se necesitan ambos argumentos");
    }
    // Que los dos argumentos sean numeros
    if (!(typeof s1 === "number") || !(typeof s2 === "number")) {
        throw new Error(" No es un numero");
    }
    return s1 + s2;
}

try {
    console.log("Paso 1")
    let result = sumar("a", 8);
    console.log("Paso 2")
    console.log(result);
    console.log("Paso 3");
} catch (e) {
    console.error("Ha ocurrido un error:", e.message, "🚀");
}
finally {
    console.log("Aca finaliza");
}
