import * as rls from 'readline-sync';
let azul : number = 40;
let verde : number = 35;
let amarilla : number = 30;
let sala : string = "";
let nroInfantes : number = rls.question("Ingrese el número de infantes: ");
if (azul < nroInfantes) {
    sala = "amarilla";
    
} 

console.log("La sala asignada para los ", nroInfantes," infantes es la sala ")