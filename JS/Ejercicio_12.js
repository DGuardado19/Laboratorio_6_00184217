var arreglo=[];

function Ejercicio12(nombre, apellido, fecha, telefono, correo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.fecha=fecha;
    this.telefono= telefono;
    this.correo=correo;
    }
    
    function Agregar(a,b,c,d,e){
        var Persona= new Ejercicio12(a,b,c,d,e);
        arreglo.push(Persona);
      
    }


function mostrar(){
    for(let i = 0; i < arreglo.length; i++){
        console.log((i+1) +  'Nombre:' + arreglo[i].nombre + '\n' + 
                    'Apellido:' + arreglo[i].apellido + '\n' +
                    'Nacimiento:' + arreglo[i].fecha + '\n' +
                    'Telefono:' + arreglo[i].telefono + '\n' +
                    'Correo:' + arreglo[i].correo + '\n');
    }
    if(arreglo.length == 0){
        console.log('Aun no registras ningun usuario c:');
    }
}

function eliminar(array, n){
    return array.slice(0, n).concat(array.slice(n+1));
}

function modificarDato(jej){
    let nnombre = prompt('MOdifique el nombre.');
    let napellido = prompt('MOdifique su apellido.');
    let nfecha = prompt('MOdifique su  fecha de nacimiento.');
    let ntelefono = prompt('MOdifique su telfono');
    let ncorreo = prompt('MOdifique su correo');

    for(let x = 0; x < arreglo.length; x++){
        if(x == jej){
            if(nnombre != ""){
                arreglo[x].nombre = nnombre;
            }
            if(napellido != ""){
                arreglo[x].apellido = napellido;
            }
            if(nfecha != ""){
                arreglo[x].fecha = nfecha;
            }
            if(ntelefono != ""){
                arreglo[x].telefono = ntelefono;
            }
            if(ncorreo != ""){
                arreglo[x].correo = ncorreo;
            }
        }
    }
}

function menu(){
    let opc = parseInt(prompt('1-Ingresar nueva persona \n 2- Buscar  \n 3- Modificar  \n 4- Eliminar \n 5- Mostrar todos \n 6  - Salir'));
    switch (opc) {
        case 1:
            let n = prompt('Ingrese el nombre');
            let a = prompt('Ingrese el apellido');
            let f = prompt('Ingrese la fecha de nacimiento ');
            let t = prompt('Ingrese el numero de telefono');
            let c = prompt('Ingrese el correo');
            Agregar(n, a, f, t, c);
            menu();
            break;
        case 2:
            if(arreglo.length != 0){
                let no = prompt('NOMbre a buscar');
                let cont = 0;
                for(let i = 0; i < arreglo.length; i++){
                    if(arreglo[i].nombre == no){
                        console.log('Nombre: ' + arreglo[i].nombre + '\n' + 
                                    'Apellido: ' + arreglo[i].apellido + '\n' +
                                    'Fecha de nacimiento: ' + arreglo[i].fecha + '\n' +
                                    'Telefono: ' + arreglo[i].telefono + '\n' +
                                    'Correo: ' + arreglo[i].nombre + '\n');
                        ++cont;
                    }
                }
                if(cont == 0){
                    console.log('No esta a persona');
                }
            } 
            menu();
            break;
        case 3:

            mostrar();
            if(arreglo.length != 0){
                var cont = prompt('Seleccione el id de quien modificara');
            }
            if(arreglo.length >= cont){
                modificar((cont-1));
            } else if(arreglo.length != 0){
                console.log('No se econtro');
            }

            menu();
            break;
        case 4:

            mostrar();
            if(arreglo.length != 0){
                var bay = parseInt(prompt('Seleccione el id de la persona que borrara'));
            }
            if(arreglo.length >= bay){
                arreglo = eliminarDato(arreglo, (bay-1));
            } else if(arreglo.length != 0){
                console.log('NO ESTA WE');
            }            

            menu();
            break;
        case 5:

            mostrar();

            menu();
            break;
        case 6:
            console.log('bay');
            break;
    
        default:
            console.log('NO te di esas opciones we >:v');
            menu();
            break;
    }
}

menu();