// sección con el in

interface IIdName {
    id: number;
    name: string;
}

interface DescrValue {
    descr: string;
    value: number;
}

function printString (obj: IIdName | DescrValue) {
   
    if('id' in obj) {
        console.log(`obj.name : ${obj.name}` )
    }
    if ('descr' in obj) {
        console.log( `obj.name : ${obj.descr}` )
    }
}

printString ({id: 1, name: 'Juan'})
printString ({descr: 'test', value: 2})


// sección del keyof

type IdNameProperty = keyof IIdName

function getProperty(key: IdNameProperty, value: IIdName)
{
    console.log(`${key} = ${value}`)
}
getProperty('id', {id: 1, name: 'Juan'})