"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var numeroIngresado = readlineSync.questionInt("Ingrese un numero entero: ");
var resto;
if (numeroIngresado == 0) {
    while (numeroIngresado <= 0) {
        numeroIngresado = readlineSync.questionInt("Ingrese un numero entero: ");
    }
}
resto = numeroIngresado % 2;
if (resto != 0) {
    console.log("El numero ingresado es impar.");
}
else {
    console.log("El numero ingresado es par.");
}
