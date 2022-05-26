"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var salarioActual = readlineSync.questionInt("Ingrese el importe del salario actual: ");
if (salarioActual <= 15000) {
    console.log("El aumento de sueldo es de $", salarioActual * 0.2);
}
else {
    if (salarioActual >= 15001 && salarioActual <= 20000) {
        console.log("El aumento de sueldo es de $", salarioActual * 0.01);
    }
    else {
        if (salarioActual >= 20001 && salarioActual <= 25000) {
            console.log("El aumento de sueldo es de $", salarioActual * 0.05);
        }
        else {
            if (salarioActual >= 25000) {
                console.log("No hay aumento.");
            }
        }
    }
}
