import * as rls from 'readline-sync';
let filas : number = 20;      //variable 
let columnas : number = 3;    //variable

let matriz : number [][] = crearMatriz (filas, columnas);      //declaro la matriz y llamo a la funcion ?

function crearMatriz (filas : number, columnas: number) : number[][] {          //funcion que crea la matriz
   let matrizAf : number [][] = new Array (filas);                        //declara matriz adendro funcion, cuyo largo es filas
   let fila : any;                                                   //variable para la fila
   let i: number;
   for ( i = 0; i < matrizAf.length; i++); {                           //for que recorre la fila
      fila = new Array(columnas);                                    //declaro un arreglo , cuyo largo es columnas y que se pasa a la var fila
      matrizAf [i] = fila;
   }
    return matrizAf;
}

function rellenarMatriz (matriz : number [][]) {
   let i:number;
   let j:number; 
   for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[0].length; j++) {
            matriz [i] [j] = 0;
        }
    }
}


/*rellenarMatriz(asientos);
let comprarAsientosX : number = rls.questionInt("Selecciones columna de asiento (entre 1 y 3); ");
while (comprarAsientoX > 3 || comprarAsientoX < 1) {
   console.log ("numero no valido, ingrese uno valido");
   comprarAsientoX = rls.questionInt ("seleccione columna de asiento (entre 1 y 3: ");
}
let comprarAsientoY : number = rls.questionInt("seleccione fila de asiento (entre 1 y 20: ");
while (comprarAsientoY > 20 || comprarAsientoY < 1) {
   console.log ("numero no valido, ingrese uno valido");
   comprarAsientoY = rls.questionInt("seleccione fila de asiento (entre 1 y 20: ")
}
asientos[comprarAsientosX - 1] [comprarAsientoY - 1] = 1;

function listarMatriz (matriz : number [][]) {
   for (i = 0, i < matriz.length; i++) {
      console.log("columna" + (i+1) +": " + matriz[i])
   }
}
listarMatriz (asientos);/*