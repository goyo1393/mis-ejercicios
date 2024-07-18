const fs = require('fs');
const minViajeros = 1;
const maxViajeros = 4;
const maxDias = 10;
const minDias = 4;
let country = [
    {
        newCountry: "Venezuela",
        continent: "América Latina"
    },
    {
        newCountry: "Argentina",
        continent: "América Latina"
    },
    {
        newCountry: "Brasil",
        continent: "América Latina"
    },
    {
        newCountry: "Chile",
        continent: "América Latina"
    },
    {
        newCountry: "Colombia",
        continent: "América Latina"
    },
    {
        newCountry: "Perú",
        continent: "América Latina"
    },
    {
        newCountry: "México",
        continent: "América Latina"
    },
    {
        newCountry: "Ecuador",
        continent: "América Latina"
    },
    {
        newCountry: "Uruguay",
        continent: "América Latina"
    },
    {
        newCountry: "Paraguay",
        continent: "América Latina"
    }
];

const createCountry = (newCountry, continent) => {
    //country.push({ newCountry, continent });
    if (newCountry && continent) {
        //  writeCountry(JSON.stringify(country));
    }
}

const writeCountry = (country) => {
    fs.appendFile('./country.json', `${country}`, (err) => {
        if (err) {
            console.error(x);
            console.error(err);
        } else {
            console.log("Paises registrados satisfactoriamente");
        }
    });
}

createCountry("Espana", "Europa");

let countryArray = require('./country.json');

const organizarViaje = (nPais, nViajeros, nDias) => {

    if (!(countryArray.some(pais => { pais.newCountry.toLocaleLowerCase() === nPais.toLocaleLowerCase() }))) {
        throw new Error("Pais de destino no existe");
    }

    if ((nViajeros < minViajeros && nViajeros > maxViajeros)) {
        throw new Error("Pasajeros no  cumple cantidad");
    }

    if ((nDias < minDias && nDias > maxDias)) {
        throw new Error("cantidad de dias cumple ");
    }

    return `Se ha reservado un viaje a ${nPais} de ${nDias} para ${nViajeros}`;
}

try {
    let result = organizarViaje("PAraGuay", 2, 7);
    console.log(result);
}
catch (e) {
    console.error(e.message);
}