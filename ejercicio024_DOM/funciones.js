const backend = "http://localhost:3000/";
let dogosArray;
const createCard = (temperament, img, race) => {

    // Crea elemento div de carta inicial <div class="card"/>
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    document.querySelector("#dogos").appendChild(divCard);

    let elementImg = document.createElement("img");
    elementImg.src = img;
    divCard.appendChild(elementImg);

    let h2TemperamentElement = document.createElement("h2");
    h2TemperamentElement.textContent = temperament;
    divCard.appendChild(h2TemperamentElement);

    let pRace = document.createElement("p");
    pRace.textContent = race;
    divCard.appendChild(pRace);
}

const cardGenerator = async () => {
    try {
        const response = await fetch(backend);
        dogosArray = await response.json();
        dogosArray.forEach(dog => {
            createCard(dog.breeds[0].temperament, dog.url, dog.breeds[0].name);
        });
    }
    catch (e) {
        console.error('Error fetching data from the API:', e);
    }
};

document.querySelector("#dButton").addEventListener("click", () => {
    let texto = document.querySelector("#buscador").value;
    finder(texto);
})



const finder = (value) => {
    let dogFilter = dogosArray.filter((dog) => {
        return dog.breeds[0].name.toLowerCase().includes(value.toLowerCase())
    })
    document.querySelector("#dogos").innerHTML = "";
    dogFilter.forEach((dogo => {
        createCard(dogo.breeds[0].temperament, dogo.url, dogo.breeds[0].name);
    }))
};


cardGenerator();