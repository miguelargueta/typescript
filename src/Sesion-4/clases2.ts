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

class ClassMods {
    constructor (public id: number, private name: string)
    {
        let realName = `Sr. ${name}`
        this.name = realName
    }

}
let myClassMods = new ClassMods(2, 'juan')
console.log(`myClassMods.id= ${myClassMods.id}`)

class ClassReadonly {
    readonly name: string;
    constructor (name: string) {
        this.name = name
    }
}

let myClassReadonly = new ClassReadonly('juanh')

// no podemos modificar propiedades encapsuladas readonly
// como  : myClassReadonly.name = 'Pedro'
console.log(myClassReadonly.name)

class ClassWithAccesors {
    private _id: number = 10

    get id() : number {
        return this._id
    }
    
    
    public set id(v : number) {
        this._id = value;
    }
    
}
let myClassWithAccesors = new ClassWithAccesors()
console.log(myClassWithAccesors.id)
myClassWithAccesors.id = 100
console.log(myClassWithAccesors.id)
