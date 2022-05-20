"use strict";
exports.__esModule = true;
var num2 = 2;
var num3 = 3;
var contador = 1;
var multiplo2 = 1;
var multiplo3 = 1;
var result = 1;
var resto = result % 2;
var repetido = false;
var contadorA = 1;
var multiplo2A = 1;
console.log("los multiplos de 2 son: ");
for (contador = 1; contador <= 10; contador += 1) {
    multiplo2 = num2 * contador;
    console.log(multiplo2);
}
console.log("los multiplos de 3 son: ");
for (contador = 1; contador <= 10; contador += 1) {
    multiplo3 = num3 * contador;
    console.log(multiplo3);
}
console.log("los multiplos de 2 y de 3 son: ");
for (contador = 1; contador <= 10; contador += 1) {
    multiplo2 = num2 * contador;
    console.log(multiplo2);
    multiplo3 = num3 * contador;
    repetido = false;
    for (contadorA = 1; contadorA <= 10; contadorA += 1) {
        multiplo2A = num2 * contadorA;
        if (multiplo2A == multiplo3) {
            repetido = true;
        }
    }
    if (repetido == false) {
        console.log(multiplo3);
    }
}
