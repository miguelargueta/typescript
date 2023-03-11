interface Base {
    id: number;
    
}

interface DerivedFromBase extends Base{
    name: string
}
class NumberNameClass implements DerivedFromBase{
    name = 'test'
    id = 10
    // sino declaramos todas las propiedades
    //de la interfaz, incluidas las heredadas
    //typescript marcará error.
}
interface StringNumnberBase {
    id : string | number;

}
interface DerivedFromStringNumberBase
extends StringNumnberBase{
    id: string
}

interface Print {
    print: () => void
}

let myStringId: DerivedFromStringNumberBase = {id:'1'}

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


// ----- Herencia en clases

class BaseClass {
    id: number = 1
}

class MyClass extends BaseClass implements Print{
    name: string = ''
    print(){}
}
let myClass: MyClass = { 
    id: 10, 
    name: 'Juan',
    print: () => {}
}

