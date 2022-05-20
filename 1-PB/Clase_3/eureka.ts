import * as rls from 'readline-sync';
 claveIngresada : string = "eureka"; //creo que va comillas vacias
let contador : number =1;
while (contador<=3) {
        claveIngresada = rls.question("Ingrese la clave: ");
        if (claveIngresada != "eureka") { 
           if (contador == 3) {(console.log("Se han agotado las posibilidades."))};
         } else {
             contador =4;
         }
        contador = contador +1;
    };