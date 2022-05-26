"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var primerNumero = readlineSync.questionInt("Ingrese el primer número: ");
console.log("el primer número es ", primerNumero);
var segundoNumero = readlineSync.questionInt("Ingrese el segundo número: ");
console.log("el segundo número es ", segundoNumero);
var resultado = primerNumero + segundoNumero;
console.log("El resultado de la suma es:", resultado);
