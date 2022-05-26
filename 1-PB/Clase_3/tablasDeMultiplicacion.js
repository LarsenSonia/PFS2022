"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numInicio = rls.questionInt("Ingrese el primer numero: ");
var numFinal = rls.questionInt("Ingrese hasta que numero: ");
var factor = 1;
var result;
while (factor <= numFinal) {
    result = factor * numInicio;
    console.log(numInicio, "*", factor, "=", result);
    factor = factor + 1;
}
