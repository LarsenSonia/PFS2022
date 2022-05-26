import * as rls from 'readline-sync';
let dimension : number = rls.question("Ingrese la dimension del arreglo: "); //pido la dimension del array
let nombresDeseados : string[] = new Array (dimension);     //defino el array
let i : number;                                 //variable para el contador del for
for (i=0;i<dimension;i++) {
    nombresDeseados[i] = rls.question("Ingrese un nombre: ");           //ingresa cada nombre del array
}
for (i=0;i<dimension;i++) {
    console.log("Posición ", (i+1), nombresDeseados[i] )            //lista los nombres
}