"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var positivos = rls.questionInt("Ingrese numero:");
var verif = true;
var num1;
var posit = 0;
var contador = 1;
if (positivos != 0) {
    while (verif == true) {
        num1 = rls.questionInt("Ingrese numero: ");
        if (num1 != 0) {
            verif = true;
            if (positivos > 0) {
                posit = posit + 1;
                contador = contador + 1;
            }
            else {
                if (num1 > 0) {
                    contador = contador + 1;
                }
            }
        }
        else {
            verif = false;
        }
    }
}
console.log(posit, " positivos,", (posit * 100 / contador), "% del total");
