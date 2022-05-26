import * as rls from 'readline-sync';
let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
let vSuma : number[] = new Array(6);
let i: number;
for (i=0 ; i<6 ; i++){
    v1[i] = rls.questionInt("Arreglo v1. Ingrese un numero:");  //cargar el array v1
}
for (i=0 ; i<6 ; i++){
    v2[i] = rls.questionInt("Arreglo v2. Ingrese un numero:");  //cargar el array v2
}
for (i=0 ; i<6 ; i++){
    vSuma[i] = v1[i] + v2[i];                                    //suma de cada posicion de cada array
    console.log( v1[i] , "+" , v2[i] , "=" , vSuma[i] )            //mostrar cada posicion de v1 yv2 y el resultado.
}
