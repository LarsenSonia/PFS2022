import * as rls from 'readline-sync';
let maximo : number = rls.questionInt("Ingrese numero:");
let verif : boolean = true;
let ult : number; 
let minimo : number;
let media : number;
let contador : number = 0;
minimo = maximo;  //inicializo con el primero numero que entro
media = maximo;  //inicializo con el primero numero que entro  
if (maximo != 0){
    contador=contador+1;    //conteo para la media
    while (verif==true) {
        ult = rls.questionInt("Ingrese numero: ");
        if (ult !=0) {
            verif=true;
            contador=contador+1;
            media = media + ult;
            if (ult>maximo) {
                maximo=ult;
            };
            if (ult<minimo){
                minimo=ult
            };
        }else { verif=false}
    } 
} 
media=media/contador;
console.log("El maximo es ",maximo);
console.log("El minimo es ",minimo);
console.log("La media es ",media);