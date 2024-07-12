
const championPull = new Array();

//Recuperar de localStorage los campeones almacenados
let champStorage = localStorage.getItem("championPull");
if (champStorage!=null)
{
    champs = JSON.parse(champStorage);
    createChampionPull(champs);
}
//Fin de recuperar de localStorage

document.querySelector("#aButton").addEventListener("click", (event) => {
    let name = document.querySelector('#iChampion').value;
    let line = document.querySelector('#iLane').value; 
    let image = document.querySelector('#iImage').value;
    let champion = {
        name,
        line,
        image
    }
    championPull.push(champion);
    console.log(championPull);
    createChampionPull(championPull);
});

function createChampionPull(championPull) {
    let htmlChamp = "";
    championPull.map((champ) => {
        htmlChamp += `
            <div class="card">
                <div class="card-name"><strong>${champ.name}</strong></div>
                <div class="card-line"><strong>${champ.line}</strong></div>
                <img src="${champ.image}" alt="${champ.name}">
            </div>
        `;
    });
    document.querySelector("#cardContainer").innerHTML = htmlChamp;

    document.querySelector("#iChampion").value = "";
    document.querySelector("#iLane").value = "";
    document.querySelector("#iImage").value = "";
}

//Guardar los destinos en localStorage
document.querySelector("#gButton").addEventListener("click",guardar);
function guardar() {
    console.log("guardar")
    let strChamps = JSON.stringify(champs);
    localStorage.setItem("championPull", strChamps);
}
//Fin de Guardar destinos