import * as rls from 'readline-sync';
let maximo : number = rls.questionInt("Ingrese numero:");
let verif : boolean = true;
let num1 : number; 
if (maximo != 0){
    while (verif==true) {
        num1 = rls.questionInt("Ingrese numero: ");
        if (num1 !=0) {
            verif=true;
            if (maximo<num1) {
                maximo=num1
            }
        } else {
        verif=false
        }
    }
}
console.log("El maximo es ",maximo);