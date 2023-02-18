"use strict";
function checkDoorState(state) {
    console.log(`El valor del estado es ${state}`);
    switch (state) {
        case 3 /* DoorState.Open */:
            console.log('La puerta esta abierta');
            break;
        case "cerrado" /* DoorState.Closed */:
            console.log('La puerta esta Cerrada');
            break;
    }
}
checkDoorState(3 /* DoorState.Open */);
checkDoorState("cerrado" /* DoorState.Closed */);
