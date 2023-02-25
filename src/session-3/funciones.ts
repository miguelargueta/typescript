const suma = (a, b) => {
    return a + b
}
console.log (suma(2,3))
console.log (suma(2))
console.log (suma(2,3,6))


// tipando los parametros en sumanumeros
const sumaNumeros = (a: any b: any) => {
    return a + b
}
console.log (sumaNumeros(2,3))

//las siguientes lineas dan errores porque 
//tienen diferente número de parámetros
//console.log (sumaNumeros(2))
//console.log (sumaNumeros(2,3,6))


// la siguiente función es con parametro opcional
const concatValues  =(a: string, b?: string) => {
    console.log('a + b = ' + a + (b ?? 'Y No viene dato'))
}

concatValues('primero', 'segundo')
concatValues('tercero')

// la siguiente opción es de parámetro con defecto
const concatValues2  =(a: string, b: string =' Valor por Defecto') => {
    console.log('a + b = ' + a + b)
}

concatValues2('primero', 'segundo')
concatValues2('tercero')



