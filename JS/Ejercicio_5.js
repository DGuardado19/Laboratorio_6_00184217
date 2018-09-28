function Ejercicio5(ar, tipo) {
    var tipoar=[];
    ar.forEach(element => {
      if(typeof element===tipo){
          tipoar.push(element);
      }  
    });
    return tipoar;
}
console.log(Ejercicio5(["sd",1,false], "string"));