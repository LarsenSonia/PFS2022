"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var usuario = "Juan";
var clave = "claveJuan";
var ingresoUsuario = readlineSync.question("Ingrese usuario: ");
var ingresoClave = readlineSync.question("Ingrese contraseña: ");
if ((usuario === ingresoUsuario) && (clave === ingresoClave)) {
    console.log("Usted ha ingresado al sistema.");
}
else {
    if ((usuario === ingresoUsuario) && (clave != ingresoClave)) {
        console.log("Clave erronea."); //pedir ingreso nueva contraseña;
    }
    else {
        if ((usuario != ingresoUsuario) && (clave === ingresoClave)) {
            console.log("Usuario erroneo.");
        }
        else {
            console.log("Datos erroneos.");
        }
    }
}
