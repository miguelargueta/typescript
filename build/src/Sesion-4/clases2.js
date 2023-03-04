"use strict";
class ClassWhitConstructor {
    constructor(id) {
        this.id = id;
    }
}
let classWC = new ClassWhitConstructor(10);
console.log(`classwc = ${JSON.stringify(classWC)}`);
class ClassWithPublicProperty {
}
let MyClassWithPublicP = new ClassWithPublicProperty();
MyClassWithPublicP.id = 10;
console.log(MyClassWithPublicP.id);
class ClassWithPrivateProperty {
    constructor(id) {
        this.id = id;
    }
    print() {
        console.log(this.id);
    }
}
let myClassWithPrivateP = new ClassWithPrivateProperty(202);
// No podemos acceder a una propiedad privada
//fuera de la clase por lo que el siguiente renglon no sirve, marca error
//myClassWithPrivateP.id = 20
// pero si utilizar metodos públicos para acceder a ellos, como con el print.
myClassWithPrivateP.print();
class ClassMods {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        let realName = `Sr. ${name}`;
        this.name = realName;
    }
}
let myClassMods = new ClassMods(2, 'juan');
console.log(`myClassMods.id= ${myClassMods.id}`);
class ClassReadonly {
    constructor(name) {
        this.name = name;
    }
}
let myClassReadonly = new ClassReadonly('juanh');
// no podemos modificar propiedades encapsuladas readonly
// como  : myClassReadonly.name = 'Pedro'
console.log(myClassReadonly.name);
class ClassWithAccesors {
    constructor() {
        this._id = 10;
    }
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = value;
    }
}
let myClassWithAccesors = new ClassWithAccesors();
console.log(myClassWithAccesors.id);
myClassWithAccesors.id = 100;
console.log(myClassWithAccesors.id);
