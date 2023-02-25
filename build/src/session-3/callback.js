"use strict";
var myCallback = (text) => {
    console.log('myCallback es llamada : ' + text);
    return () => { console.log('funcion anonima'); };
};
function withCallbackArg(message, callbackfn) {
    console.log('con el mensaje, ' + message);
    callbackfn(message + 'del withcallback');
}
//console.log(myCallback('texto inicial'))
// no da error
console.log(withCallbackArg('texto inicial', myCallback));
