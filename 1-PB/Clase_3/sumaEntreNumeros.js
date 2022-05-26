"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese el primer numero: ");
var num2 = rls.questionInt("Ingrese el segundo numero: ");
var suma = num1;
var cont;
var increm = num1;
for (cont = num1; cont < num2; cont++) {
    increm = increm + 1;
    suma = suma + increm;
}
;
console.log(suma);
