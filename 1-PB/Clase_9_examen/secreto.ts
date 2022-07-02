//Algoritmo secreto
import * as readlineSync from 'readline-sync';
let elem: number=0;
let ocu: number =0;
elem = readlineSync.questionInt("Ingrese tamaño: ");
let arr = new Array(elem);
cargar(arr);
let nro : number = readlineSync.questionInt("Ingrese numero: ");
ocu = funcion(arr,nro);
console.log(`El numero ${nro} ... ${ocu}`);     //nro es el tamaño y ocu tambien
mostrar(arr, elem)
function cargar(v) {
    for (let i = 0; i < v.length; i++) {
            v[i]=Math.floor(Math.random()*100);
    }
}
function mostrar(v,n) {
    let c: string ="";
    for (let i = 0; i < v.length; i++) {
            c+= v[i] + " ";
    }
    console.log(c);
}
function funcion(v,n): number {
    let o : number =0;
    let i: number;
    for (let i = 0; i < v.length; i++){
            if (v[i] == n){
                o+=1;
                }
        }
        return o;
}