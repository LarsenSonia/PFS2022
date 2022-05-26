import * as rls from 'readline-sync';
let i : number;
let suma: number = 0;       //inicializo en cero la variable que va a sumar todos los elementos del array
let N: number = rls.questionInt("Ingrese la dimension del arreglo: ");  //pide el tamaño del array
let sumaElementos : number[] = new Array(N);       //declaro el array
for (i=0 ; i<N ; i++) {                 //for desde cero hasta (N menos uno)
    sumaElementos[i] = rls.questionInt("Ingrese un numero: ");      //se cargan los elementos del array
    suma = suma + sumaElementos[i];                                 //se suman los elementos
}
    console.log("El resultado de la suma de los elementos del arreglo es: " , suma)