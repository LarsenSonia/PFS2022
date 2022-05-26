"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var llego = false;
while (llego == false) {
    var mirarSiLlego = rls.question("Mire si llego el colectivo. Si llego, escriba s, sino escriba n: ");
    if (mirarSiLlego == "s") {
        llego = true;
    }
}
;
