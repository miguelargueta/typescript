const enum DoorState {
    Open = 3,
    Closed = 'cerrado'
}

function checkDoorState( state: DoorState) {
    console.log(`El valor del estado es ${state}`)
    switch (state) {
        case DoorState.Open:
            console.log('La puerta esta abierta')
            break

        case DoorState.Closed:
            console.log('La puerta esta Cerrada')
            break


    }

}
checkDoorState(DoorState.Open)
checkDoorState(DoorState.Closed)