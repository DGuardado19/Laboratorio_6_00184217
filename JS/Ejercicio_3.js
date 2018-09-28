function Ejercicio3(array){
    var aux=[];
    var cont2 =[];
    for(let x of array){
        if(aux.includes(typeof x)){
            cont2[aux.indexOf(typeof x)]+=1;
        }
        else{
            aux.push(typeof x);
        cont2.push(x) ;       }
    }
    for(let i=0; i< aux.length;i++){
        console.log(aux[i]+": "+cont2[i]);
    }
 
}
console.log(Ejercicio3([1,2,[1,2,3],"sdsd",2,true]));