const sumaNumeros = (a: number, b: number) => {
    return a + b
}

console.log(sumaNumeros(2, 3))
// lo siguiente nos dara error en Ts
// console.log(sumaNumeros(2))
// console.log(sumaNumeros(2, 3, 6))

// parámetro opcional
const concatValues = (a: string, b?: string) => {
    return console.log('a+b = ' + a + b)
}

concatValues('primero', 'segundo')
concatValues('tercero')

// parámetro por defecto
const concatWithDafaultValues = (a: string, b: string = 'hola') => {
    return console.log('a+b = ' + a + b)
}

concatWithDafaultValues('primero', 'segundo')
concatWithDafaultValues('tercero')