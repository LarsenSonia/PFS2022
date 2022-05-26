let arregloAleatorio : number[] = new Array(10);
let i : number;
function azar() : number {          //funcion que devuelve un numero al azar
    return Math.random()
}
for (i=0 ; i<10; i++) {
    arregloAleatorio[i] = azar()*100;       //carga el array con numeros aleatorios entre 0 y 1
    console.log(arregloAleatorio[i])
}