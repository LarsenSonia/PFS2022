import * as readlineSync from 'readline-sync';
let alturaPersona : number = readlineSync.questionFloat ("Ingrese su altura: ");
if (alturaPersona >= 1.3) {
    console.log("Usted puede ingresar a la montaña rusa.");
} else {
    console.log("Usted no puede ingresar a la montaña rusa.");
}