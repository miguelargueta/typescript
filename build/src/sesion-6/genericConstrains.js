"use strict";
let myPersonPropertuName = "id";
function printProperty(object, key) {
    let propertValue = object[key];
    console.log(`object[${String(key)}] = ${propertValue}`);
}
const object1 = {
    id: 1,
    name: "test",
    print() { console.log("hola"); }
};
printProperty(object1, "id");
printProperty(object1, "name");
printProperty(object1, "print");
const object2 = {
    id: 1,
    lastname: "test",
    print() { console.log("hola"); }
};
printProperty(object2, "lastname");
