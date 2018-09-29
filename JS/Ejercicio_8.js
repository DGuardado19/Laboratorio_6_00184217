function EJercicio8(a, b){

        var suma = new Array(a.length);
        for(let i = 0; i < 3; i++){
            suma[i] = new Array(a.length);
        }
        for(let x = 0;x<a.length; x++){
            for(let y = 0; y < a.length; y++){
                suma[x][y] = a[x][y]+b[x][y];
            }
        }
        let conc = "";
        for(let x = 0; x < a.length; x++){
            for(let y =0; y < a.length; y++){
                conc += suma[x][y] + " ";
            }
            console.log(conc);
            conc = "";
        }
    }


Ejercicio8([[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]]);