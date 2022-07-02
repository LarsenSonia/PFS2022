let venCamila : number[] = new Array(12); venCamila = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]; //Camila
let venFranco : number[] = new Array(12); venFranco = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855]; //Franco
let venAlicia : number[] = new Array(12); venAlicia = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218]; //Alicia
let venMatias : number[] = new Array(12); venMatias = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006]; //Matias
let venSandra : number[] = new Array(12); venSandra = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]; //Sandra
let i: number;
let nombresVendedores : string[] = new Array(12); nombresVendedores = ["Camila" , "Franco" , "Alicia" , "Matias" , "Sandra"];
function calcularVentaMaxima(vendedor: number[]):number {       //calcula el monto maximo del arreglo y devuelve como resultado de la funcion
let i: number;    
let aux: number;
let maximo: number =0;
    for ( i=0 ; i<vendedor.length ; i++ ) {
        aux = vendedor[i];
        if (aux > maximo) {
            maximo = aux;
        };
    }
    return maximo;
}
function calcularVentaMinima(vendedor: number[]):number {       //calcula el monto maximo del arreglo y devuelve como resultado de la funcion
    let i: number;    
    let aux: number;
    let minimo: number =0;
        for ( i=0 ; i<vendedor.length ; i++ ) {
            aux = vendedor[i];
            if (aux > minimo) {
                minimo = aux;
            };
        }
        return minimo;
    }
function verSemana(vendedor: number[], monto):number {      //ver en que semana hizo el max o el min
    let i: number;    
    let aux: number;
    let semana: number =0;
            for ( i=0 ; i<vendedor.length ; i++ ) {
            aux = vendedor[i];          //compara el importe del arreglo con el monto
            if (aux == monto) {
                semana = i+1;
            };
        }
        return semana;
}
function verMes(vendedor: number[], semana): number{ //tengo que mostrar en que mes es el monto
let i: number=0;
    for (i=0 ; i<vendedor.length ; i++) {
        // el mes
    }
}


function promedioSemanal(vendedor: number[]): number {
let promedio: number;
let i: number;
let suma: number = 0;
    for(i=0 ; i<vendedor.length ; i++) {
        suma= suma + vendedor[i];
        promedio = suma/vendedor.length;
    }
return promedio;
}
for( i=0 ; i< nombresVendedores.length ; i++) {         //imprimir . Tendria que listar cada uno de los vendedores y sus datos
 console.log ("El nombre del vendedor es: ", nombresVendedores[i]);
 console.log ("Su venta maxima es de $: " , calcularVentaMaxima(venCamila), "y fue en la semana ", verSemana(venCamila,calcularVentaMaxima(venCamila)) ,"y en el mes ", verMes()) ; 
 console.log ("Su venta minima es de $: " , calcularVentaMinima(venCamila), "y fue en la semana ",  ,"y en el mes ");
 console.log ("Su promedio de ventas es de $: " , promedioSemanal(venCamila));
}
