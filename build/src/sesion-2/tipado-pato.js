"use strict";
//  si parece un pato y grazna (quack quack) como un pato,
//  entonces probablemente sea un pato 
var myIdObject = { name: 'myName', id: 1, print() { } };
myIdObject = { id: 2, name: 'otherName', print() { } };
/*
    la siguiente asignación da error por que
    el tipado pato garantiza que el tipado de un objeto
    sea el mismo
*/
// myIdObject = {id: 3, name: 'otherName2'}
var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } };
obj1 = obj2;
// da error por que al obj1 le hace falta la propiedad select()
// obj2 = obj1
