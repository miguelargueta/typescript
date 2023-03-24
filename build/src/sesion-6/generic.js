"use strict";
function printGeneric(value) {
    console.log(`typeof T es: ${typeof value}`);
    console.log(`su valor es: ${value}`);
}
// si especificamos el tipado de T 
// el parámetro espera el mismo tipo
// printGeneric<string>(1)
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });
// Podemos definir n tipados genéricos, pero se recomienda
// que se menor o igual a la cantidad de parametros que tenga la función
function usingTwoTypes(first, second) { }
// al espeficar el tipado, debemos señalar todos los tipos genéricos definidos
usingTwoTypes(1, 2);
usingTwoTypes(1, "test");
usingTwoTypes("test", true);
class Concatenetor {
    concatenetArray(items) {
        let returnString = "";
        for (let i = 0; i < items.length; i++) {
            returnString += i === 0 ? "" : ",";
            returnString += items[i].toString();
        }
        return returnString;
    }
}
let myConcatenetor = new Concatenetor();
let concatResult = myConcatenetor.concatenetArray([
    "first", "second", "third"
]);
console.log(concatResult);
concatResult = myConcatenetor.concatenetArray([
    1, 2, 3
]);
console.log(concatResult);
// podemos reducir el tipado ya definido haciendo uso de
// la definiciópn espécifica pero solo admite los tipos de valores que
// indicamos en la definición de la clase
let myConcatenetor2 = new Concatenetor();
function useT(item) {
    item.print();
    // no lo permite por que la propiedad no es común en la interfaces
    // item.id = 1
    // item.name = "juan"
}
