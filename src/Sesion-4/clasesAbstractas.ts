abstract class Animal {
    private id: number
    private name: string
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    abstract reproducirse(pareja: Animal): void
}

class Perro extends Animal {
    ladrar() {}
    reproducirse(pareja: Perro): void {
        // guardar o crear un nuevo perro en la BD
    }
}

class Pulpo extends Animal {
    nadar() {}
    reproducirse(pareja: Pulpo): void {
        // 
    }
}

let myOfficeWorker = new Perro(1 , "Frank") 