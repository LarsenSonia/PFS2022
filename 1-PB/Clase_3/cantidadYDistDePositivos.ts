import * as rls from 'readline-sync';
let positivos : number = rls.questionInt("Ingrese numero:");
let verif : boolean = true;
let num1 : number; 
let posit: number = 0;
let contador: number = 1;
if (positivos != 0){
    while (verif==true) {
        num1 = rls.questionInt("Ingrese numero: ");
        if (num1 !=0) {
            verif=true;
            if (positivos>0) {
                posit=posit+1;  //contador de positivos
                contador=contador+1
            }else{
                if(num1>0) {
                    contador=contador+1 //contador del total
                }
            }
        } else {
        verif=false
        }
    }
}
console.log(posit," positivos,",(posit*100/contador),"% del total");