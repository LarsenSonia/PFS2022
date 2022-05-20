import * as readlineSync from 'readline-sync';
let numeroIngresado : number = readlineSync.questionInt("Ingrese un numero entero: ");
let resto : number; 
if (numeroIngresado == 0) {
    while  (numeroIngresado <= 0) {
    numeroIngresado = readlineSync.questionInt("Ingrese un numero entero: ");
    }
}
resto = numeroIngresado % 2;
    if (resto != 0) {
        console.log("El numero ingresado es impar.");
    } else {
        console.log("El numero ingresado es par.");
    } 
    