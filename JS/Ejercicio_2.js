function Ejercicio2(array){
    let cont=0;
    let suma =0;
    for(let x of array){
        cont++;
        suma= suma+x;
    }
    console.log(suma);
    console.log(suma/cont);
}
console.log(Ejercicio2([1,2,3,1,2,1]));