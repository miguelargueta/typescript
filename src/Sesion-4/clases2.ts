class ClassWhitConstructor {
    id: number | undefined;
    constructor(id?: number) {
        this.id = id
    }
}
let classWC = new ClassWhitConstructor(10)
console.log (`classwc = ${JSON.stringify(classWC)}`)
