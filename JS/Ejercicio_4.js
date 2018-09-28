function Ejercicio4(ar) {
    if (ar.length % 2 == 0) {
        for (let x = 0; x < ar.length / 2; x++) {
            console.log(ar[x] + "+" + ar[ar.length - (1 + x)] + "=" + (ar[x] + ar[ar.length - (1 + x)]));
        }
        return;
    }
    for (let i = 0; i < Math.floor(ar.length / 2); i++) {
        console.log(ar[i] + " + " + ar[ar.length - (1 + i)] + " = " + (ar[i] + ar[ar.length - (1 + i)]));
    }console.log(ar[Math.floor(ar.length/2)] + " + " + ar[Math.floor(ar.length/2)] + " = " + (ar[Math.floor(ar.length/2)] * 2));

}
Ejercicio4([1,2,4,4,5]);
