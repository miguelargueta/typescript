"use strict";
function printGeneric(value) {
    console.log(`typeof T es : ${typeof value}`);
    console.log(`Su calor es : ${value}`);
}
// si especificamos el tipado de t
//el parametro espera el mismo tipo 
// printGeneric<string>
printGeneric(1);
printGeneric("TEST");
printGeneric(true);
printGeneric(() => { });
printGeneric({ Id: 1 });
