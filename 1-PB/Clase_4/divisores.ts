import * as rls from 'readline-sync';
let numero : number;
let divisores : number = 0;
let i : number;
function esMultiplo (ddo : number , dsor : number) : boolean {
    let resto : number = ddo % dsor;
    if (resto==0) {
        return true} else {
            return false;
        }    
}
function cantidadDeDivisores(num:number):number {
    for (i=1;i<=num;i++) {
        if (esMultiplo ( num, i ) ==true)  {
            divisores = divisores + 1;
        }
    }
    return divisores;
}
numero = rls.questionInt("Ingrese el numero: ");
console.log("La cantidad de divisores es: "+cantidadDeDivisores (numero))