const backend = "http://localhost:3000/";
let dogosArray;
const createCard = (temperament, img, race) => {

    // Crea elemento div de carta inicial <div class="card"/>
    let divCard = document.createElement("div");
    divCard.classList.add("cart");
    document.querySelector("#dogos").appendChild(divCard);

    let elementImg = document.createElement("img");
    elementImg.src = img;
    elementImg.appendChild("#dogos");

    let h2TemperamentElement = document.createElement("h2");
    h2TemperamentElement.textContent = temperament;

    let pRace = document.createElement("p");
    pRace.textContent = race;


}

const cardGenerator = async () => {
    try {
        const response = await fetch(backend);
        dogosArray = await response.json();
        console.log(dogosArray);
        dogosArray.forEach(dog => {
            createCard(dog.breeds[0].temperament, dog.url, dog.breeds[0].name);
        });
    }
    catch (e) {
        console.error('Error fetching data from the API:', e);
    }
};

cardGenerator();