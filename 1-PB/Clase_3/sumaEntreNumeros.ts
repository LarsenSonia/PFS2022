import * as rls from 'readline-sync';
const num1 : number = rls.questionInt("Ingrese el primer numero: ");
const num2 : number = rls.questionInt("Ingrese el segundo numero: ");
let suma : number = num1;
let cont : number;
let increm: number =num1;
for (cont=num1; cont<num2;cont++) {
    increm=increm+1;
    suma=suma+increm;
};
console.log(suma);//funciona solo con positivos