import * as rls from 'readline-sync';
let i:number;
let numerosDeseados : number [] = new Array (5);
for (i=0;i<(numerosDeseados.length);i=i+1) {
    numerosDeseados[i] = rls.questionInt("Ingrese un numero: ");
}
console.log(numerosDeseados.length);
for (i=0;i<(numerosDeseados.length);i++) {
    console.log(numerosDeseados[i]);
}