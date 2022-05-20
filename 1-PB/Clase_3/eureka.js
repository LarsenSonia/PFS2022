"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var claveIngresada = "eureka";
var contador = 1;
while (contador <= 3) {
    claveIngresada = rls.question("Ingrese la clave: ");
    if (claveIngresada != "eureka") {
        if (contador == 3) {
            (console.log("Se han agotado las posibilidades."));
        }
        ;
    }
    else {
        contador = 4;
    }
    contador = contador + 1;
}
;
