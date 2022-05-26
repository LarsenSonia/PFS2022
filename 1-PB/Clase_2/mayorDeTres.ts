import * as readlineSync from 'readline-Sync';
let datoUno : number =readlineSync.questionInt("Ingrese el primer número:");
let datoDos : number = readlineSync.questionInt("Ingrese el segundo número:");
let datoTres : number = readlineSync.questionInt("Ingrese el tercer número: ");
let numeroMayor : number;
if (datoUno>datoDos) {
     numeroMayor = datoUno;
} else {
    numeroMayor = datoDos;
}
if (datoTres>numeroMayor) {
    numeroMayor = datoTres;
}
console.log("El numero mayor es:", numeroMayor);