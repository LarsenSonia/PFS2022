import * as rls from 'readline-sync';
let ocupado : string ="";
let butacasOcupadas : number = 0;
let i : number;
let n: number = rls.questionInt("Ingrese el numero de butacas que tiene el cine:");
let arregloCine : boolean[] = new Array(n);
for (i=0; i<n; i++) {
    ocupado = rls.question("La butaca esta ocupada? Responda si o no: ");
    if (ocupado == "si") {
        arregloCine[i] = true;
    } else {
        if (ocupado == "no") {
            arregloCine[i] = false;
        }
    }
}
    for (i=0; i<n; i++) {
        if (arregloCine[i]) {
            butacasOcupadas = butacasOcupadas +1;
        }
    }
console.log("En este cine hay ", (n-butacasOcupadas) , "butacas desocupadas.");