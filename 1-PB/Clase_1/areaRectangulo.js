"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese la base: ");
var altura = readlineSync.questionInt("Ingrese la altura: ");
var area = base * altura;
console.log("El área es: ", area);
