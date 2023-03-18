"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module1 = void 0;
class Module1 {
    print() {
        localPrint('Module1.print() called');
    }
}
exports.Module1 = Module1;
// esta funcipon solo exuste en el ambito de este archivo
//  y no la podemos usar fuera de él
function localPrint(text) {
    console.log(`localprint : ${text}`);
}
