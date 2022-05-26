import * as rls from 'readline-sync';
let llego:boolean = false;
while (llego == false) {
    let mirarSiLlego : string = rls.question("Mire si llego el colectivo. Si llego, escriba s, sino escriba n: ");
if (mirarSiLlego == "s") {llego=true}
};