function Ejercicio7(ar){
    let cont=0;
    let suma =0;
    let prome=0.0;
    for(let x of ar){
        cont++;
        suma= suma+x;
    }
    prome=suma/cont;

    sumatoria= 0.0;
    sumat=0.0;
    for(let i of ar){
        sumatoria+= (i-prome)**2
    }
    sumat=Math.sqrt((1/(cont-1))*sumatoria)
    console.log(prome);
    console.log(sumat);
}
Ejercicio7([14.4,14.5,14.4,14.3,14.6,14.5]);