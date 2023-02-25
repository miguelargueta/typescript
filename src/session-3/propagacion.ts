let firstObj : object = {id: 1, name: 'firstObj'}
let secondObj : object = {lastName: 'test', ...firstObj}

console.log('secondObj' + JSON.stringify(secondObj))

let nameObjt: object = {name : 'nameObj'}
let idObj: object={ id: 2}
let obj3: object={...nameObjt, ...idObj}

console.log(obj3)

let firstArry: number[] = [1, 2, 3]
let secondArry: number[] = [4, 5, 6]
let thirdArry = [...firstArry, secondArry]

console.log ('thirdArry =' thirdArry)