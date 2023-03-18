import { Module1 as MyMod1 } from "./src/modules/Module1";
// cada clase o método que exportemos 
// tiene que ser separado por una coma
import { MultpleClass1, MultpleClass2 } from "./src/modules/MultipleExports";

let myModule1 = new MyMod1()
myModule1.print()

let myMC1 = new MultpleClass1()
let myMC2 = new MultpleClass2()
