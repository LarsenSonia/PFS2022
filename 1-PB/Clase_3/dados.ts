import * as rls from 'readline-sync';
let cantDados: number;  //esta mal
cantDados = rls.questionInt("Un dado,1/6 probabilidades de sacar 6. Escriba la cantidad de dados: ");
let n : number= 6**cantDados;
console.log("Con", cantDados,"dados tiene 1/"+n+" de probabilidades de sacar 6.")