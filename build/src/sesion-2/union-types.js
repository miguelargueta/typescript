"use strict";
function printObject(obj) {
    console.log(obj);
}
printObject(1);
printObject('hola');
function addWithUnion(arg1, arg2) {
    if (typeof arg1 === 'string') {
        console.log('El parametro arg1 es cadena');
        return arg1 + arg2;
    }
}
console.log(addWithUnion('hola ', 'mundo'));
function addwithTypeAlias(arg1, arg2) {
    if (typeof arg1 === 'string') {
        console.log('el tipo de datos arg1 es un string');
        return arg1 + arg2;
    }
}
