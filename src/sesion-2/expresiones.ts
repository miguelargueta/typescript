const value: number=10

/*let message: string = (value > 10) ? 'verdadero' : 'falso'

if ( value > 9) {
message = 'verdadero'
} else {
    message = 'false'
}
console.log (message)
*/
const message: string = value > 10 ?
'El valor es mayor que 10' :
'El valor es menor o igual a 10'
console.log(message)

function nullishCheck (a: number | null | undefined) {
    console.log('a =' + (a ?? ' es nulo o indefinido'))

}

nullishCheck(1)
nullishCheck( null)
nullishCheck(undefined)
