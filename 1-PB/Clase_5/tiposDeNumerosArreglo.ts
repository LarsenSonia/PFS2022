import * as rls from 'readline-sync';
let i : number;
let N: number = rls.questionInt("Ingrese la dimension del arreglo: ");  //pide el tamaño del arreglo
let positivos : number = 0;
let negativos : number = 0;
let ceros : number = 0;
let arregloV : number[] = new Array(N);       //declaro el arreglo
for (i=0 ; i<N ; i++) {                 //repite desde que el indice es cero hasta N menos uno
    arregloV[i] = rls.questionInt("Ingrese un numero: ");      //se cargan los elementos del array
}
for (i=0 ; i<N ; i++) {         //recorre el arreglo desde cero a N
    if (arregloV[i]== 0) {           //si el numero ingresado en la posicion es igual a cero
        ceros = ceros +1;           //incremento la variable ceros en uno
    } else {
            if (arregloV[i] > 0) {
                positivos = positivos +1;
            } else {
                    if (arregloV[i] < 0) {
                        negativos = negativos +1;
                    }
            }
    }
}
console.log(positivos, "positivos," , negativos, "negativos y " , ceros , "ceros");