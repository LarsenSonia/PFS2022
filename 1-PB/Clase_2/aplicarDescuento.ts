import * as readlineSync from 'readline-sync';
let precioProducto : number = readlineSync.questionInt("Ingrese el precio del producto: ");
let cantidad : number = readlineSync.questionInt("Ingrese la cantidad de productos: ");
let precioCompra : number = precioProducto * cantidad;
let precioFinal : number;
if (precioCompra > 1000) {
    precioFinal = precioCompra * 0.90;
} else {precioFinal = precioCompra;
}
console.log ("El precio total es: " +precioFinal);