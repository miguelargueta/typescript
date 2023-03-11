"use strict";
class NumberNameClass {
    constructor() {
        this.name = 'test';
        this.id = 10;
        // sino declaramos todas las propiedades
        //de la interfaz, incluidas las heredadas
        //typescript marcará error.
    }
}
let myStringId = { id: '1' };
let myMultiple = {
    id: 1,
    name: 'Juan',
    print: () => {
        console.log('hola');
    },
    lastName: 'Uribe'
};
// ----- Herencia en clases
class BaseClass {
    constructor() {
        this.id = 1;
    }
}
class MyClass extends BaseClass {
    constructor() {
        super(...arguments);
        this.name = '';
    }
    print() { }
}
let myClass = {
    id: 10,
    name: 'Juan',
    print: () => { }
};
