"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var cantDados;
cantDados = rls.questionInt("Un dado,1/6 probabilidades de sacar 6. Escriba la cantidad de dados: ");
var n = Math.pow(6, cantDados);
console.log("Con", cantDados, "dados tiene 1/" + n + " de probabilidades de sacar 6.");
