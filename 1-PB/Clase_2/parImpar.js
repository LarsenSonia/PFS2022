"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var numeroIngresado = readlineSync.questionFloat("Ingrese un numero: ");
var resto = numeroIngresado % 2;
if (numeroIngresado == 0) {
    console.log("El numero ingresado es cero.");
}
else {
    if (resto != 0) {
        console.log("El numero ingresado es impar.");
    }
    else {
        console.log("El numero ingresado es par.");
    }
}
