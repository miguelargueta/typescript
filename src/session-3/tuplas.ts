
let tupla1: [string, boolean]
tupla1 = ['hola', true]
// las siguientes asignaciones nos dan error
//porque una tupla typscript la considera fuertemente tipada
//tupla1 = ['h0la']
//tupla1 = ['hola',false, 'h0ola' ]
//tupla1 = [false, hola ]

console.log (tupla1[0])
console.log (tupla1[1])

let [tuplaString, tuplaBoolean] = tupla1

console.log(tuplaString)
console.log(tuplaBoolean)

let complexObnj = {
    aNum: 1,
    bStr: 'name',
    cBool: true
}

let {aNum, bStr, cBool} = complexObnj
console.log(aNum)
console.log(bStr)
console.log(cBool)
console.log(complexObnj)

function myF (
    aNum: number, bStr: string, cBool: boolean
) {
    
}

