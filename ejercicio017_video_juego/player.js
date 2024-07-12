class Player {
    constructor(sprite,x,y,speed) {
        this.sprite = sprite,
        this.x = x,
        this.y = y,
        this.speed = speed;
        let imagen = new Image();
        imagen.onload = function() {
            console.log("Imagen cargada");
            let c = document.getElementById("myCanvas");
            let ctx = c.getContext("2d");
            ctx.drawImage(imagen,this.x,this.y),
            ctx.fillStyle = "rgba(200,0,0,0.5)";
            ctx.fillRect(0,0,500,500);
        };
        imagen.src = `images/${sprite}`;
    }
    moverse(desplazamiento){

    }
    disparar(){
        console.log("Disparando ...");
    }
    explotar(){
        console.log("Explotando ...");
    }
    desplazamiento(){

    }
}