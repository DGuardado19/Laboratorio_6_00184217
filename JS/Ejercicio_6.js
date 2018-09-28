function Ejercicio6(palabra) {
    arr = palabra.split('')
    encri = [];
    arr.forEach(element => {
        switch (element) {
            case 'm':
                encri.push("0");
                break;

            case 'M':
                encri.push("0");
                break;

            case 'u':
                encri.push("1");
                break;
                
            case 'U':
                encri.push("1");
                break;

            case 'r':
                encri.push("2");
                break;

            case 'R':
                encri.push("2");
                break;
                
            case 'c':
                encri.push("3");
                break;

            case 'C':
                encri.push("3");
                break;

            case 'i':
                encri.push("4");
                break;

            case 'I':
                encri.push("4");
                break;
                
            case 'e':
                encri.push("5");
                break;

            case 'E':
                encri.push("5");
                break;

            case 'l':
                encri.push("6");
                break;
                
            case 'L':
                encri.push("6");
                break;

            case 'a':
                encri.push("7");
                break;

            case 'A':
                encri.push("7");
                break;
                
            case 'g':
                encri.push("8");
                break;

            case 'G':
                encri.push("8");
                break;

            case 'o':
                encri.push("9");
                break;

            case 'O':
                encri.push("9");
                break;
        
            default:
                encri.push(element);
                break;
        }
    });
        
    return encri.join('');
}
console.log(Ejercicio6("murcielaggogogooaoao"));