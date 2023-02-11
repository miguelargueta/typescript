"use strict";
let text = 'hola';
text = 'Hola2';
console.log(text);
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(5, 5));
let booleanos = false;
let a = '';
let arreglos = ['hola', a, text];
let objetos = { id: 1, nombre: 'Pedor' };
let nulos = null;
let cualquierDato = ''; //no se recomienda
// null no es lo mismo que void, null es considerado un valor
//mientras que void es ausencia de valor
function imprimirEnConsola(mensaje) {
    console.log(mensaje);
}
//la palabra undefines para saber si una propiedad esta definida 
//let b : object = {id: 2}
//if (b.nombre === undefined){
//    b = {id: b.id, nombre:''}
//}
