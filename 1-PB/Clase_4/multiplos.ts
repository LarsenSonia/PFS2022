import * as rls from 'readline-sync';
let dividendo : number;
let divisor: number;
function esMultiplo(ddo:number,dsor:number):boolean{
    let resto : number = ddo % dsor;
    if (resto==0) {
        return true} else {
            return false;
        }    
}
dividendo = rls.questionInt("Ingrese el dividendo: ");
divisor = rls.questionInt("Ingrese el divisor: ");
console.log(esMultiplo(dividendo,divisor));