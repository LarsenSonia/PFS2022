"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var maximo = rls.questionInt("Ingrese numero:");
var verif = true;
var num1;
if (maximo != 0) {
    while (verif == true) {
        num1 = rls.questionInt("Ingrese numero: ");
        if (num1 != 0) {
            verif = true;
            if (maximo < num1) {
                maximo = num1;
            }
        }
        else {
            verif = false;
        }
    }
}
console.log("El maximo es ", maximo);
