import * as rls from 'readline-sync';
function calcularAreaTriangulo (b: number, h: number):number;{
    return=(b*h/2);
};
let par1: number ; 
let par2: number ;
for 
par1= rls.questionInt("Ingrese la base: ");
par2= rls.questionInt("Ingrese la altura: ");
console.log("El area es: "+calcularAreaTriangulo(par1,par2))