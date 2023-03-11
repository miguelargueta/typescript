"use strict";
class NumberNameClass {
    constructor() {
        this.name = 'test';
        // si declaramos todas las proiedades de la interfaz
        // incluidas las heredadas ts marcara error
        this.id = 10;
    }
}
let myStringId = { id: 1 };
let myMultiple = {
    id: 1,
    name: 'Juan',
    print: () => {
        console.log('hola');
    },
    lastName: 'Uribe'
};
// ---------- Herencia en clases -----------
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
    print() {
    }
}
let myClass = {
    id: 10,
    name: 'Juan',
    print: () => { }
};
// ---------- palabra super -----------
class ClassWithCtor {
    constructor(id) {
        this._id = id;
        this.lastname = 'Uribe';
    }
    // la implementaciónde los getters y setters
    // se hace en la clase donde se definio
    // la propiedad privada
    get id() {
        return this._id;
    }
    print(text) {
        console.log(`ClassWithCtor.print() : ${text}`);
    }
}
class DerivedFormClassWithCtor extends ClassWithCtor {
    constructor(id, name) {
        super(id);
        this.name = name;
        this.lastname = 'Pérez';
    }
    print(text) {
        console.log(`DerivedFormClassWithCtor.print() : ${text}`);
        // return true
    }
}
let myClassD = new DerivedFormClassWithCtor(1, 'Juan');
myClassD.print('hola');
// nos da error por que no podemos acceder a ella
// solamente dentro de la clase base o derivada
// myClassD.lastname
