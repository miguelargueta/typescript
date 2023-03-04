class ClassWhitConstructor {
    id: number | undefined;
    constructor(id?: number) {
        this.id = id
    }
}
let classWC = new ClassWhitConstructor(10)
console.log (`classwc = ${JSON.stringify(classWC)}`)

class ClassWithPublicProperty {
    id: number | undefined
}

let MyClassWithPublicP = new ClassWithPublicProperty () 

MyClassWithPublicP.id =10
console.log(MyClassWithPublicP.id)

class ClassWithPrivateProperty {
    private id: number
    constructor (id: number) {
        this.id = id
    }
    print() {
        console.log(this.id)
    }
}

let myClassWithPrivateP = new ClassWithPrivateProperty(202)
// No podemos acceder a una propiedad privada
//fuera de la clase por lo que el siguiente renglon no sirve, marca error
//myClassWithPrivateP.id = 20
// pero si utilizar metodos públicos para acceder a ellos, como con el print.
myClassWithPrivateP.print()