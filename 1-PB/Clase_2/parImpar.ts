import * as readlineSync from 'readline-sync';
let numeroIngresado : number = readlineSync.questionFloat("Ingrese un numero: ");
let resto : number = numeroIngresado % 2;
if (numeroIngresado == 0) {
    console.log("El numero ingresado es cero.");
} else {
    if (resto != 0) {
        console.log("El numero ingresado es impar.");
    } else {
        console.log("El numero ingresado es par.");
    } 
}