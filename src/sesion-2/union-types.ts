function printObject(obj: number | string) {
    console.log(obj)
}

printObject(1)
printObject('hola')

function addWithUnion (arg1: string | number, 
    arg2: string |number){
        if (typeof arg1=== 'string'){
            console.log('El parametro arg1 es cadena')
            return arg1 + arg2
        }    
}
console.log(addWithUnion('hola ', 'mundo'))

type StringOrNumber = string | number

function addwithTypeAlias(
    arg1: StringOrNumber,
    arg2: StringOrNumber) {
        if (typeof arg1 === 'string') {

            console.log ('el tipo de datos arg1 es un string')
            return arg1 + arg2
        }
    }
