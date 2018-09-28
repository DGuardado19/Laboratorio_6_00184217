function Ejercicio11(nombre, apellido, fecha, telefono, correo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.fecha=fecha;
    this.telefono= telefono;
    this.correo=correo;
    }
    
    function Agregar(a,b,c,d,e,nombrep){
        var arreglo=[];
        var nombrep= new Ejercicio10(a,b,c,d,e);
        console.log(personauno.nombre, personauno.apellido, personauno.fecha, personauno.telefono, personauno.correo);
        arreglo.push(nombrep);
      
    }
    Agregar("David","Guardado", "27/09/97", "78354435", "00184217", "david");