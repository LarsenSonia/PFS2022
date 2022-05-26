"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var alturaPersona = readlineSync.questionFloat("Ingrese su altura: ");
if (alturaPersona >= 1.3) {
    console.log("Usted puede ingresar a la montaña rusa.");
}
else {
    console.log("Usted no puede ingresar a la montaña rusa.");
}
