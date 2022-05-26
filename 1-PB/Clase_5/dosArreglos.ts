import * as rls from 'readline-sync';
let dosNombres : string[] = new Array(2);
let tresNumeros : number[] = new Array(3);
let numeros : number;
let nombres : string;
let i : number;
for ( i=0 ; i<2 ; i++) {
    dosNombres [i] = rls.question("Ingrese un nombre: ");   //ingreso los datos del array dosNombres
}
for ( i=0 ; i<3 ; i++) {
    tresNumeros [i] = rls.questionInt("Ingrese un numero: ");   //ingreso los datos del array tresNumeros
}
for ( i=0 ; i<2 ; i++) {
    console.log(dosNombres[i]);         //se listan los nombres del primer array
}
for ( i=0 ; i<3 ; i++) {
    console.log(tresNumeros[i])         //se listan los numeros del segundo array
}