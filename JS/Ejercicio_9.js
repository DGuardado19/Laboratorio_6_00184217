function Ejercicio9(numero) {
    array = [];
    for(let i=0; i<20; i++) {
        array.push(Math.floor(Math.random()*100));
    }
    console.log(array);
    if(array.includes(numero)) {
        console.log("Ganaste prro");
        return;
    }
    else{
        console.log("Perdiste prro");
    }
}
Ejercicio9(45);