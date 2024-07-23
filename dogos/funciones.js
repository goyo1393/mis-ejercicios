const backend = "http://localhost:3000/";
let dogosArray;
const dButton = document.querySelector("#dButton");
const buscador = document.querySelector("#buscador");
const getDogsUrl = "https://api.thedogapi.com/v1/images/search?limit=60&has_breeds=true";
const APK = "live_wSZ4qJqqdQCA0yeMOwMV4hDMyGUBgr7Eq2dUlp3TRY6BlkY3Q1wkRqOOJpXbXp07";

const createCard = (temperament, img, race) => {

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
        const response = await fetch(getDogsUrl, {
            headers: {
                "x-api-key": APK,
            },
        });
        dogosArray = await response.json();
        dogosArray.forEach(dog => {
            createCard(dog.breeds[0].temperament, dog.url, dog.breeds[0].name);
        });
    }
    catch (e) {
        console.error('Error fetching data from the API:', e);
    }
};

const handleSearch = () => {
    let texto = document.querySelector("#buscador").value;
    finder(texto);
};

if (dButton && buscador) {
    dButton.addEventListener("click", handleSearch);
    buscador.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            handleSearch();
        }
    })
} else {
    console.error('No se pudo encontrar el botón o el buscador en el DOM.');
}


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