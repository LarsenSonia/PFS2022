"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var precioProducto = readlineSync.questionInt("Ingrese el precio del producto: ");
var cantidad = readlineSync.questionInt("Ingrese la cantidad de productos: ");
var precioCompra = precioProducto * cantidad;
var precioFinal;
if (precioCompra > 1000) {
    precioFinal = precioCompra * 0.90;
}
else {
    precioFinal = precioCompra;
}
console.log("El precio total es: " + precioFinal);
