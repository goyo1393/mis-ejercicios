let enemigo1 = {
    sprite: "asdf.jpg",
    state: "formacion",
    x: 0,
    y: 0,
    live: () => {
        return "Live";
    }
}

console.log(enemigo1.live());
console.log(typeof (enemigo1));
console.log(enemigo1);