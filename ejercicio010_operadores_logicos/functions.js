const minValue = 10;

function validar() {
   if(ComprobarSensor1() & ComprobarSensor2()) 
   {
    alert("Esta Ok");
   } else {
    alert("Error")
   }
}

function ComprobarSensor1(){
    let sensor1 = document.querySelector("#sensor1").value | 0;
    let sensorOk = sensor1<10 ? "rojo" : "verde";
    let marcador1 = document.querySelector("#marcador1");
    marcador1.className = 'cuadrado'; 
    marcador1.classList.add(sensorOk); 
}

function ComprobarSensor2(){
    let sensor2 = document.querySelector("#sensor2").value | 0;
    let sensorOk = sensor2<10 ? "rojo" : "verde";
    let marcador2 = document.querySelector("#marcador2");
    marcador2.className = "cuadrado"; 
    marcador2.classList.add(sensorOk);
}