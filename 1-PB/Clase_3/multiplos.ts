import * as rls from 'readline-sync';
const num2 : number = 2;
const num3 : number = 3;
let contador : number = 1;
let multiplo2 : number = 1;
let multiplo3 : number = 1;
let result : number = 1;
let resto : number = result % 2;
let repetido : boolean = false;
let contadorA : number = 1;
let multiplo2A : number = 1;
console.log("los multiplos de 2 son: ");
for (contador=1 ; contador <= 10 ; contador+=1) {
    multiplo2 = num2 * contador;
    console.log(multiplo2);
}
console.log("los multiplos de 3 son: ");
for (contador=1 ; contador <= 10 ; contador+=1) {
    multiplo3 = num3 * contador;
    console.log(multiplo3);
}
console.log("los multiplos de 2 y de 3 son: ");
for (contador=1 ; contador <= 10 ; contador+=1) {
    multiplo2 = num2 * contador; 
    console.log(multiplo2);
    multiplo3 = num3 * contador;
    repetido = false;
    for (contadorA=1 ; contadorA <= 10 ; contadorA+=1) {
        multiplo2A = num2 * contadorA;
        if (multiplo2A == multiplo3) {
            repetido = true;
        }
    }
        if (repetido == false) {
            console.log(multiplo3)
        }    
}