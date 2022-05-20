import * as readlineSync from 'readline-sync';
let base : number = readlineSync.questionInt("Ingrese la base: ");
let altura : number = readlineSync.questionInt("Ingrese la altura: ");
let area : number = base * altura;
console.log ("El área es: ", area);
