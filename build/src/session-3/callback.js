"use strict";
let myCallback = (text) => {
    console.log('myCallback called with ' + text);
};
// el tipado de las funciones ignora el nombre de los
// parámetros pero no la cantidad o el tipo de valor
// de los mismos
function withCallbackArg(message, callbackfn) {
    console.log('withCallback called, message ' + message);
    callbackfn(message + ' from withCallback');
}
// console.log(myCallback('initial text'))
// no da error
console.log(withCallbackArg('initial text', myCallback));
// da error por que espera que sea una función
// console.log(withCallbackArg('initial text', 'myCallback'))
