"use strict";
const value = 10;
/*let message: string = (value > 10) ? 'verdadero' : 'falso'

if ( value > 9) {
message = 'verdadero'
} else {
    message = 'false'
}
console.log (message)
*/
const message = value > 10 ?
    'El valor es mayor que 10' :
    'El valor es menor o igual a 10';
console.log(message);
function nullishCheck(a) {
    console.log('a =' + (a !== null && a !== void 0 ? a : ' es nulo o indefinido'));
}
nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);
