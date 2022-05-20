"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var cantidad = readlineSync.questionInt("Indique la cantidad de productos: ");
var precioUnitario = readlineSync.questionInt("Indique el precio unitario: ");
var mes = readlineSync.question("Escriba el mes en que hizo la compra: ");
if (mes === "octubre") {
    console.log("El cliente tiene un 15% de descuento en todas sus compras.");
}
else {
    console.log("No corresponde descuento.");
}
