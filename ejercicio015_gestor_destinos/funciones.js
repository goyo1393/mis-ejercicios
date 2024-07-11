
const championPull = new Array();

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
        htmlChamp += 
        `
            <div>${champ.name}</div>
            <div>${champ.line}</div>
            <img src="${champ.image}">
        `;
    });
    document.querySelector("#cardContainer").innerHTML=htmlChamp;

    document.querySelector("#iChampion").value="";
    document.querySelector("#iLane").value="";
    document.querySelector("#iImage").value="";
}