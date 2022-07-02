import * as rls from 'readline-sync';
let caracter : string = "";
let verifMin : string = "";
let i: number=0;
function cambiarCase(caracter: string):string {
    verifMin = caracter.toUpperCase(); 
    if (verifMin != caracter) {
        return verifMin;
    } 
        else{
            verifMin = caracter.toLowerCase();
                return verifMin;
            }
}
