import * as rls from 'readline-sync';
let base: number;
let expon: number;
let cont: number;
function potencia (b:number,e:number):number {
    let result: number = b;
    if (e==0){
        result=1;
    } else {
        if (e==1) {
            result=b;
        } else {
                for (cont=1;cont<e;cont++){
                    result=b*result;
                }
            }
        }
        return result;
}
base = rls.questionInt("Ingrese la base: ");
expon = rls.questionInt("Ingrese el exponente: ");
if ((base>=0) && (expon>=0)) {
    console.log(potencia (base,expon));
}