"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Module1_1 = require("./src/modules/Module1");
// cada clase o método que exportemos 
// tiene que ser separado por una coma
const MultipleExports_1 = require("./src/modules/MultipleExports");
let myModule1 = new Module1_1.Module1();
myModule1.print();
let myMC1 = new MultipleExports_1.MultpleClass1();
let myMC2 = new MultipleExports_1.MultpleClass2();
