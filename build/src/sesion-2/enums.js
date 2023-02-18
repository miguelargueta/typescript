"use strict";
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 3] = "Open";
    DoorState["Closed"] = "cerrado";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log(`El valor del estado es ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log('La puerta esta abierta');
            break;
        case DoorState.Closed:
            console.log('La puerta esta Cerrada');
            break;
    }
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
