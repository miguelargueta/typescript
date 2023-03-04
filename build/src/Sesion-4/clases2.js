"use strict";
class ClassWhitConstructor {
    constructor(id) {
        this.id = id;
    }
}
let classWC = new ClassWhitConstructor(10);
console.log(`classwc = ${JSON.stringify(classWC)}`);
