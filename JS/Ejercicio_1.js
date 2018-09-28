function Ejercicio1(num, array){
    let cont=0;
    for(let x of array){
        if(x==num){
            cont++;
        }
    }
    return cont
}
console.log(Ejercicio1(1,[1,2,3,1,2,1]));