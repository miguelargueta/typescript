"use strict";
class SimpleClass {
    print() {
        console.log(`SimpleClass.id = ${this.id} `);
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 10;
mySimpleClass.print();
let mySimpleClassA = new SimpleClass();
mySimpleClassA.id = 30;
mySimpleClassA.print();
//implementación de interfaces
class ClassA {
    print() {
        console.log('ClassA.print() HA sido llamado');
    }
}
class ClassB {
    print() {
        console.log('ClassB.print() HA sido llamado');
    }
}
function printClass(a) {
    a.print();
}
let myClassA = new ClassA();
let myClassB = new ClassB();
printClass(myClassA);
printClass(myClassB);
//tipado pato
class ClassC {
    print() {
        console.log('ClassC.print() HA sido llamado C');
    }
}
let myClassC = new ClassC();
printClass(myClassC);
