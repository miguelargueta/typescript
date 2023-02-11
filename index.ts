let text: string = 'hola'
text = 'Hola2'

console.log( text)

function suma(num1: number, num2: number): number {
    return num1 + num2

}

console.log(suma(5, 5))

let booleanos : boolean = false
let a: string =''
let arreglos: string[] = ['hola', a, text]
let objetos: object ={id: 1, nombre: 'Pedor'}
let nulos: null = null
let cualquierDato: any = '' //no se recomienda

// null no es lo mismo que void, null es considerado un valor
//mientras que void es ausencia de valor
function imprimirEnConsola ( mensaje: string): void {
    console.log (mensaje)
}

//la palabra undefines para saber si una propiedad esta definida 
//let b : object = {id: 2}

//if (b.nombre === undefined){
//    b = {id: b.id, nombre:''}
//}

