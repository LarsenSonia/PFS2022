import * as rls from 'readline-sync';
let i : number;
let N: number = rls.questionInt("Ingrese la dimension del arreglo: ");  //pide el tamaño del array
let invertirArreglo : number[] = new Array(N);       //declaro el array
for (i=0 ; i<N ; i++) {                 //for desde cero hasta (N menos uno)
    invertirArreglo[i] = rls.questionInt("Ingrese un numero: ");      //se cargan los elementos del array
}
for (i=N ; i>=0 ; i=i-1) {                 //for desde el ultimo hasta cero   
    console.log("Los elementos del arreglo, desde el ultimo al primero, son: " , invertirArreglo[i]);
}