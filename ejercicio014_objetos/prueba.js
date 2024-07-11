let cliente = {
    nombre: "Nombre de cliente",
    direccion: "Direccion del cliente",
    telefono: "Telefono del cliente"
}

console.log("cliente 1",cliente, typeof(cliente))

let factura1 = new Object();
factura1.numero = 1;
factura1.emisor = "Empresa Emisora";
factura1.cliente = cliente;
factura1.importe = 300;

console.log(factura1);
console.log(typeof factura1);