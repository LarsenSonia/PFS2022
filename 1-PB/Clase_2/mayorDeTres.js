"use strict";
exports.__esModule = true;
var readlineSync = require("readline-Sync");
var datoUno = readlineSync.questionInt("Ingrese el primer número:");
var datoDos = readlineSync.questionInt("Ingrese el segundo número:");
var datoTres = readlineSync.questionInt("Ingrese el tercer número: ");
var numeroMayor;
if (datoUno > datoDos) {
    numeroMayor = datoUno;
}
else {
    numeroMayor = datoDos;
}
if (datoTres > numeroMayor) {
    numeroMayor = datoTres;
}
console.log("El numero mayor es:", numeroMayor);
