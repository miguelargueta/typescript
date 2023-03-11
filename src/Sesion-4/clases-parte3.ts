class ClassStatic {
    static printTwo(){
        console.log('2')
    }
printNumber() {
    console.log('10')
}

}

let myClassStatic = new ClassStatic()
myClassStatic.printNumber()
//los metodos estaticos no pueden ser 
//llamados por objetos de la clase
//myClassStatic.printTwo()

ClassStatic.printTwo()
    //los metodos comunis necesitan ser 
    //llamados desde una instancia de la clase
    //ClassStatic.printNumber()

class StaticPorperty {
    static count: number = 100
    updateCount(){
        StaticPorperty.count++
    }
}

let myStaticPorperty = new StaticPorperty()
console.log (StaticPorperty.count)

myStaticPorperty.updateCount()
console.log (StaticPorperty.count)


// El ambito de la propiedad estatica
//es el mismo para todo el código
//no importa que instancia lo modifique
// es como una constante de clase
let myStaticPorperty2 = new StaticPorperty()
myStaticPorperty2.updateCount()
console.log(StaticPorperty.count)
