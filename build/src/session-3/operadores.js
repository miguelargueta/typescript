"use strict";
// sección con el in
function printString(obj) {
    if ('id' in obj) {
        console.log(`obj.name : ${obj.name}`);
    }
    if ('descr' in obj) {
        console.log(`obj.name : ${obj.descr}`);
    }
}
printString({ id: 1, name: 'Juan' });
printString({ descr: 'test', value: 2 });
function getProperty(key, value) {
    console.log(`${key} = ${value}`);
}
getProperty('id', { id: 1, name: 'Juan' });
