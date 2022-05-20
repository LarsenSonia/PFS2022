import * as readlineSync from 'readline-sync';
let usuario : string = "Juan";
let clave : string = "claveJuan";
let ingresoUsuario : string = readlineSync.question("Ingrese usuario: ");
let ingresoClave : string = readlineSync.question("Ingrese contraseña: ");
if ((usuario === ingresoUsuario) && (clave === ingresoClave)) {
    console.log("Usted ha ingresado al sistema.");
} else {
    if ((usuario === ingresoUsuario) && (clave != ingresoClave)) {
        console.log("Clave erronea.") //pedir ingreso nueva contraseña;
    } else {
        if ((usuario != ingresoUsuario) && (clave === ingresoClave)) {
            console.log("Usuario erroneo.");
        } else {
            console.log("Datos erroneos.")
        }
    }
    }