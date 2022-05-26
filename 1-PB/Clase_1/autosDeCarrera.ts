import * as readlineSync from 'readline-sync';
let tiempoVuelta1 : number = readlineSync.questionInt ("Ingrese tiempo de vuelta 1: ");
let tiempoVuelta2 : number = readlineSync.questionInt ("Ingrese tiempo de vuelta 2: ");
let tiempoVuelta3 : number = readlineSync.questionInt ("Ingrese tiempo de vuelta 3: ");
let tiempoVuelta4 : number = readlineSync.questionInt ("Ingrese tiempo de vuelta 4: ");
let tiempoTotal : number = tiempoVuelta1 + tiempoVuelta2 + tiempoVuelta3 + tiempoVuelta4;
console.log ("Tiempo total: " , tiempoTotal);
let tiempoPromedio : number = tiempoTotal / 4;
console.log ("Tiempo promedio: " , tiempoPromedio);