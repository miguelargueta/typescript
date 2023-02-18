"use strict";
/*let myObject = {
    x: 1,
    y: 2
}

function printCoord (pt: {x: number}) {
    console.log(pt.x)

}

printCoord({x: 1})
*/
function printCoord(pt) {
    console.log('La coordenada x esw igual a ' + pt.x);
    console.log('La coordenada y esw igual a ' + pt.y);
}
let myObject = {
    x: 1,
    y: 10
};
printCoord(myObject);
