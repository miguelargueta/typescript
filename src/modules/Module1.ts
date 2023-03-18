export class Module1 {
    print() {
        localPrint('Module1.print() called')
    }
}

// esta funcipon solo exuste en el ambito de este archivo
//  y no la podemos usar fuera de él
function localPrint(text: string) {
    console.log(`localprint : ${text}`)
}
