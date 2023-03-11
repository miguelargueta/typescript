interface Base {
    id: number;
}

interface DerivedFromBase extends Base {
    name: string
}

class NumberNameClass implements DerivedFromBase {
    name = 'test'
    // si declaramos todas las proiedades de la interfaz
    // incluidas las heredadas ts marcara error
    id = 10
}

interface StringNumberBase {
    id: string | number;
}

interface DerivedFromStringNumberBase 
extends StringNumberBase{
    id: number
}

interface Print {
    print: () => void
}

let myStringId: DerivedFromStringNumberBase = {id: 1}

interface Multiple extends DerivedFromBase, Print {
    lastName: string;
}

let myMultiple: Multiple = {
    id: 1, 
    name: 'Juan', 
    print: () => {
        console.log('hola')
    },
    lastName: 'Uribe'
}

// ---------- Herencia en clases -----------

class BaseClass {
    id: number = 1
}

class MyClass extends BaseClass 
implements Print, DerivedFromBase {
    name: string = ''
    print() {

    }
}

let myClass: MyClass = {
    id: 10, 
    name: 'Juan',
    print: () => {}
}

// ---------- palabra super -----------

class ClassWithCtor {
    private _id: number
    // las propiedades protecteds solo son accesibles
    // en la clase donde se definieron y
    // sus clases derivadas
    protected lastname: string
    constructor(id: number) {
        this._id = id
        this.lastname = 'Uribe'
    }

    // la implementaciónde los getters y setters
    // se hace en la clase donde se definio
    // la propiedad privada
    public get id() : number {
        return this._id
    }
    
    print(text: string): void {
        console.log(`ClassWithCtor.print() : ${text}`)
    }
}

class DerivedFormClassWithCtor extends ClassWithCtor {
    private name: string
    constructor(id: number, name: string) {
        super(id)
        this.name = name
        this.lastname = 'Pérez'
    }
    print(text: string): void {
        console.log(`DerivedFormClassWithCtor.print() : ${text}`)
        // return true
    }  
}

let myClassD: DerivedFormClassWithCtor
= new DerivedFormClassWithCtor(1, 'Juan')

myClassD.print('hola')

// nos da error por que no podemos acceder a ella
// solamente dentro de la clase base o derivada
// myClassD.lastname