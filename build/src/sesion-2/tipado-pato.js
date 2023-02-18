"use strict";
var MyIdObject = { name: 'myName', id: 1, print() { } };
MyIdObject = { id: 2, name: 'OtroNombre', print() { } };
// la siguiente funcion da error porque 
// el tipado de pato garantiza que el tipado 
//de un objeto sea el mimo y abajo falta el print()
//MyIdObject = { id: 3, name: 'otro nombre'}
var obj1 = { id: 1, printi() { } };
var obj2 = { id: 2, print() { }, select() { } };
obj1 = obj2; //cabe en la estructura sin problemas
//obj2 = obj1  marca error porque el obj2 espera 3 parametros
