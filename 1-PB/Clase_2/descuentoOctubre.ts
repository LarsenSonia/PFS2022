import * as readlineSync from 'readline-sync';
let cantidad : number = readlineSync.questionInt("Indique la cantidad de productos: ");
let precioUnitario : number =readlineSync.questionInt("Indique el precio unitario: ");
let mes : string =readlineSync.question("Escriba el mes en que hizo la compra: ");
if (mes === "octubre") {
    console.log("El cliente tiene un 15% de descuento en todas sus compras.");
} else {
    console.log("No corresponde descuento.")
}