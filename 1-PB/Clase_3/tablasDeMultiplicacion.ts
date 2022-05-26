import * as rls from 'readline-sync';
const numInicio : number = rls.questionInt("Ingrese el primer numero: ");
const numFinal : number = rls.questionInt("Ingrese hasta que numero: ");
let factor : number = 1;
let result: number;
//if (const>01) && (const<=9) {
while (factor <= numFinal) {
        result=factor * numInicio;
    console.log(numInicio, "*",factor,"=", result);
    factor=factor+1;
}


//}else  //falta que los numeros sean entre 1 y 9